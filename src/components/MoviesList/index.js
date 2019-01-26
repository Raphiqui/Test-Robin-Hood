import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const MoviesListItem = ({ movies }) => (
    <Link to={`/series/${movies.show.id}`}>
        <li>{movies.show.name}</li>
    </Link>
);

const MoviesList = (props) => {
    return (
        <div>
            <ul className="movies-list">
                {props.list.map(movies => (
                    <MoviesListItem movies={movies} key={movies.show.id}/>
                ))}
            </ul>
        </div>
    )
};

export default MoviesList;