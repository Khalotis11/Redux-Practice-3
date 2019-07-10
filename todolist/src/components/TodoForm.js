import React, { Component } from "react";
import { connect } from "react-redux";

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
  {}
)(TodoForm);
