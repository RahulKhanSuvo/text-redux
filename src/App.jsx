import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Simple Counter application</h2>
      <Counter />
      <Stats />
    </>
  );
}

export default App;
