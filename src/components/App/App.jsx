import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ArtistListPresenter from '../../containers/ArtistListPresenter';
import ReleaseListPresenter from '../../containers/ReleaseListPresenter';
import RecordingListPresenter from '../../containers/RecordingListPresenter';
import LyricsPresenter from '../../containers/LyricsPresenter';

//Add release view
//Add song view

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/releases/recordings/:id' component={RecordingListPresenter}/>
        <Route path='/releases/:id' component={ReleaseListPresenter}/>
        <Route exact path='/lyrics/' component={LyricsPresenter}/>
        <Route path='/' component={ArtistListPresenter}/>
      </Switch>
    </Router>
  );
}

