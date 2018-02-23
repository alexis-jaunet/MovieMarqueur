var React = require("react");

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: 0, title: "Titre", note: 0 };
    }

    render () {
        return <div>
            <div className={"container-result"}>
                <a href={""} className={"lien-poster"}>
                    <img className={"poster"} src={require('./s-l1000.jpg')} />
                </a>
                <div className={"container-back-result"}>
                    <div className={"title"}>
                        {this.state.title}
                    </div>
                    <div className={"note"}>

                    </div>
                </div>
            </div>
        </div>
    }
}

module.exports = Result;