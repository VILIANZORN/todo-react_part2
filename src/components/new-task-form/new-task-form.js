import React from "react";
import "./new-task-form.css";

const NewTaskForm = () => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      ></input>
    </header>
  );
};

export default NewTaskForm;
