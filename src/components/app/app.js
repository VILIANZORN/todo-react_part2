import React, { Component } from "react";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: " Completed task", id: 1 },
      { label: "Editing text", id: 2 },
      { label: "Active task", id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList todos={this.state.todoData} onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}
