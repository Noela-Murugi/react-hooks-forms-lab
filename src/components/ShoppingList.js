import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchItem] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

//   const filteritem=items.filter((data)=>data.name.toLowerCase().includes(search.toLowerCase()))
//   function handleInput(item){
//     const copy = [...items, item]
//     setItems(copy)
//  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList" >
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={setSearchItem}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} search={search}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
