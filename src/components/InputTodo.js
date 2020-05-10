import React, {Component} from "react"

class InputTodo extends Component {
    state = {
        title: ""
    }
    onChange = e => {
        console.log("input:",e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        console.log("sending value:",this.state.title)
        e.preventDefault()
        this.props.handleAddingItem(this.state.title)        
        this.setState({
            title: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} name="title" />
                <input type="submit" value="Submit" />                
            </form>
        );
    }
}

export default InputTodo