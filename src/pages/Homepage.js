var React = require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');

const Movie = props => (
    <div className="movie">
        <figure className="movie__figure">
            <div className="container">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} className="image" />
                <div className="overlay">
                    <div className="text">{ strip_overflow(props.overview) }</div>
                    <div className="date">{ display_date(props.release_date) }</div>
                </div>
            </div>
            <h2 className="movie__title">{ props.title }</h2>
        </figure>
    </div>
);

const strip_overflow = (val) => {
    const regex = /^(?:\S+\W+){0,50}(?:[A-zÀ-ÿ]+)/g;
    if (val == null || val == "") {
        return "";
    }
    return val.match(regex) + "...";
}

const display_date = (val) => {
    var mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");

    var indice = parseInt(val.substr(5,2))-1;

    var year  = val.substr(0,4);
    var month = mois[indice];
    var day   = val.substr(8,2);

    var releaseDate = new Date (val);

    if (releaseDate < new Date()) {
        return (day + " " + month + " " + year);
    }
    return ("Sort le " + day + " " + month + " " + year);
}

Movie.propTypes = {
    id           : PropTypes.number.isRequired,
    title        : PropTypes.string.isRequired,
    poster_path  : PropTypes.string,
    overview     : PropTypes.string,
    release_date : PropTypes.string,
};

const Movies = props => (
    <ul className="movies">
        {props.movies.map(movie => (
            <li key={movie.id}>
                <Movie {...movie} />
            </li>
        ))}
    </ul>
);

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};

const Search = props => (
    <form className="search" onInput={event => props.onInput(event.target.value)}>
        <input type="search" value={props.query} placeholder={props.placeholder} />
    </form>
);

Search.propTypes = {
    query      : PropTypes.string.isRequired,
    onInput    : PropTypes.func.isRequired,
    placeholder: PropTypes.string
};


// CLASSE PRINCIPALE
class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            query: '',
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(query) {
        this.setState({
            query
        });

        if (query == '') {
            this.getPopularMovies();
        } else {
            this.searchMovie(query);
        }
    }

    getPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716&language=fr-FR`;

        fetch (url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results
                })
            });
    }

    searchMovie(query) {
        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716&language=fr-FR`;

        fetch (url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results
                })
            });
    }

    componentDidMount() {
        this.getPopularMovies();
    }

    render() {
        const { movies, query } = this.state;
        const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());

        return (
            <div>
                <div className="app" id="homepage">
                    <Search query={query} onInput={this.onInput} placeholder="Rechercher un film..." />
                    <Movies movies={movies.filter(isSearched(query))} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Homepage/>, document.getElementById('root'));
module.exports = Homepage;