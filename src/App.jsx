import "./App.css";
import { Header } from "./components/Header";
import MenuItems from "./components/MenuItems";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="container">
      <Header />
      {/*  */}
      <Navbar setSelectedCategory={setSelectedCategory} />
      <MenuItems selectedCategory={selectedCategory} />
      {/*  */}
    </div>
  );
}

export default App;
