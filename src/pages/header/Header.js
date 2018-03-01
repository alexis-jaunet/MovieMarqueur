var React = require('react');
var ReactDOM = require('react-dom');

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: props.page};

        this.goToConnexion = this.goToConnexion.bind(this);
        this.goToHomepage  = this.goToHomepage.bind(this);
    }

    goToConnexion () {
        this.props.renderConnexion();
    }

    goToHomepage () {
        this.props.renderHomepage();
    }

    render() {
        return (
            <div className={"header"}>
                <img className="img-logo" src={require('./logo.png')} onClick={this.goToHomepage}/>
                <button className={"btn-inscription-connexion"} onClick={ this.goToConnexion }>
                        Inscription/Connexion
                </button>
                <div className="separator"></div>
            </div>
        )
    }
}

ReactDOM.render(<Header/>, document.getElementById('root'));
module.exports = Header;
