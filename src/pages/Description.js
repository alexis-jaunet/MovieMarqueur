import React from 'react';
import Header from './header/Header';

class Description extends React.Component {
    constructor (props) {
        super(props);
        this.state = { }
    }

    render () {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Description;