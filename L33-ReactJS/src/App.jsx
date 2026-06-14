import React from "react";

const App = () => {
  let movies = ["Avengers", "Hulk", "Ironman"];
 
  return (
    <div>
      Movie List
      <ul>
        {movies.map((data, indx) => {
          return <li key={indx} className="movie">{data}</li>;
        })}
      </ul>

      <ul>
        {movies.map((data, indx) => <li key={indx} className="movie">{data}</li>)}
      </ul>
    </div>
  );
};

export default App;
