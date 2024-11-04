import React, { useState } from "react";
import "./Calculator.css"; // Import the CSS file

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input) || "0");
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult(null);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="calculator">
      <div className="display">
        {result !== null ? result : input || "0"}
      </div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(btn)}
            className={`button ${btn === "=" ? "equals" : ""} ${btn === "C" ? "clear" : ""}`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
