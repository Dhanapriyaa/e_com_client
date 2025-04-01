import React from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products";  // ✅ Make sure this file exists

const Products = () => {
  return (
    <div>
      <h2>Our Products</h2>
      <div className="product-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
