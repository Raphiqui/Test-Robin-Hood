import React, { Component } from 'react';
import MoviesList from "../../components/MoviesList";

class Movies extends Component {
    state = {
        movies: []
    };

    componentDidMount() {
        fetch('https://api.tvmaze.com/search/shows?q=robin%20hood')
            .then(response => response.json())
            .then(json => this.setState({movies: json}))
    }

    render() {
        return (
            <div>
                The length of movies array - {this.state.movies.length}
                <MoviesList list={this.state.movies} />
            </div>
        )
    }
}

export default Movies