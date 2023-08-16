import "../Components-Style/ShoppingShow.css";

function ShoppingShow({ items, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(items.id);
  };

  return (
    <div className="list-show">
      <div className="list-items">
        <ul>
          <li> {items.addItem} </li>
          <button onClick={handleDeleteClick}>X</button>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingShow;
