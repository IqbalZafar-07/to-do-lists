import React from "react";

const Header = ({ todo, setTodo, handleSubmit }) => {
  return (
    <div>
      <form>
        <textarea
          id="task"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></textarea>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button id="btn" type="submit" onClick={(e) => handleSubmit(e)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Header;
