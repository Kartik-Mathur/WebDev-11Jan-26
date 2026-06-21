import React, { useState } from "react";

const ColorAssignment = () => {
  const [color, setColor] = useState("white");
  const [colorStack, setColorStack] = useState([]);
  function colorHandler(newColor) {
    setColor(newColor);
    let newColorStack = [...colorStack, newColor];
    setColorStack(newColorStack);
  }

  function undo(){
    let newColorStack = [...colorStack];
    newColorStack.pop();
    if(newColorStack.length == 0) {
      setColor("white");
      return;
    }

    setColor(newColorStack[newColorStack.length - 1]);
    setColorStack(newColorStack);
  }

  return (
    <div>
      <div
        className="colorBox"
        style={{
          backgroundColor: color,
        }}
      ></div>

      <button onClick={() => colorHandler("red")}>Red</button>
      <button onClick={() => colorHandler("blue")}>Blue</button>
      <button onClick={() => colorHandler("green")}>Green</button>
      <button onClick={undo}>Undo</button>
    </div>
  );
};

export default ColorAssignment;
