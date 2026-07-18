import React, { useContext } from "react";
import { context } from "../context/UserContext";

const TodoInput = () => {
  const data = useContext(context);
  console.log(data);

  return <div>
    Welcome to Todo Input
  </div>;
};

export default TodoInput;
