import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      let { data } = await axios.get("http://localhost:4444/todos");
      data = data.allTodos;
      setTodos(data);
    }

    getTodos();
  }, []);

  function deleteHandler(id){
    
  }

  return (
    <div>
      My Todo App
      {todos.map((item, indx) => (
        <li key={indx}>
          {item.name} - {item.description}
          <button onClick={()=>deleteHandler(item._id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default App;
