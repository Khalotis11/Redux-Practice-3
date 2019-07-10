import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h3>My Todo List:</h3>
      <TodoForm />
    </div>
  );
}

export default App;
