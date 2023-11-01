import { ADD, COMPLETE, EDIT } from "./actiontypes";
export const TaskAdd = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

export const completeTask = (taskID) => {
  return {
    type: COMPLETE,
    payload: taskID,
  };
};

export const taskEdit = (editedTask) => {
  return { type: EDIT, payload: editedTask };
};
