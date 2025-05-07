import React from "react";
import "./MenuItems.css";

const MenuItems = ({ selectedCategory }) => {
  const myFoodItems = [
    {
      name: "Paratha",
      detail: "Flaky, buttery flatbread served hot.",
      imageUrl: "/assets/paratha.jpg",
      category: "Breakfast",
      price: "$2",
    },
    {
      name: "Pancakes",
      detail: "Soft and fluffy breakfast delight.",
      imageUrl: "/assets/pancakes.jpg",
      category: "Breakfast",
      price: "$5",
    },
    {
      name: "Eggs",
      detail: "Lightly fried eggs, protein-packed.",
      imageUrl: "/assets/egg.jpg",
      category: "Breakfast",
      price: "$1",
    },
    {
      name: "Halwa Puri",
      detail: "Classic sweet and savory combo.",
      imageUrl: "/assets/halwa-puri.jpg",
      category: "Breakfast",
      price: "$7",
    },
    {
      name: "Butter Chicken",
      detail: "Creamy chicken curry with rich flavors.",
      imageUrl: "/assets/Butter-Chicken.webp",
      category: "Lunch",
      price: "$20",
    },
    {
      name: "Biryani",
      detail: "Spiced rice with tender meat layers.",
      imageUrl: "/assets/Biryani.webp",
      category: "Lunch",
      price: "$10",
    },
    {
      name: "Qorma",
      detail: "Slow-cooked curry with aromatic spices.",
      imageUrl: "/assets/qorma.jpg",
      category: "Lunch",
      price: "$8",
    },
    {
      name: "Chicken Karahi",
      detail: "Tangy and spicy chicken cooked in a wok.",
      imageUrl: "/assets/Chicken-Karahi.jpg",
      category: "Lunch",
      price: "$15",
    },
    {
      name: "Banana Shake",
      detail: "Chilled shake made with ripe bananas.",
      imageUrl: "/assets/banana-shake.jpg",
      category: "Shakes",
      price: "$6",
    },
    {
      name: "Chocolate Shake",
      detail: "Rich and creamy chocolate indulgence.",
      imageUrl: "/assets/choclate-shake.jpg",
      category: "Shakes",
      price: "$7",
    },
    {
      name: "Strawberry Shake",
      detail: "Fresh strawberries blended to perfection.",
      imageUrl: "/assets/stawberry-shake.jpg",
      category: "Shakes",
      price: "$8",
    },
    {
      name: "Mango Lassi",
      detail: "Sweet mango yogurt drink, chilled.",
      imageUrl: "/assets/mango-lassi.jpg",
      category: "Shakes",
      price: "$9",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? myFoodItems
      : myFoodItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Menu items */}
      <div className="menu-list">
        <div className="menu-items">
          {filteredItems.map((item) => (
            <div
              className={`card ${item.category.toLowerCase()}`}
              key={item.name}
            >
              <img src={item.imageUrl} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="detail">{item.detail}</p>
              <p className="price">Price: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuItems;
