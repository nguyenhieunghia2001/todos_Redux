import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { active, remove, addTodoThunk } from "../../features/todoSlice";
import { PlusOutlined } from "@ant-design/icons";
import { FaRegDotCircle, FaDotCircle } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import Ring from "react-cssfx-loading/lib/Ring";
import "./style.scss";

// {todos, addTodo, fetchTodo}
const TodoApp = ({ todos, onchange }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos.items);
  const isUpload = useSelector((state) => state.todos.isUpload);

  const hanleOnKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const handleAdd = () => {
    if (!text) return;
    const todo = {
      id: 1000 + Math.trunc(Math.random() * 9000),
      title: text,
      isCompleted: false,
    };
    dispatch(addTodoThunk(todo));
    setText("");
  };
  const handleActive = (id) => {
    dispatch(active(id));
    onchange(id);
  };
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const todoSelected = (text) => {
    setText(text);
  };
  return (
    <div className="todo">
      <div className="header">
        <div className="icon"></div>
        <h5>Todos</h5>
      </div>
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={hanleOnKeyPress}
        />
        {isUpload ? (
          <button className="btn" onClick={handleAdd}>
            <Ring width="30px" height="30px" />
          </button>
        ) : (
          <button className="btn" onClick={handleAdd}>
            <PlusOutlined />
          </button>
        )}
      </div>
      <ul>
        {todos.map((todo) => (
          <li className={todo.isCompleted ? "active" : ""} key={todo.id}>
            <div className="check" onClick={() => handleActive(todo.id)}>
              {todo.isCompleted ? <FaDotCircle /> : <FaRegDotCircle />}
            </div>
            <span onClick={() => todoSelected(todo.title)}>{todo.title}</span>
            <div className="remove" onClick={() => handleRemove(todo.id)}>
              <GrFormClose />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
