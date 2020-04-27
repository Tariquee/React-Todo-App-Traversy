import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting with Bill Gates",
        completed: true,
      },
    ],
  };
  /////////////////////// Toggle Completed /////////////////////////////
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    });
  };

  todoDelete = (id) => {
    console.log("okokok");
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          markCompleted={this.markCompleted}
          todos={this.state.todos}
          todoDelete={this.todoDelete}
        />
      </div>
    );
  }
}

export default App;
