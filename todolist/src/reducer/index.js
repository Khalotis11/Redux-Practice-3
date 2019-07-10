import { ADD_TODO } from "../actions";

const initialState = {
  todos: "Do Homework"
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state
      };
    default:
      return state;
  }
};
