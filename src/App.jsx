import React, { useState } from "react";
import "./App.css";

import ShoppingCreate from "./Components/ShoppingCreate";
import ShoppingList from "./Components/ShoppingList";

function App() {
  const [items, setItems] = useState([]);

  const createItem = (addItem) => {
    if (items.length >= 6) {
      alert("Ekonomi kötü kendine gel !!!!.");
      return;
    }

    const createdItem = [
      ...items,
      {
        id: Math.round(Math.random() * 999),
        addItem,
      },
    ];

    setItems(createdItem);
  };

  const deleteShoppingById = (id) => {
    const afterDeletingShopping = items.filter((item) => {
      return item.id !== id;
    });
    setItems(afterDeletingShopping);
  };

  return (
    <>
      <ShoppingCreate onCreate={createItem} />
      <ShoppingList item={items} onDelete={deleteShoppingById} />
    </>
  );
}

export default App;
