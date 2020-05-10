import React, { Component } from 'react'
import TodoItem from "./TodoItem"

class TodosList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} handleItemDeletion={this.props.handleItemDeletion} />
                ))}                
            </div>
        );
    }
}

export default TodosList