import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todoSlice";
import "./style.scss";

// {todos, addTodo, fetchTodo}
const TodoApp = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleAdd = () => {
    if (!text) return;
    const todo = {
      id: 1000 + Math.trunc(Math.random() * 9000),
      title: text,
    };
    dispatch(addTodo(todo));
    setText("");
  };
  const todoSelected = (text) => {
    setText(text);
  };
  return (
    <div className="todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => todoSelected(todo.title)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
