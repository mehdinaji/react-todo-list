import React from 'react';
import Checkboxes from '../ui-elements/checkbox';

const Task = (props) => {

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log ('s')
    };
    return (
        <section>
            <ul>


                <span onClick={(event) => props.edit()} style={{ cursor: 'pointer' }}> %% </span>
                <span>{props.id} </span>
                <span onClick={(event) => props.edit()} style={{ cursor: 'pointer' }} >{props.title} </span>
                <span>{props.done} </span>
                <span onClick={(event) => props.delete()}> 
                    <button variant="contained" color="primary"> X </button> 
                </span>
                
            </ul> 
        </section>
    )
}

export default Task;