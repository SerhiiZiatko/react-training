import React from 'react';
import propTypes from 'prop-types';

import Todo from './Todo';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        toggleComplition={props.toggleComplition}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      caption: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleComplition: propTypes.func.isRequired,
};

export default TodoList;
