import React, { Component } from "react";
import "./task.css";

export default class Task extends Component {
  state = {
    done: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };
  render() {
    const { label, onDeleted } = this.props;
    const { done } = this.state;

    let classNames = "view";
    if (done) {
      classNames += " completed";
    }
    return (
      <div className={classNames}>
        <input className="toggle" type="checkbox" onClick={this.onLabelClick} />
        <label>
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
