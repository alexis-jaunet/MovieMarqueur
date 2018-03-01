var React = require('react');
var ReactDOM = require('react-dom');

class Description extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                Description
            </div>
        );
    }
}

ReactDOM.render(<Description/>, document.getElementById('root'));
module.exports = Description;