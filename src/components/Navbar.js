/*import "../Styles/styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to parent component
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">🛍️ MyShop</Link>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div>
      <Link to="/dashboard">Go to Dashboard</Link>

      </div>
    </nav>
  );
}

export default Navbar;*/

import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import "../Styles/styles.css";


const Navbar = ({ toggleSidebar }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>☰ Menu</button>
      
      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/profile">👤 Profile</Link></li>
      </ul>

      {/* Search Bar */}
      <input 
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Dark Mode Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
