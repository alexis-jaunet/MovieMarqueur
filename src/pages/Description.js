import React from 'react'
import ReactDOM from 'react-dom'

class Description extends React.Component {
    constructor(props) {
        super(props)
        this.state = {id: this.props.id, data: []}
    }

    componentDidMount() {
        fetch(`http://dylanviaud.me/api/v1/external/${this.props.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.data
                })
            })
    }

    render() {

        function formatRuntime(runtime) {
            var minutes = runtime % 60;
            var hours = Math.floor(runtime / 60);
            return (`${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} minutes`);
        }
        if(typeof this.state.data !== 'undefined') {

            var runtimeString = formatRuntime(this.state.data.runtime);

            var genreNames = [];
            if (this.state.data.genres) {
                this.state.data.genres.forEach(function (genre) {
                    genreNames.push(genre.name);
                });
            }
            var genreString = genreNames.join(", ");
            var productionCompanies = [];
            var companyString = productionCompanies.join(', ');
            var userRating = this.state.data.vote_average*10

            if (this.state.data.production_companies) {
                this.state.data.production_companies.forEach(function (company) {
                    productionCompanies.push(company.name);
                });
            }

            var companyString = productionCompanies.join(', ')
            if (this.state.data.release_date)
                var anneeSortie = this.state.data.release_date.split("-")[0]
            const divStyle = {
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://image.tmdb.org/t/p/w1280${
                    this.state.data.backdrop_path
                    }")`,
                backgroundSize: 'cover'
            }

            return (
                <div id='container'>
                    <div id='results' style={divStyle}>
                        <div id='movie'>
                            <div className='movie-details-container'>
                                <div className='column column-sm'>
                                    <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
                                         id='poster'/>
                                </div>
                                <div className='column column-lg'>
                                    <h1 id='title'>
                                        {this.state.data.title}
                                        <span id='date'> ({anneeSortie})</span>
                                    </h1>
                                    <div className='row'>
                  <span className='badge'>
                    <span id='status'>{this.state.data.status}</span>
                  </span>
                                    </div>
                                    <div className='row'>{runtimeString} | {genreString}</div>
                                    <h2 id='tagline'>{this.state.data.tagline}</h2>
                                    <div id='overview'>
                                        <p id='synopsis'>{this.state.data.overview}</p>
                                    </div>
                                    <div className='column column-md'>
                                        <h2>Box Office</h2>
                                        <div id='budget'>Budget: ${this.state.data.budget}</div>
                                        <div id='revenue'>Revenue: ${this.state.data.revenue}</div>
                                    </div>
                                    <div className='column column-md'>
                                        <h2>Company Credits</h2>
                                        <div id='companies'>{companyString}.</div>
                                    </div>
                                    <div className='column column-lg'>
                                        <div className='row'>
                                            <div className='ratings'>
                                                <h2>Note utilisateur</h2>
                                                <div className="star-ratings-sprite">
                                                    <span style={{width: userRating+'50%'}}
                                                          className="star-ratings-sprite-rating"></span>
                                                </div>
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
           else return (
            <section id='centered-container'>
                <div id='centered-message'>
                    <h1>Erreur !</h1>
                    <p>Vous devez vous connecter pour accéder à la ressource.</p>
                </div>
            </section>
        )

    }
}

ReactDOM.render(<Description/>, document.getElementById('root'))
export default Description
