import { useState, useEffect } from 'react';
import * as Lyrics from '../models/Lyrics';

export const useLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState([]);

  const handleClick = () => {
    Lyrics.find(artist, title)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
      });
  };

  useEffect(() => {
    if(handleClick) {
      Lyrics.find(artist, title)
        .then(({ lyrics }) => {
          setLyrics(lyrics);
        });
    }
  }, []);

  return {
    handleClick,
    lyrics
  };
};
