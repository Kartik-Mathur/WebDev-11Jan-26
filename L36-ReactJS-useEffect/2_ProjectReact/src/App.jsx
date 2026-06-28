import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const taskName = useRef();
  const description = useRef();

  useEffect(() => {
    async function getTodos() {
      let { data } = await axios.get("http://localhost:4444/todos");
      data = data.allTodos;
      setTodos(data);
    }

    getTodos();
  }, []);

  async function deleteHandler(id) {
    let { data } = await axios.delete("http://localhost:4444/todos", {
      data: { id },
    });

    setTodos(data.allTodos);
  }

  async function addTodoHandler(){
    let taskValue = taskName.current.value.trim();
    let descriptionValue = description.current.value.trim();

    if(!taskValue || !descriptionValue) return;

    let {data} = await axios.post('http://localhost:4444/todos',{
      name: taskValue,
      description: descriptionValue
    })
    
    setTodos(data.allTodos);
  }

  async function upHandler(id, indx){
    if(indx > 0){
      let currentId = id;
      let prevId = todos[indx - 1]._id;
      let {data} = await axios.get('http://localhost:4444/increase-priority',{
        params: {
          prevId,
          currentId
        }
      })
      setTodos(data.allTodos);
    }
  }
  return (
    <div>
      My Todo App
      <div>
        <input ref={taskName} type="text" placeholder="Enter Task Name" />
        <input ref={description} type="text" placeholder="Enter Description" />

        <button onClick={addTodoHandler}>Add Todo</button>
      </div>
      {todos.map((item, indx) => (
        <li key={indx}>
          {item.name} - {item.description}
          <button onClick={() => deleteHandler(item._id)}>Delete</button>
          <button onClick={() => upHandler(item._id, indx)}>Up</button>
          <button onClick={() => downHandler(item._id)}>Down</button>
        </li>
      ))}
    </div>
  );
};

export default App;
