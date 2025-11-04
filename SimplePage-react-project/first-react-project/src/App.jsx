import { useState } from "react";
import "./App.css";

function App() {
  const [showtext, setShowText] = useState(false);
  return (
    <div className="first">
      <p className="text" style={{ fontSize: "40px" }}>
        Hello Everyone
      </p>
      <button onClick={() => setShowText(true)}>Click Me</button>
      {showtext && <p>This is the new text</p>}
    </div>
  );
}

export default App;
