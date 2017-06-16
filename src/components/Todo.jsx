import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Todo extends Component {

  handleClick = () => {
    this.props.toggleComplition(this.props.id);
  }

  renderCompleted = () => <strike>{this.props.caption}</strike>;

  renderInProgress = () => <span>{this.props.caption}</span>;

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.isCompleted ? this.renderCompleted() : this.renderInProgress()}
      </li>
    );
  }
}

Todo.propTypes = {
  caption: propTypes.string.isRequired,
  isCompleted: propTypes.bool.isRequired,
  id: propTypes.number.isRequired,
  toggleComplition: propTypes.func.isRequired,
};


