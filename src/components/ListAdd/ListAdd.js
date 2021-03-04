import React from 'react'
import taskListContext from '../../context/getList-context';

class ListAdd extends React.Component {

    static contextType = taskListContext;    

    state = {
        title: '',
        done: false
    }

    AddDataHandler = () => {
        const todolist = this.context.task; 
        console.log(todolist);
        const addTask = todolist.push(this.state)
        
        const data = {
            title: this.state.title,
            done: this.state.done
        }
        axios.post('/tasks', data)
        .then((res) => {
        })
    }
    render() {
        return (
            <div>
                <h1>Add New Task</h1>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <select value={this.state.done} onChange={(event) => this.setState({ done: event.target.value })}>
                    <option value="true">DONE</option>
                    <option value="false">TO DO</option>
                </select>

                <button onClick={this.AddDataHandler}> ADD NEW TASK </button>
            </div>
        );
    }
}

export default ListAdd;