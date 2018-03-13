import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login'

class Connexion extends React.Component {
    constructor(props) {
        super(props)

        this.goToInscription = this.goToInscription.bind(this)
        this.goToHomepage = this.goToHomepage.bind(this)
    }

    goToInscription() {
        this.props.renderInscription()
    }

    goToHomepage (token) {
        this.props.renderHomepage(token)
    }

    render() {
        return (
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label htmlFor="tab-1" className="tab">
                        Connexion
                    </label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label className="tab change" onClick={this.goToInscription}>
                        Inscription
                    </label>
                    <Login goToHomepage={this.goToHomepage}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Connexion />, document.getElementById('root'))
export default Connexion
