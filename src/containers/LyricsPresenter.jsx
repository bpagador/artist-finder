import React from 'react';
import PropTypes from 'prop-types';
import LyricsView from '../components/Lyrics/LyricsView';
import { useLyrics } from '../hooks/useLyrics';

const LyricsPresenter = ({ location  }) => {
  const params = new URLSearchParams(location.search);
  const artistName = params.get('artist');
  const title = params.get('title');

  const { lyrics } = useLyrics(artistName, title);

  return (
    <>
      <LyricsView lyrics={lyrics} artistName={artistName}/>
    </>
  );
};

LyricsPresenter.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default LyricsPresenter;
