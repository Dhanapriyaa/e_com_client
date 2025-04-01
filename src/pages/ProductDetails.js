import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products";  // ✅ Make sure this file exists

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
