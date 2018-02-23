var React  = require("react");
var Result = require("./Result");

class ResultSet extends React.Component {
    render () {
        return <div>
            <div className={"container-result-search"}>
                <div className={"container-row"}>
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                </div>

                <div className={"container-row"}>
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                </div>

                <div className={"container-row"}>
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                </div>
            </div>
        </div>
    }
}

module.exports = ResultSet;