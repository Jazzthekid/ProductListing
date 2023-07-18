
import React from "react";

const Header = (props) => {
  return (
    <header>
      <nav>
        
        <div>
          <label>Sort by name:</label>
          <select>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>

        
        <div>
          <label>Sort by category:</label>
          <select value={props.categoryFilter} onChange= {props.handleCategoryFilterChange}>
        <option value="">All</option> 
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skin Care</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decor</option>
      
      </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
