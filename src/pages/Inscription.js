var React = require('react');
var ReactDOM = require('react-dom');

class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pseudo: '', mdp: '', email: '', ville: '', adresse: '', page: props.page};

        this.handlePseudo  = this.handlePseudo.bind(this);
        this.handleMdp     = this.handleMdp.bind(this);
        this.handleEmail   = this.handleEmail.bind(this);
        this.handleVille   = this.handleVille.bind(this);
        this.handleAdresse = this.handleAdresse.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.goToConnexion = this.goToConnexion.bind(this);
    }

    handlePseudo(event) {
        this.setState({value: event.target.pseudo});
    }

    handleMdp(event) {
        this.setState({value: event.target.mdp});
    }

    handleEmail(event) {
        this.setState({value: event.target.email});
    }

    handleVille(event) {
        this.setState({value: event.target.ville});
    }

    handleAdresse(event) {
        this.setState({value: event.target.adresse});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    goToConnexion () {
        this.props.renderConnexion();
    }

    render () {
        return (
            <div className="body-login">
                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-in"/><label className="tab change" onClick={this.goToConnexion}>Connexion</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up" checked/><label htmlFor="tab-2" className="tab">Inscription</label>
                        <div className="login-form">
                            <div className="sign-up-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Pseudo *</label>
                                    <input id="user" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Mot de passe *</label>
                                    <input id="pass" type="password" className="input" data-type="password"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">E-mail</label>
                                    <input id="pass" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Ville *</label>
                                    <input id="pass" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Adresse</label>
                                    <input id="pass" type="text" className="input"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Go !"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<div><Inscription/></div>, document.getElementById('root'));
module.exports = Inscription;