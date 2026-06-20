import React, { useRef, useState } from "react";

let initialTodos = [
  { id: 1, name: "Buy groceries" },
  { id: 2, name: "Finish project report" },
  { id: 3, name: "Schedule dentist appointment" },
  { id: 4, name: "Workout for 30 minutes" },
  { id: 5, name: "Read a book chapter" },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [updateMode, setUpdateMode] = useState(false);
  const [updateItemId, setUpdateItemId] = useState(false);
  let updatedTask = useRef();
  let task = useRef();
  function addTodo() {
    console.log(task.current.value);
  }

  function decreasePriority(id) {
    let indx = todos.findIndex((t) => t.id == id);
    if (indx != -1 && indx < todos.length - 1) {
      // todos array change nhi krna hai,
      // react ka part hai, toh naya array banao
      // newarray mei change karo
      // then todos ko setTodos se update karo
      let existingTodos = [...todos];
      [existingTodos[indx + 1], existingTodos[indx]] = [
        existingTodos[indx],
        existingTodos[indx + 1],
      ];
      setTodos(existingTodos);
    }
  }

  function increasePriority(id) {
    let indx = todos.findIndex((t) => t.id == id);
    if (indx != -1 && indx > 0) {
      // todos array change nhi krna hai,
      // react ka part hai, toh naya array banao
      // newarray mei change karo
      // then todos ko setTodos se update karo
      let existingTodos = [...todos];
      [existingTodos[indx - 1], existingTodos[indx]] = [
        existingTodos[indx],
        existingTodos[indx - 1],
      ];
      setTodos(existingTodos);
    }
  }
  function deleteTodo(id) {
    let updatedTodos = todos.filter((t) => t.id != id);
    setTodos(updatedTodos);
  }

  function updateTodo(id) {
    setUpdateMode(true);
    setUpdateItemId(id);
  }

  function editTodo(id) {
    let taskName = updatedTask.current.value.trim();
    if (!taskName) return;
    let myTodos = [...todos];
    let indx = myTodos.findIndex((item) => item.id == id);
    if (indx != -1) {
      myTodos[indx].name = taskName;
      setTodos(myTodos);
      setUpdateMode(false);
    }
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Todo Application</h1>

      <div className="input-section">
        <input
          ref={task}
          id="task"
          type="text"
          placeholder="Enter Task Name"
          className="task-input"
        />
        <br />
        <button onClick={addTodo} className="add-btn">
          Add
        </button>
      </div>

      <ul className="taskList">
        {todos.map((item) => {
          return (
            <li key={item.id} className="task-item">
              <span className="task-name">
                {updateMode ? (
                  updateItemId == item.id ? (
                    <input
                      ref={updatedTask}
                      placeholder={item.name}
                      className="edit-input"
                    />
                  ) : (
                    item.name
                  )
                ) : (
                  item.name
                )}
              </span>

              <button
                onClick={() => increasePriority(item.id)}
                className="priority-btn increase-btn"
              >
                ⬆️
              </button>

              <button
                onClick={() => decreasePriority(item.id)}
                className="priority-btn decrease-btn"
              >
                ⬇️
              </button>

              <button
                onClick={() => deleteTodo(item.id)}
                className="delete-btn"
              >
                ❌
              </button>

              {updateMode && updateItemId == item.id ? (
                <button onClick={() => editTodo(item.id)} className="save-btn">
                  ✅
                </button>
              ) : (
                <button
                  onClick={() => updateTodo(item.id)}
                  className="edit-btn"
                >
                  📝
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
