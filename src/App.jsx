import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import "./App.css";
import "./Card.css";

function App() {
  const [key, setKey] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log("Key pressed:", event);
      setKey(event);
      setIsValid(false);
      setTimeout(() => {
        setIsPressed(true);
      }, 1000);
    };

    window.addEventListener("keydown", handleKeyPress);
  }, []); // useEffect sadece bir kez çalışsın, boş dependency array geçiyoruz.

  return (
    <>
      {isValid ? (
        <div className="menu">
          <div className="e-card playing">
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <h2>Press Any Key</h2>
          </div>
        </div>
      ) : isPressed ? (
        <>
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
        </>
      ) : (
        <Loading />
      )}
      <p
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          color: "rgb(255,255,255,.5)",
        }}
      >
        You can press any key you want and you can see the result and infos
        about your key
      </p>
    </>
  );
}

export default App;
