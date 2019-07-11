import { ADD_TODO } from "../actions";

const initialState = {
  todos: "Do Homework"
};
export const reducer = (state = initialState, action) => {
  // console.log(state)
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [{...state.todos}, action.payload]
      };
    default:
      return state;
  }
};
