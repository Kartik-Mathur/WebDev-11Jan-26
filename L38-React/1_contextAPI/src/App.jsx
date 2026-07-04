import React, { createContext } from "react";

// Aise import karne par default wala export milta hai
import Parent from "./components/Parent";

// import {myContext} from './path-that-you-have';

const MyContext = createContext();

const App = () => {
  let a = "Hello I am a variable";

  return (
    <div>
      <MyContext value={a}>
        <Parent />
      </MyContext>
    </div>
  );
};

export default App;
export {
  MyContext
};