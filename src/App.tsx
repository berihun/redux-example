import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Display from "./Display";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Welcome!</p>;
      <Counter />
      <Display />
    </div>
  );
}

export default App;
