import React, { useContext } from "react";
import { MyContext } from "../App";

const Grandchild = () => {
  const data = useContext(MyContext);

  console.log("Inside grandchild",data);
  return <div>I am a grandchild</div>;
};

export default Grandchild;
