import React from 'react';
import taskListContext from '../../context/getList-context';
import ListTask from '../ListTask/ListTask';
import ListAdd from '../ListAdd/ListAdd'
import axios from 'axios';

class ListTasks extends React.Component {

    static contextType = taskListContext;
    
    state = {
        todolist: this.context.task,

        oldTitle: '',
        oldstatus: false

    }

    deleteHandler = (i) => {

        /* DELETE FROM LOCAL */
        const todolist = this.context.task;
        console.log(i)
        console.log(todolist[i])

        /* DELETE FROM DATABASE */
        // axios.delete(`/tasks/${i}`)
        // .then ((res) => {
        //     console.log('DELETE FROM DATABASE !')
        // })
        // .catch((err) => {
        //     this.setState({error: 'ERROR DELETE'})
        // })
    }

    editHandler = (event, i) => {

        const todolist = this.context.task;
        console.log(i)
        console.log(todolist[i].title)
        this.setState ({ oldTitle: todolist[i].title, oldState: todolist[i].done }) 
        }

    editTaskToNewData = (event, i) => {
        const newTitle = this.context.task[i].title
        this.setState ({
            oldTitle: newTitle
        })
    }

    render () {
        const todolist = this.context.task;
        console.log(todolist)
        const todolists = todolist.map((i) => {
            // console.log(i.id)
            return <ListTask
            key={i.id}
            id={i.id} 
            title={i.title} 
            done={i.done ? 'DONE' : 'TO DO'}
            edit={(event) => this.editHandler(event, i.id)}
            delete={() => this.deleteHandler(i.id)}
            ></ListTask>
        })

        return (
            <div>

                <section>
                    <ListAdd/>
                </section>

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
export default ListTasks;

