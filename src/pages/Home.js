
import "../Styles/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import shoesImg from "../assets/shoes.jpg";
import shirtImg from "../assets/casualTshirt.jpg";
import watchImg from "../assets/watch.jpg";
import sunImg from "../assets/sunglass.jpg";
import jackImg from "../assets/leatherjack.jpg";
import backImg from "../assets/backpack.jpg"
import headImg from "../assets/headphones.jpg";
import mobImg from "../assets/smartphone.jpg";
import mouseImg from "../assets/mouse.jpg";
import keyImg from "../assets/keyboard.jpg";
import earImg from "../assets/earbuds.jpg";
import runImg from "../assets/runningshoe.jpg";
import smwatImg from "../assets/smartwatch.jpg";
import glovImg from "../assets/gloves.jpg";
import bagImg from "../assets/handbag.jpg";
import spImg from "../assets/speaker.jpg";
import jeanImg from "../assets/jean.jpg";
import hooImg from "../assets/hood.jpg";
import fitImg from "../assets/tracker.jpg";
import mugImg from "../assets/coffecup.jpg";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "Stylish Shoes", price: "$50", img: shoesImg },
    { id: 2, name: "Casual T-Shirt", price: "$25", img: shirtImg },
    { id: 3, name: "Fashion Watch", price: "$90", img: watchImg },
    { id: 4, name: "Sunglasses", price: "$40", img: sunImg },
    { id: 5, name: "Leather Jacket", price: "$120", img: jackImg },
    { id: 6, name: "Backpack", price: "$60", img: backImg },
    { id: 7, name: "Headphones", price: "$80", img: headImg },
    { id: 8, name: "Smartphone", price: "$500", img: mobImg },
    { id: 9, name: "Gaming Mouse", price: "$45", img: mouseImg },
    { id: 10, name: "Mechanical Keyboard", price: "$100", img: keyImg },
    { id: 11, name: "Wireless Earbuds", price: "$75", img: earImg },
    { id: 12, name: "Smartwatch", price: "$150", img: smwatImg },
    { id: 13, name: "Running Shoes", price: "$55", img: runImg },
    { id: 14, name: "Winter Gloves", price: "$30", img: glovImg },
    { id: 15, name: "Designer Handbag", price: "$200", img: bagImg },
    { id: 16, name: "Portable Speaker", price: "$95", img: spImg },
    { id: 17, name: "Denim Jeans", price: "$70", img: jeanImg },
    { id: 18, name: "Hoodie", price: "$45", img: hooImg },
    { id: 19, name: "Fitness Tracker", price: "$85", img: fitImg },
    { id: 20, name: "Coffee Mug", price: "$20", img: mugImg },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar onSearch={setSearchQuery} />
      
      <section className="hero">
        <h1>Welcome to Our Store</h1>
      </section>
      
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <div className="details">
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <Link to={`/product/${product.id}`}>View Product</Link>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
