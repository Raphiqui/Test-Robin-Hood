import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Movies from '../../containers/Movies';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Movies}/>
    </Switch>
);

export default Main;