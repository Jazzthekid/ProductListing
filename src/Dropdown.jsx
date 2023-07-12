const CategoryDropdown = ({ categories, selectedCategory, onChange }) => {
    return (
      <select value={selectedCategory} onChange={onChange}>
        <option value="all">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    );
  };
  
  const SortingDropdown = ({ sortingOption, onChange }) => {
    return (
      <select value={sortingOption} onChange={onChange}>
        <option value="none">Sort by</option>
        <option value="ascending">Alphabetical (A-Z)</option>
        <option value="descending">Alphabetical (Z-A)</option>
      </select>
    );
  };
  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };
  
  const handleSortingChange = event => {
    setSortingOption(event.target.value);
  };
  