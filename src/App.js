import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSub() {
    setCount(count - 1);
  }

  return (
    <div className="app">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">Add</button>
        <button onClick={handleSub} className="sub">Sub</button>
      </div>
    </div>
  )
}

