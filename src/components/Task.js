import React, { useState } from "react";

const Task = ({ todos, setTodos }) => {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, seteditingText] = useState("");
  const [disabled, setDisabled] = useState(false);
  function deletetodo(id) {
    const updatetodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatetodos);
  }

  const handledKeyUp = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") setDisabled(true);
    else setDisabled(false);
  };

  function editTodo(id) {
    if (editingText !== "") {
      const updatetodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });

      setTodos(updatetodos);
      setTodoEditing(null);
      seteditingText("");
    }
  }
  let draggableParentID = 0;
  function drag(e) {
    draggableParentID = e.target.parentNode.id;
    e.dataTransfer.setData("text", e.target.id);
  }
  function allowDrop(e) {
    e.preventDefault();
  }
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          draggable="true"
          ondragstart={drag}
          ondragover={allowDrop}
          style={{ cursor: "pointer" }}
        >
          {todoEditing === todo.id ? (
            <input
              type="text"
              onChange={(e) => seteditingText(e.target.value)}
              onKeyUp={handledKeyUp}
              defaultValue={todo.text}
            />
          ) : (
            <div className="list">{todo.text}hello</div>
          )}

          <div>
            <button className="delete" onClick={() => deletetodo(todo.id)}>
              delete
            </button>
            {todoEditing === todo.id ? (
              <button onClick={() => editTodo(todo.id)} disabled={disabled}>
                update
              </button>
            ) : (
              <button className="edit" onClick={() => setTodoEditing(todo.id)}>
                Edit
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
