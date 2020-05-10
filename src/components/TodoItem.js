import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return <li><input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)}/> {this.props.todo.title} <button onClick={() => {this.props.handleItemDeletion(this.props.todo.id)}}>Delete</button></li>
    }
}

/*function TodoItem(props) {
    return <li>{props.title}</li> 
}*/

export default TodoItem