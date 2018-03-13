import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login'

class Connexion extends React.Component {
    constructor(props) {
        super(props)
        this.state = { pseudo: '', mdp: '', page: props.page }

        this.handlePseudo = this.handlePseudo.bind(this)
        this.handleMdp = this.handleMdp.bind(this)
        this.goToInscription = this.goToInscription.bind(this)
    }

    handlePseudo(event) {
        this.setState({ value: event.target.pseudo })
    }

    handleMdp(event) {
        this.setState({ value: event.target.mdp })
    }

    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.value}`)
        event.preventDefault()
    }

    goToInscription() {
        this.props.renderInscription()
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
                    <Login />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Connexion />, document.getElementById('root'))
export default Connexion
