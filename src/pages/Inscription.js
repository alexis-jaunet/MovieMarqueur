import React from 'react'
import ReactDOM from 'react-dom'

class Inscription extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infos: { pseudo: '', mdp: '', email: '', ville: '', adresse: '' },
            obligations: { pseudo: false, mdp: false, ville: false },
            page: props.page,
            errors: { pseudo: '', mdp: '', ville: '' }
        }

        this.handlePseudo = this.handlePseudo.bind(this)
        this.handleMdp = this.handleMdp.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleVille = this.handleVille.bind(this)
        this.handleAdresse = this.handleAdresse.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.goToConnexion = this.goToConnexion.bind(this)
    }

    handlePseudo(event) {
        this.setState({ value: event.target.pseudo })

        if (this.state.infos.pseudo !== '') {
            this.setState({
                obligations: {
                    pseudo: true
                }
            })
        } else {
            this.setState({
                obligations: {
                    pseudo: false
                }
            })
        }
    }

    handleMdp(event) {
        this.setState({ value: event.target.mdp })

        if (this.state.infos.mdp !== '') {
            this.setState({
                obligations: {
                    mdp: true
                }
            })
        } else {
            this.setState({
                obligations: {
                    mdp: false
                }
            })
        }
    }

    handleEmail(event) {
        this.setState({ value: event.target.email })
    }

    handleVille(event) {
        this.setState({ value: event.target.ville })

        if (this.state.infos.ville !== '') {
            this.setState({
                obligations: {
                    ville: true
                }
            })
        } else {
            this.setState({
                obligations: {
                    ville: false
                }
            })
        }
    }

    handleAdresse(event) {
        this.setState({ value: event.target.adresse })
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.obligations.pseudo) {
            this.setState({
                errors: {
                    pseudo: 'Erreur : Pseudo manquant'
                }
            })
        }

        if (!this.state.obligations.mdp) {
            this.setState({
                errors: {
                    mdp: 'Erreur : Mot de passe manquant'
                }
            })
        }

        if (!this.state.obligations.ville) {
            this.setState({
                errors: {
                    ville: 'Erreur : Ville manquante'
                }
            })
        }

        if (this.state.obligations.pseudo && this.state.obligations.mdp && this.state.obligations.ville) {
            // envoi inscription
        }
    }

    goToConnexion() {
        this.props.renderConnexion()
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
                        <form className="login-form">
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">
                                        Pseudo *
                                    </label>
                                    <input id="user" type="text" className="input" required />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Mot de passe *
                                    </label>
                                    <input id="pass" type="password" className="input" data-type="password" required />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        E-mail
                                    </label>
                                    <input id="pass" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Ville *
                                    </label>
                                    <input id="pass" type="text" className="input" required />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">
                                        Adresse
                                    </label>
                                    <input id="pass" type="text" className="input" />
                                </div>
                                <div className="group">
                                    <label className="error">{this.state.errors.pseudo}</label>
                                    <label className="error">{this.state.errors.mdp}</label>
                                    <label className="error">{this.state.errors.ville}</label>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Go !" onSubmit={this.handleSubmit} />
                                </div>
                            </div>
                        </form>
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
