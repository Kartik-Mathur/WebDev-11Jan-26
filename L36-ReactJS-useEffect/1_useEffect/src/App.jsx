import React, { useEffect, useState } from "react";

const App = () => {
  // Api calling...
  // To handle all the side effects we use useEffect hook
  console.log("Running App");
  const [cnt, setCnt] = useState(0);

  const [fact, setFact] = useState("");
  useEffect(() => {
    console.log("Running use effect")
    axios.get("https://meowfacts.herokuapp.com/").then(({ data: { data } }) => {
      setFact(data);
    });
  }, []);

  
  useEffect(function(){
    console.log("Running Effect  - 2")
  }, [cnt]);

  return <div>
    Learning Api calling - {fact}
    <br />
    <br />
    Counter : {cnt} 
    <button onClick ={()=> setCnt(cnt+1)}>+</button>
  </div>;
};

export default App;
