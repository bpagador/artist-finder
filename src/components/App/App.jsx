import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ArtistListPresenter from '../../containers/ArtistListPresenter';
import ReleaseListPresenter from '../../containers/ReleaseListPresenter';

//Add release view
//Add song view

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/releases/:id' component={ReleaseListPresenter}/>
        <Route path='/' component={ArtistListPresenter}/>
      </Switch>
    </Router>
  );
}

