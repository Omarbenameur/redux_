import { ADD, COMPLETE, EDIT } from "./actiontypes";

const initialState = {
  todos: [
    { id: Math.random(), todo: "wake up", isDone: true },
    { id: Math.random(), todo: "go out", isDone: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
