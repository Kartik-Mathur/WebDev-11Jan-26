import React, { Fragment } from "react";
import Button from "./Button";
import MyFragment from "./MyFragment";

const App = () => {
  return (
    // Fragment -> 
    // 1. Fragment 
    // 2. <></> 
    // 3. Apna component banao

    <MyFragment>
      {/* Yeh teeno buttons MyFragment ke component ke andar
      as children available honge */}
      <Button text="Red" color="red" />
      <Button text="Orange" color="orange" />
      <Button text="Green" color="green" />
    </MyFragment>
  );
};

export default App;
