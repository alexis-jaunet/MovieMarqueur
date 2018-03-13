import React from 'react'
import ReactDOM from 'react-dom'

class Description extends React.Component {
    constructor(props) {
        super(props)
        this.state = {id: props.id}
    }

    render() {
        return <div>Description : {this.state.id}</div>
    }
}

ReactDOM.render(<Description />, document.getElementById('root'))
export default Description
