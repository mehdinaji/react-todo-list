import React from 'react'
import ListTasks from './components/ListTasks/ListTasks'
import TaskListContext from './context/getList-context';
import axios from 'axios';

class Myapp extends React.Component {
    
    state = {
        tasks: []
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
    
    
    render () {
        return (
            <div>
                <TaskListContext.Provider value = {{ task: this.state.tasks }}>
                    <ListTasks />
                </TaskListContext.Provider>
            </div>
        )
    }
}

export default Myapp;