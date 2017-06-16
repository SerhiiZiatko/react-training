import * as todoConstants from '../constants/todo';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case todoConstants.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          caption: action.payload,
          isCompleted: false,
        },
      ];
    case todoConstants.TOGGLE_COMPLITION:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return { ...todo };
      });
    default:
      return state;
  }
};
