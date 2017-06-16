import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class TodoListWrapper extends Component {
  render() {
    return (
      <div>
        <TodoList
          todos={this.props.todos}
          toggleComplition={this.props.toggleComplition}
        />
        <TodoInput
          addTodo={this.props.addTodo}
        />
      </div>
    );
  }
}

TodoListWrapper.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleComplition: PropTypes.func.isRequired,
};

