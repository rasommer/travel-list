import React from "react";

interface FormProps {
  addNewItem: (description: string, quantity: number) => void;
}

function Form({ addNewItem }: FormProps) {
  const [description, setDescription] = React.useState<string>("");
  const [quantity, setQuantity] = React.useState<number>(1);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (description === "") {
      alert("Please enter an item description");
    } else {
      addNewItem(description, quantity);
    }
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function handleQuantityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setQuantity(Number(event.target.value));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={handleQuantityChange}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleDescriptionChange}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
