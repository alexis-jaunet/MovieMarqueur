import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { page: props.page }

        this.goToConnexion = this.goToConnexion.bind(this)
        this.goToHomepage = this.goToHomepage.bind(this)
    }

    goToConnexion() {
        this.props.renderConnexion()
    }

    goToHomepage() {
        this.props.renderHomepage()
    }

    render() {
        return (
            <div className={'header'}>
                <img className="img-logo" src={require('./logo.png')} onClick={this.goToHomepage} />
                <button className={'btn-inscription-connexion'} onClick={this.goToConnexion}>
                    Inscription/Connexion
                </button>
                <div className="separator" />
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('root'))
export default Header
