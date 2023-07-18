
import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Product from "./Product";
import "./Product.css";
import Header from "./Header";

function App() {
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  return (
    
  
  <div>
    <Header
     
       handleChange={handleCategoryFilterChange}
       handleCategoryFilterChange={handleCategoryFilterChange}/>
      <div className="grid-container"> 
      {data.products
        .filter((product) => categoryFilter === "" || product.category === categoryFilter)
        .map((product) => (
          <Product key={product.id} product={product} />
        ))}
   </div></div>
  );
}

export default App 
