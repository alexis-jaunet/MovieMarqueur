var React = require('react');
var ReactDOM = require('react-dom');

class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pseudo: '', mdp: '', page: props.page};

        this.handlePseudo = this.handlePseudo.bind(this);
        this.handleMdp = this.handleMdp.bind(this);
        this.goToInscription = this.goToInscription.bind(this);
    }

    handlePseudo(event) {
        this.setState({value: event.target.pseudo});
    }

    handleMdp(event) {
        this.setState({value: event.target.mdp});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    goToInscription () {
        this.props.renderInscription();
    }

    render() {
        return (
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab">Connexion</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up"/><label className="tab change" onClick={this.goToInscription}>Inscription</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Pseudo</label>
                                <input id="user" type="text" className="input" onInput={this.handlePseudo}/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Mot de passe</label>
                                <input id="pass" type="password" className="input" data-type="password" onInput={this.handleMdp}/>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Go !" onClick={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Connexion/>, document.getElementById('root'));
module.exports = Connexion;