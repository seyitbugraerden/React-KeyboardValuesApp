import React, { useState, useEffect } from "react";
import "./App.css";
import "./Card.css";

function App() {
  const [key, setKey] = useState([]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log("Key pressed:", event);
    };

    window.addEventListener("keydown", handleKeyPress);
  }, []); // useEffect sadece bir kez çalışsın, boş dependency array geçiyoruz.

  return (
    <>
      <div className="menu">
        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </>
  );
}

export default App;
