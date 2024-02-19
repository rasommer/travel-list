import React from "react";
import { PackingListItem } from "../App";

interface ItemProps {
  item: PackingListItem;
  togglePacked: (id: number) => void;
}

function Item(props: ItemProps) {
  const { item, togglePacked } = props;

  const handleTogglePacked = () => {
    togglePacked(item.id);
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
