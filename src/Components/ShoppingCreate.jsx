import { useState } from "react";

import "../Components-Style/ShoppingCreate.css";

function ShoppingCreate({ onCreate, items }) {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    if (item.trim() === "") {
      alert("Boş bıraktınız.");
      e.preventDefault();
    } else {
      e.preventDefault();
      onCreate(item);
      setItem("");
    }
  };

  const handleClick = () => {
    setItem(items);
  };

  return (
    <div className="box">
      <div className="container">
        <h3 className="shopping-title"> Shopping List</h3>
        <form onSubmit={handleSubmit}>
          <div className="container-input">
            <input
              value={item}
              onChange={handleChange}
              placeholder="Item name"
            />
            <div className="button">
              <button type="submit">Add Item</button>
              <button className="clear-items" onClick={handleClick}>
                Clear Items
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShoppingCreate;
