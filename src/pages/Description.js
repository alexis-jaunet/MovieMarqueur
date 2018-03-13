import React from 'react'
import ReactDOM from 'react-dom'

class Description extends React.Component {
    constructor(props) {
        super(props)
        this.state = {id: this.props.id, data: []}
    }

    componentDidMount () {
        fetch(`http://dylanviaud.me/api/v1/external/${this.props.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.props.token
            }
        })
            .then(response => response.json())
            .then(data => {
               this.setState ({
                    data: data.data
               })
            })
    }

    render() {
        console.log(this.state)

        const divStyle = {
            background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://image.tmdb.org/t/p/w1280' +
            this.state.data.backdrop_path + '"), no-repeat center center'
        }

        return (
            <div id="container">
                <div id="results" style={divStyle}>
                    <div id="movie">
                        <div className="movie-details-container">
                            <div className="column column-sm">
                                <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} id="poster"></img>
                            </div>
                            <div className="column column-lg">
                                <h1 id="title">{this.state.data.title}<span id="date"> ({this.state.data.title})</span></h1>
                                <div className="row">
                                    <span className="badge"><span id="status">{this.state.data.status}</span></span>
                                </div>
                                <div className="row">
                                    {this.state.data.runtime} minutes | Fantasy, Animation, Family
                                </div>
                                <h2 id="tagline">{this.state.data.tagline}</h2>
                                <div id="overview">
                                    <p id="synopsis">{this.state.data.overview}</p>
                                </div>
                                <div className="column column-md">
                                    <h2>Box Office</h2>
                                    <div id="budget">Budget: ${this.state.data.budget}</div>
                                    <div id="revenue">Revenue: ${this.state.data.revenue}</div>
                                </div>
                                <div className="column column-md">
                                    <h2>Company Credits</h2>
                                    <div id="companies">Studio Ghibli, Nibariki, Tokuma Japan Communications Co. Ltd.</div>
                                </div>
                                <div className="row">
                                    <div className="column column-xlg">
                                        <div className="ratings">
                                            <h2>Rating</h2>
                                            <span id="rating">{this.state.data.vote_average}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Description />, document.getElementById('root'))
export default Description
