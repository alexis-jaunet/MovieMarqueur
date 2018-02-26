import React from 'react';
import PropTypes from 'prop-types';

import Header from './header/Header';
import './Homepage.css';
import './header/Header.css';

const Movie = props => (
    <div className="movie">
        <figure className="movie__figure">
            <div className="container">
                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} className="image" />
                <div className="overlay">
                    <div className="text">{props.overview}</div>
                </div>
            </div>
            <h2 className="movie__title">{props.title}</h2>
        </figure>
    </div>
);

Movie.propTypes = {
    id         : PropTypes.number.isRequired,
    title      : PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    overview   : PropTypes.string,
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

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            query: ''
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
                <Header />
                <div className="app">
                    <Search query={query} onInput={this.onInput} placeholder="Rechercher un film..." />
                    <Movies movies={movies.filter(isSearched(query))} />
                </div>
            </div>
        );
    }
}

export default Homepage;