import React from "react";
import "./Navbar.css";
const Navbar = ({ setSelectedCategory }) => {
  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  return (
    <>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
