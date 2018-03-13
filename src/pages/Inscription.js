import React from 'react'
import ReactDOM from 'react-dom'
import Register from './components/Register'

class Inscription extends React.Component {
    constructor(props) {
        super(props)

        this.goToConnexion = this.goToConnexion.bind(this)
        this.goToHomepage = this.goToHomepage.bind(this)
    }

    goToConnexion() {
        this.props.renderConnexion()
    }

    goToHomepage (token) {
        this.props.renderHomepage(token)
    }

    render() {
        return (
            <div className="body-login">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in" />
                        <label className="tab change" onClick={this.goToConnexion}>
                            Connexion
                        </label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" checked />
                        <label htmlFor="tab-2" className="tab">
                            Inscription
                        </label>
                        <Register goToHomepage={this.goToHomepage}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Inscription />
    </div>,
    document.getElementById('root')
)
export default Inscription
