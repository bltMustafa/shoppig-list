import "../Components-Style/ShoppingList.css";
import ShoppingShow from "./ShoppingShow";

function ShoppingList({ item, onDelete }) {
  return (
    <div className="shopping-list">
      {item.map((item, key) => {
        return <ShoppingShow items={item} key={key} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default ShoppingList;
