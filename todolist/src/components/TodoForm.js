import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      textInput: ""
    };
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  render() {
    return (
      <div className="todo-container">
        <form>
          <input
            type="text"
            name="textInput"
            value={this.state.textInput}
            onChange={this.handleChange}
            placeholder="Add New task..."
          />
          <button>Add New Todo</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
