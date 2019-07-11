import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

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
        <input
          type="text"
          name="textInput"
          value={this.state.textInput}
          onChange={this.handleChange}
          placeholder="Add New task..."
        />
        <button onClick={() => this.props.addTodo(this.state.textInput)}>
          Add To List
        </button>
        <li>{this.props.todo}</li>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todo: state.todos
  };
};
export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
