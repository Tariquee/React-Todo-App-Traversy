import React, { Component } from "react";

class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  deleteButton = () => {
    return {
      background: "#ff0000",
      padding: "5px 9px",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    };
  };

  render() {
    const { title, id } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markCompleted.bind(this, id)}
        />
        <p>{title} </p>
        <button
          style={this.deleteButton()}
          onClick={this.props.todoDelete.bind(this, id)}
        >
          {" "}
          Deleted{" "}
        </button>
      </div>
    );
  }
}

export default TodoItem;
