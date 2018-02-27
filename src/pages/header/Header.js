import React from 'react';

class Header extends React.Component {
    constructor (props) {
        super (props);

        this.redirectToConnexion = this.redirectToConnexion.bind(this);
    }

    redirectToConnexion () {
        this.props.redirectToConnexion();
    }

    render ()  {
        return (
            <div className={"header"}>
                <img className={"img-logo"} src={require('./logo.png')} />
                <form action={"/movie"} method={"GET"}>
                    <input type="submit" onSubmit={this.redirectToConnexion} className={"btn-inscription-connexion"} value="Inscription/Connexion" />
                </form>
            </div>
        )
    }
}

module.exports = Header;
