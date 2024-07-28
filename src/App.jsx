import { useState } from "react";
import { INITIAL_ITEMS } from "./constants";
export default function App() {
  return (
    <div className="h-screen bg-yellow-600">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <h1
      className="bg-yellow-400 flex justify-center h-28
      items-center text-4xl font-bold"
    >
      🌴 Far Away 💼
    </h1>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-20 bg-yellow-800 flex justify-center items-center
      text-lg font-semibold space-x-5"
    >
      <h3 className="text-white">What do you need for your trip?</h3>
      <select
        className="px-2 rounded-md"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..."
        className="px-2 rounded-md"
      />
      <button className="text-white bg-slate-400 px-5 rounded-md ">Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="bg-orange-500 h-[calc(100%-212px)] p-5">
      <ul className="grid lg:grid-cols-4 grid-cols-2">
        {INITIAL_ITEMS.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="p-5 flex justify-center items-center">
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer
      className="absolute bottom-0 bg-yellow-200 w-full p-5
    flex justify-center items-center"
    >
      You have X items on your list, and you already packed X X%
    </footer>
  );
}
