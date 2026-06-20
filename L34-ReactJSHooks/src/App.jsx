import React, { useState } from "react";

const App = () => {
  console.log("Running App Component");

  // Now let's create variable using useState hook
  const [cnt, setCnt] = useState(0);
  function incrementCnt() {
    setCnt(cnt + 1); // jo bhi cnt ki value hai vo +1 ho jaaye
    console.log("Cnt", cnt);
  }

  function decrementCnt() {
    // setCnt(cnt - 1);
    setCnt(prevCnt => prevCnt-1)
    console.log("Decrement Cnt", cnt);
  }

  function resetCnt() {
    setCnt(0);
  }

  return (
    <div>
      <h1>This is my App</h1>
      Value of cnt: {cnt}
      <br />
      <button onClick={incrementCnt}>+</button>
      <button onClick={decrementCnt}>-</button>
      <button onClick={resetCnt}>Reset</button>
    </div>
  );
};

export default App;
