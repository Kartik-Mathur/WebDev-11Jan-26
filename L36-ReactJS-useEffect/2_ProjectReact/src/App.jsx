import React, { useEffect, useRef, useState } from "react";
import "./App.css";

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

  async function addTodoHandler() {
    let taskValue = taskName.current.value.trim();
    let descriptionValue = description.current.value.trim();

    if (!taskValue || !descriptionValue) return;

    let { data } = await axios.post("http://localhost:4444/todos", {
      name: taskValue,
      description: descriptionValue,
    });

    setTodos(data.allTodos);
    taskName.current.value = "";
    description.current.value = "";
  }

  async function upHandler(id, indx) {
    if (indx > 0) {
      let currentId = id;
      let prevId = todos[indx - 1]._id;
      let { data } = await axios.get(
        "http://localhost:4444/increase-priority",
        {
          params: {
            prevId,
            currentId,
          },
        }
      );
      setTodos(data.allTodos);
    }
  }

  async function downHandler(id, indx) {
    if (indx < todos.length - 1) {
      let currentId = id;
      let nextId = todos[indx + 1]._id;
      let { data } = await axios.get(
        "http://localhost:4444/decrease-priority",
        {
          params: {
            nextId,
            currentId,
          },
        }
      );
      setTodos(data.allTodos);
    }
  }

  return (
    <div className="app">
      <h1>My Todo App</h1>

      <div className="todo-form">
        <input
          ref={taskName}
          type="text"
          placeholder="Enter Task Name"
        />

        <input
          ref={description}
          type="text"
          placeholder="Enter Description"
        />

        <button className="add-btn" onClick={addTodoHandler}>
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((item, indx) => (
          <li className="todo-item" key={indx}>
            <div className="todo-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>

            <div className="btn-group">
              <button
                className="delete-btn"
                onClick={() => deleteHandler(item._id)}
              >
                Delete
              </button>

              <button
                className="up-btn"
                onClick={() => upHandler(item._id, indx)}
              >
                Up
              </button>

              <button
                className="down-btn"
                onClick={() => downHandler(item._id, indx)}
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;