import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

const MoviesListItem = ({ movies }) => (
    <Link to={`/movies/${movies.show.id}`}>
            <ListGroupItem>
                {movies.show.name}
            </ListGroupItem>
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