import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [name, ] = useState("Dave")

  const clickTheButton = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Title name={name} />
      <Card clickTheButton={clickTheButton} count={count} />
      <h2>Count is currently: {count}</h2>
    </>
  );
}

export default App;
