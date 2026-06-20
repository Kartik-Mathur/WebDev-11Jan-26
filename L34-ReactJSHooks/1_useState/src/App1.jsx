import React from 'react'

const App = () => {
  let i = 0;


  console.log("Running App Component");
  function updateI(){
    i++;
    console.log("I ", i);
  }

  return (
    <div>
      <h1>This is my App</h1>
      Value of i: {i}
      <br />
      <button onClick={updateI}>Click me!</button>
    </div>
  )
}

export default App
