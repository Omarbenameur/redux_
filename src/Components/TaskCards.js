import React from "react";
import { useDispatch } from "react-redux";
import EditTask from "./EditTask";
const TaskCards = ({ todos }) => {
  return (
    <div>
      <h1>{todos.todo} </h1> <EditTask taskedit={todos} />
    </div>
  );
};

export default TaskCards;
