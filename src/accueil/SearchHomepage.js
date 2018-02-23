var React = require("react");

class SearchHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { token: sessionStorage.token, search : "" };

        this.updateSearch = this.updateSearch.bind(this);
        this.clearField = this.clearField.bind(this);
    }

    updateSearch (event) {
        var search = event.target.value;
        this.setState({
            search: search
        });
    }

    clearField (event) {
        this.setState({
            search: ""
        });
    }

    render ()  {
        return <div>
            <input type={"search"} onInput={this.updateSearch}  onSearch={this.clearField}
                   placeholder={"Rechercher un film..."} className={"search"} />
        </div>
    }
}

module.exports = SearchHomepage;