import "./App.css";
import { useState } from "react";
import Childcom from "./Childcom";

function App() {
  const [childname, setChildname] = useState("Default");

  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <Childcom />
    </div>
  );
}

export default App;
