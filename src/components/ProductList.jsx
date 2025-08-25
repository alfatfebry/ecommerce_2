import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ProductCard from "./ProductCard";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("https://fakestoreapi.com/products/");
  //       const products = await res.json();
  //       setData(products);
  //       setFilter(products);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        let products = await res.json();

        // Manually add the stock property
        products = products.map((p, i) => ({
          ...p,
          rating: {
            ...p.rating,
            count: i % 5 === 0 ? 0 : p.rating.count // make every 5th product out of stock
          },
          stock: i % 5 === 0 ? 0 : 10 // optional, to add a stock field
        }));

        setData(products);
        setFilter(products);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-4">
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
      </div>

      {filter.map((product) => (
        <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-2 px-0 card-product">
          <ProductCard product={product} onAddToCart={() => addProduct(product)} />
        </div>
      ))}
    </>
  );

  return (
    <div className="container-md my-4 py-4">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="display-5">All Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default ProductList;
