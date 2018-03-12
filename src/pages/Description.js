import React from 'react'

import ReactDOM from 'react-dom'

class Description extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>Description</div>
    }
}

ReactDOM.render(<Description />, document.getElementById('root'))
export default Description
