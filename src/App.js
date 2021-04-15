import "./App.css";
import TodoList from "./TodoList";
import Progress from "./Progress";
import Done from "./Done";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      const newtodo = {
        id: new Date().getTime(),
        text: todo,
      };
      setTodos([...todos].concat(newtodo));
      setTodo("");
    }
  }

  return (
    <div className="App">
      <TodoList
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
        todos={todos}
        setTodos={setTodos}
      />
      <Progress />
      <Done />
    </div>
  );
}

export default App;
