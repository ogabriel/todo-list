import { useState } from "react";
import "./App.css";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        {/* Hello, REACT :) */}
        <h1>Hello, {`${props.subject.toUpperCase()} :)`}!</h1>
        <button type="button" className="primary">
          Click me
        </button>
      </header>
    </>
  );
}

export default App;
