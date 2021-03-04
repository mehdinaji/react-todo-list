import React from 'react'

class ListTask extends React.Component {
    render() {
        return (
            <div>
                {this.props.id} - {this.props.title} - {this.props.done}
                <button onClick={(event) => this.props.delete()}> x </button>
                <button onClick={(event) => this.props.edit()}> O </button>
            </div>
            
        )
    }
}

export default ListTask;