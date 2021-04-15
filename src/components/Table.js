import React from "react";
import Task from "./Task";

const Table = ({ todo, setTodo, todos, setTodos }) => {
  return (
    <div>
      <tr>
        <th>Task</th>
        <th>In Progress</th>
        <th>Complete</th>
      </tr>
      <tr>
        <Task todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      </tr>
    </div>
  );
};

export default Table;
