import React from "react";

const App = () => {
  let movies = ["Avengers", "Hulk", "Ironman"];
  let movies1 = ["Avengers1", "Hulk1", "Ironman1"];
  let movies2 = ["Avengers2", "Hulk2", "Ironman2"];
  return (
    <div>
      Movie List
      <Movies movies={movies} />
      <Movies movies={movies1} />
      <Movies movies={movies2} />
    </div>
  );
};

function Movies({movies}) {
  return (
    <ul>
      {movies.map((data, indx) => {
        return (
          <li key={indx} className="movie">
            {data}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
