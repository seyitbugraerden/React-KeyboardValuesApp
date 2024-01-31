import React, { useState, useEffect } from "react";
import "./App.css";
import "./Card.css";

function App() {
  const [key, setKey] = useState([]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log("Key pressed:", event);
      setKey(event);
    };

    window.addEventListener("keydown", handleKeyPress);
  }, []); // useEffect sadece bir kez çalışsın, boş dependency array geçiyoruz.

  return (
    <>
      <div style={{ display: {} }}>
        <div className="menu">
          <div className="e-card playing">
            <div className="image"></div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <h2>{key.key}</h2>
          </div>
        </div>
        <div className="menu-2">
          <div className="e-card playing">
            <div className="image"></div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <h2>{key.code}</h2>
          </div>
          <div className="e-card playing">
            <div className="image"> </div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <h2>{key.keyCode}</h2>
          </div>
          <div className="e-card playing">
            <div className="image"></div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <h2>{key.type}</h2>
          </div>
          <div className="e-card playing">
            <div className="image"></div>

            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <h2>{key.location === 0 ? "General Keyboard" : ""}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
