import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useGlobal from "../store";

const useStyles = makeStyles((theme) => ({
  doneTodo: {
    textDecoration: "line-through",
  },
}));

const Todo = ({ todo, index, todoDone }) => {
  const classes = useStyles();

  return (
    <li
      className={todo.completed ? classes.doneTodo : ""}
      onClick={() => todoDone(index)}
    >
      {todo.text}
    </li>
  );
};

const Todos = (props) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ text: "", completed: false });

  const addTodo = () => {
    console.log(todo);
    if (!todo.text) return;
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo({ text: "", completed: false });
  };

  const todoDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("item", todos);
  }, [todos, setTodos]);

  return (
    <div>
      <h2>Todo Page</h2>
      <div className="todos-list">
        {todos.map((todo, index) => (
          <Todo
            todoDone={() => todoDone(index)}
            index={index}
            key={index}
            todo={todo}
          />
        ))}
      </div>
      <input
        type="text"
        value={todo.text}
        onChange={(e) => setTodo({ text: e.target.value, completed: false })}
      />
      <button onClick={() => addTodo()}>Add Todo</button>
    </div>
  );
};

export default Todos;
