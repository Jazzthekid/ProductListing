
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
      <Header products={products} handleCategoryFilterChange={handleCategoryFilterChange}/>
      {data.products
        .filter((product) => categoryFilter === "" || product.category === categoryFilter)
        .map((product) => (
          <Product key={product.id} product={product} />
        ))}
   </div>
  );
}

export default App;