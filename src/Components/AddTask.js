import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TaskAdd } from "../redux/actions";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random(), todo: text, isDone: false };
    text.trim() === "" ? alert("Add task") : dispatch(TaskAdd(newTask));
    setText("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
