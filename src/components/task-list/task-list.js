import React, { Component } from "react";
import Task from "../task/task";
import "./task-list.css";
// item class completed, editing, ''

export default class TaskList extends Component {
  render() {
    const { todos, onDeleted } = this.props;
    const elements = todos.map((item) => {
      const { id, label } = item;
      return (
        <li key={id}>
          <Task label={label} onDeleted={() => onDeleted(id)} />
        </li>
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
