import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoApp from "../Todo/TodoApp";
import "./style.scss";

const TOTAL_PAGE = 3;
const Cpagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [todosCurrent, setTodosCurrent] = useState([]);
  const todos = useSelector((state) => state.todos.items);
  useEffect(() => {
    const index = currentPage * TOTAL_PAGE;
    setTodosCurrent(todos?.slice((currentPage - 1) * TOTAL_PAGE, index));
  }, [todos, currentPage]);
  const changePgae = (numPage) => {
    setCurrentPage(numPage);
  };
  const eventTodo = (id) => {
    //test dùng onchange
    // console.log(id);
  };
  return (
    <>
      <TodoApp todos={todosCurrent} onchange={eventTodo} />
      {todos && (
        <Pagination
          defaultCurrent={currentPage}
          total={todos.length}
          defaultPageSize={3}
          pageSize={3}
          onChange={changePgae}
        />
      )}
    </>
  );
};

export default Cpagination;
