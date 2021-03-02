import React from 'react';
import axios from 'axios';

class AddTask extends React.Component {
    state = {
        title: '',
        done: true,
    }

    PostDataHandler = () => {
        const data = {
            title: this.state.title,
            done: this.state.done
        }
        
        axios.post('/tasks', data)
            .then((res) => {
            })
    }


render () {
    return (
        <div>
            <h3> ADD TASK </h3>
            <div>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })}/>

                <label>Status</label>
                <select value={this.state.done}
                    onChange={(event) => this.setState({ done: event.target.value })}>
                    <option value="true">DONE</option>
                    <option value="false">TO DO</option>
                </select>

                <button onClick={this.PostDataHandler}> ADD NEW TASK </button>
            </div>
        </div>
        )
    }
}

export default AddTask