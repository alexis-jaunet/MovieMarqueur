import React from 'react';

class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pseudo: '', mdp: '', email: '', ville: '', adresse: ''};

        this.handlePseudo = this.handlePseudo.bind(this);
        this.handleMdp = this.handleMdp.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleVille = this.handleVille.bind(this);
        this.handleAdresse = this.handleAdresse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pseudo :
                    <input type="text" value={this.state.pseudo} onChange={this.handlePseudo} />
                </label>
                <label>
                    Mot de passe :
                    <input type="text" value={this.state.mdp} onChange={this.handleMdp} />
                </label>
                <label>
                    E-mail :
                    <input type="text" value={this.state.email} onChange={this.handleEmail} />
                </label>
                <label>
                    Ville :
                    <input type="text" value={this.state.ville} onChange={this.handleVille} />
                </label>
                <label>
                    Adresse :
                    <input type="text" value={this.state.adresse} onChange={this.handleAdresse} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

