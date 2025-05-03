import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Simple Counter application</h2>
      <Counter />
    </>
  );
}

export default App;
