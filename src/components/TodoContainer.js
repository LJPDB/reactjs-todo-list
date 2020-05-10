import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Title 1",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Title 2",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Title 3",
                completed: false
            }
        ]
    }

    handleChange = (id) => {
        console.log("item clicked", id)
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }

    delItem = (id) => {
        console.log("item delted", id)
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }

    addTodoItem = (title) => {        
        console.log(title)
        const newItem = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newItem]
        })
    }

    render() {
        return(
            <div>
                <Header />
                <InputTodo handleAddingItem={this.addTodoItem}/>
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} handleItemDeletion={this.delItem}/>
            </div>
        )
    }

}

export default  TodoContainer