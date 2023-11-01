import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import TaskList from "./Components/TaskList";
import reducer from "./redux/reducer"; // Import your reducer
import AddTask from "./Components/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, devtools);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskList />
      </div>
      <AddTask />
    </Provider>
  );
}

export default App;
