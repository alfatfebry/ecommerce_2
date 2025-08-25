import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowSimilarProduct = ({ addProduct }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=4");
        const data = await res.json();
        setSimilarProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching similar products:", error);
        setLoading(false);
      }
    };

    fetchSimilarProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Loading similar products...</p>;
  }

  if (!similarProducts || similarProducts.length === 0) {
    return <p className="text-center">No similar products available.</p>;
  }

  return (
    <div className="py-4 my-4">
      <h4 className="text-center mb-4">Similar Products</h4>
      <div className="d-flex flex-wrap justify-content-center">
        {similarProducts.map((item) => (
          <div
            key={item.id}
            className="card m-3 text-center"
            style={{ width: "16rem" }}
          >
            <img
              className="card-img-top p-3"
              src={item.image || "https://via.placeholder.com/200"}
              alt={item.title}
              height={200}
              style={{ objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.title.length > 15
                  ? item.title.substring(0, 15) + "..."
                  : item.title}
              </h5>
            </div>
            <div className="card-body">
              <Link
                to={`/product/${item.id}`}
                className="btn btn-dark m-1"
              >
                Buy Now
              </Link>
              <button
                className="btn btn-dark m-1"
                onClick={() => addProduct(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSimilarProduct;
