import React from 'react';
import taskListContext from '../../context/getList-context';
import ListTask from '../ListTask/ListTask';
import axios from 'axios';

class ListTasks extends React.Component {

    static contextType = taskListContext;
    
    state = {
        todolist: this.context.task
    }

    deleteHandler = (event, i) => {

        /* DELETE FROM LOCAL */
        console.log(this.context.task[i])
        this.context.task.splice(i,0)
        this.setState ({ todolist: this.context.task })

        /* DELETE FROM DATABASE */
        // axios.delete(`/tasks/${i}`)
        // .then ((res) => {
        //     console.log('DELETE FROM DATABASE !')
        // })
        // .catch((err) => {
        //     this.setState({error: 'ERROR DELETE'})
        // })
    }

    render () {
        const todolist = this.context.task;
        console.log(todolist)
        const todolists = todolist.map((i) => {
            return <ListTask
            key={i.id}
            id={i.id} 
            title={i.title} 
            done={i.done ? 'DONE' : 'TO DO'}
            edit={(event) => this.editHandler(event, i.id)}
            delete={(event) => this.deleteHandler(event, i.id)}
            ></ListTask>
        })

        return (
            <div>
                {todolists}
            </div>
        )
    }

}
export default ListTasks;