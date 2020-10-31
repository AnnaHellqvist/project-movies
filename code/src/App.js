import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MoviesList from 'Components/MoviesList';
import MovieDetails from 'Components/MovieDetails';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact> 
          <MoviesList />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
