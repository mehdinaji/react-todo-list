import React from 'react';

const Task = (props) => {
    return (
        <section>
            <ul>
                <span>{props.id} </span>
                <span onClick={(event) => props.edit()} style={{ cursor: 'pointer' }} >{props.title} </span>
                <span>{props.done} </span>
                <span onClick={(event) => props.delete()}> <button> x </button> </span>
            </ul> 
        </section>
    )
}

export default Task;