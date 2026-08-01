import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./store/slices/todos.slice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoRef = useRef();
  return (
    <div>
      <input ref={todoRef} type="text" placeholder="Enter task" />
      <button
        onClick={() => dispatch(addTodo({ name: todoRef.current.value }))}
      >
        Add Todo
      </button>

      {todos.map((t) => {
        return (
          <li key={t.id}>
            Task : {t.name}
            <button
              onClick={() =>
                dispatch(
                  deleteTodo({
                    id: t.id,
                  }),
                )
              }
            >
              Delete Todo
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
