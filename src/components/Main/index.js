import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Movies from '../../containers/Movies';
import SingleMovie from '../../containers/SingleMovie';

const Main = props => (
	<Switch>
		<Route exact path="/" component={Movies}/>
		<Route exact path="/movies/:id" component={SingleMovie}/>
	</Switch>
);

export default Main;
