import React from 'react';
import { connect } from 'react-redux';
import TotoListWrapper from './TotoListWrapper';
import * as todoActions from '../actions/todo';

const App = props => (
  <TotoListWrapper {...props} />
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: caption => dispatch(todoActions.addTodo(caption)),
  toggleComplition: todoId => dispatch(todoActions.toggleComplition(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
