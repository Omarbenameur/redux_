import React from "react";
import { useSelector } from "react-redux";
import TaskCards from "./TaskCards";

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  //console.log(todos);
  return (
    <div>
      {React.Children.toArray(
        todos.map((el) => (
          <div style={{ flex: "0 0 33.33%", padding: "10px" }}>
            <TaskCards todos={el} />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
