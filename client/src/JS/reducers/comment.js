import { ADD_TASK, DELETE_ITEM, EDIT_ITEM, CHECK_ITEM } from "../const/comment";

const initialState = {
  todo: [{ id: Math.random(), todo: "item", done: false }],
};

export const todoComment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todo: [...state.todo, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.payload),
      };
    case EDIT_ITEM:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload.id
            ? { ...el, todo: action.payload.description }
            : el
        ),
      };
    case CHECK_ITEM:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload ? { ...el, done: !el.done } : el
        ),
      };
    default:
      return state;
  }
};
