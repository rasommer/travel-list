import React from "react";
import { PackingListItem, updatePackingListItem } from "../App";

function Item(props: PackingListItem) {
  const item: PackingListItem = props;

  const handleTogglePacked = () => {
    const togglePacked = updatePackingListItem(undefined);
    if (togglePacked) {
      togglePacked(item.id);
    }
  };

  return (
    <li>
      <span
        style={item.packed ? { textDecorationLine: "line-through" } : {}}
      >{`${item.quantity} ${item.description}`}</span>
      <button onClick={handleTogglePacked}>❌</button>
    </li>
  );
}

export default Item;
