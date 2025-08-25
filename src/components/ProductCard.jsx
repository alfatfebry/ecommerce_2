import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const isOutOfStock = product.stock <= 0;

  const productImage =
    product.thumbnail || (product.images && product.images[0]) || product.image;

  return (
    <div className="col mb-4 mx-0">
      <div className="card h-100 text-center">
        <img
          className="card-img-top p-3"
          src={productImage}
          alt={product.title}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {product.title?.substring(0, 20)}...
          </h5>
          <p className="card-text">
            {product.description?.substring(0, 60)}...
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item lead">${product.price}</li>
        </ul>

        <div className="card-body">
          {isOutOfStock ? (
            <button className="btn btn-outline-danger w-100" disabled>
              Out of Stock
            </button>
          ) : (
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
              <Link to={`/product/${product.id}`} className="w-100 w-sm-auto">
                <button className="btn btn-dark w-100">Buy Now</button>
              </Link>

              {product.stock > 0 ? (
                <button
                  className="btn btn-dark w-100"
                  onClick={onAddToCart}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-danger w-100"
                  disabled
                >
                  Out of Stock
                </button>
              )}

              <select
                className="form-select form-select-sm w-100 w-sm-50"
                defaultValue=""
              >
                <option value="" disabled>
                  Size
                </option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
