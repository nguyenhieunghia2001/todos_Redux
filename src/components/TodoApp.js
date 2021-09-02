import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todo";

// {todos, addTodo, fetchTodo}
const TodoApp = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.items);

  const handleAdd = () => {
    const todo = {
      id: 1000 + Math.trunc(Math.random() * 9000),
      title: text,
    };
    dispatch(addTodo(todo));
    setText('');
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
