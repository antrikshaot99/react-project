import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default DigitalClock;
