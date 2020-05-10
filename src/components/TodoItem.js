import React, { Component } from 'react'
import "./TodoItem.css"

class TodoItem extends Component {
    render() {
        return (
            <li>
                <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)}/> 
                    <span className={this.props.todo.completed ? "done":"pending"}>{this.props.todo.title}</span>
                    <button onClick={() => {this.props.handleItemDeletion(this.props.todo.id)}}>Delete</button>
                </li>
        )
    }
}

/*function TodoItem(props) {
    return <li>{props.title}</li> 
}*/

export default TodoItem