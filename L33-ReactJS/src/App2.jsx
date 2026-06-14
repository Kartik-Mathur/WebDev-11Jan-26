import React from "react";

const App = () => {
  // let movies = ["Avengers", "Hulk", "Ironman"];
  let movies = [
    "The Avengers",
    "The Incredible Hulk",
    "Iron Man",
    "Captain America: The First Avenger",
    "Thor",
    "Black Panther",
    "Doctor Strange",
    "Spider-Man: Homecoming",
    "Guardians of the Galaxy",
    "Ant-Man",
    "Captain Marvel",
    "Black Widow",
    "Shang-Chi and the Legend of the Ten Rings",
    "Eternals",
    "Avengers: Endgame",
  ];
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
