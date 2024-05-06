// ItemForm.js
import React, { useState } from 'react';

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now().toString(), // Generating a timestamp-based ID
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
    // Clearing the form fields after submission
    setItemName(''); // Resetting the item name to an empty string
    setItemCategory('Produce'); // Resetting the category to its default value
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={handleNameChange}
        placeholder="Item Name"
        aria-label="Name"
      />
     <select value={itemCategory} onChange={handleCategoryChange} aria-label="Category">
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
        <option value="Dessert">Dessert</option>  {/* Add the "Dessert" option */}
      </select>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
