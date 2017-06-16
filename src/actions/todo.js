import * as constants from '../constants/todo';

export const addTodo = caption => ({
  type: constants.ADD_TODO,
  payload: caption,
});

export const toggleComplition = todoId => ({
  type: constants.TOGGLE_COMPLITION,
  payload: { todoId },
});
