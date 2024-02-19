import React from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export type PackingListItem = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

const initialItems: PackingListItem[] = [
  { id: 1, description: "Pants", quantity: 3, packed: false },
  { id: 2, description: "Jacket", quantity: 1, packed: false },
  { id: 3, description: "Shirts", quantity: 5, packed: false },
  { id: 4, description: "Hat", quantity: 2, packed: true },
  { id: 5, description: "Shoes", quantity: 2, packed: false },
  { id: 6, description: "Socks", quantity: 7, packed: false },
  { id: 7, description: "Underwear", quantity: 7, packed: false },
  { id: 8, description: "Sleepwear", quantity: 3, packed: false },
  { id: 9, description: "Toothbrush", quantity: 1, packed: false },
  { id: 10, description: "Phone Charger", quantity: 1, packed: false },
  { id: 11, description: "Belt", quantity: 1, packed: false },
  { id: 12, description: "Sunglasses", quantity: 1, packed: false },
  { id: 13, description: "Bag", quantity: 1, packed: false },
  { id: 14, description: "Headphones", quantity: 1, packed: false },
  { id: 15, description: "Laptop", quantity: 1, packed: false },
];

function App() {
  const [packingListItems, setPackingListItems] =
    React.useState<PackingListItem[]>(initialItems);

  const addNewItem = (description: string, quantity: number) => {
    const maxId: number = packingListItems
      .map((i) => i.id)
      .reduce((a, b) => Math.max(a, b), 0);
    const newItem: PackingListItem = {
      id: maxId + 1,
      description: description,
      quantity: quantity,
      packed: false,
    };
    packingListItems.push(newItem);
    setPackingListItems([...packingListItems]);
  };

  const togglePacked = (id: number) => {
    const item = packingListItems.find((i) => i.id === id);
    if (item) {
      item.packed = !item.packed;
      setPackingListItems([...packingListItems]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList items={packingListItems} togglePacked={togglePacked} />
      <Stats />
    </div>
  );
}

export default App;
