import React from 'react';
import axios from 'axios';
import Task from '../Task/Task';
import AddTask from '../addTask/addTask';

class Todo extends React.Component {
    state = {
        tasks: [],
        error: '',

        id: '',
        oldTitle: '',
        oldState: false,
    }

    componentDidMount() {
        axios.get('/tasks')
        .then((res) => {
            this.setState({tasks: res.data})
        })
        .catch((err) => {
            this.setState({error: 'ERROR'})
        })
    }
    

    deleteHandler(event, id) {
        axios.delete(`/tasks/${id}`)
        .then ((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            this.setState({error: 'ERROR DELETE'})
        })
    }
    

    editHandler(event, id) {

        axios.get(`/tasks/${id}`)
        .then((res) => {
            this.setState ({ id: res.data.id, oldTitle: res.data.title, oldState: res.data.done })
        })
        
    }

    editTaskToNewData(event, id) {
        const data = {
            title: this.state.oldTitle
        }
        axios.put(`/tasks/${this.state.id}`, data)
        .then((res) => {
            console.log(res.data)
        })
    }
    
    render () {
        const todolists = this.state.tasks.map ((item) => {
            return <Task key={item.id} id={item.id} title={item.title} done={item.done ? 'true' : 'false'} 
                        delete={(event) => this.deleteHandler(event, item.id)}
                        edit={(event) => this.editHandler(event, item.id)}
                    />
        })
        
        const errormsg = this.state.error ? 'ERROR' : null;
        
        return (
            <div>
                <AddTask/>

                <section>
                    <h3> EDIT </h3>

                    <label>Title</label>
                    <input type="text" value={this.state.oldTitle} onChange={(event) => this.setState({ oldTitle: event.target.value })}/>
                    <label>Status</label>
                    <select value={this.state.oldState} onChange={(event) => this.setState({ oldState: event.target.value })}>
                        <option value="true">DONE</option>
                        <option value="false">TO DO</option>
                    </select>

                    <button onClick={(event) => this.editTaskToNewData(event)}> EDIT TASK </button>
                </section>

                {todolists}
                
            </div>
        )
    }
}



export default Todo