import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [showGreting, setShowGreeting] = useState(false);

  const handleGreet = () => {
    if (name.trim() !== "") {
      setShowGreeting(true);
    }
  };
  const handleRest = () => {
    setName("");
    setShowGreeting(false);
  };
  const handleDone = () => {
    alert("🎊Thankyou  ," + name + "!");
  };

  return (
    <div className="container">
      <h1>Greeting Card Maker</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGreet}>Ganerate Greeting Card</button>
      {showGreting && (
        <div className="greeting-card">
          <h1>Hello {name}!👋</h1>
          <p>Welcome to react learning</p>
          <button onClick={handleRest}>Reset</button>
          <button onClick={handleDone}>Done</button>
        </div>
      )}
    </div>
  );
}
export default App;
