import React from "react";

const App = () => {
  let movies = ["Avengers", "Hulk", "Ironman"];
  
  return (
    <div>
      Movie List
      {/* {HelloWorld()}
      {HelloWorld()} */}

      <HelloWorld />
      <Greet name="Aditya Malik" />
    </div>
  );
};

function HelloWorld(){
  return <div>Hello World</div>
}

function Greet({name}){
  return <div>Hello {name}</div>
}
// function Greet(props){
//   // const {name} = props;
//   const name = props.name;
//   return <div>Hello {name}</div>
// }

export default App;
