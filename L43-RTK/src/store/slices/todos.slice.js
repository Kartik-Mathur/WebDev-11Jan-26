import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Cricket",
    id: 1,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.push({
        name: action.payload.name,
        id: new Date().getTime(),
      });
    },
    getTodos: (state) => {
      return state;
    },
    deleteTodo: (state, action) => {
      console.log(action.payload.id);
      state = state.filter((todo) => todo.id != action.payload.id);
      return state;
    },
  },
});

export const { addTodo, getTodos, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
