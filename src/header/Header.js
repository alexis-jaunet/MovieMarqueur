var React = require("react");

class Header extends React.Component {
    render ()  {
        return <div className={"header"}>
            <img className={"img-logo"} src={require('./logo.png')} />
            <form action={""} method={"GET"}>
                <input type="submit" className={"btn-inscription-connexion"} value="Inscription/Connexion" />
            </form>
        </div>
    }
}

module.exports = Header;
