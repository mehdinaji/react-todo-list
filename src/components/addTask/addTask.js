import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
                <TextField required id="outlined-required" label="Task" variant="outlined" label="Task" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />

                <RadioGroup aria-label="status" name="status" value={this.state.done} onChange={(event) => this.setState({ done: event.target.value })}>
                    <FormControlLabel name="status" value="true"  control={<Radio />} label="DONE" />
                    <FormControlLabel name="status" value="false" control={<Radio />} label="TO DO" />
                </RadioGroup>

                <Button variant="contained" color="secondary" onClick={this.PostDataHandler}> ADD NEW TASK </Button>
            </div>
        </div>
        )
    }
}

export default AddTask