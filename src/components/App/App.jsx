import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ArtistsView from '../artists/ArtistsView';

//Add release view
//Add song view

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ArtistsView}/>
      </Switch>
    </Router>
  );
}
  
