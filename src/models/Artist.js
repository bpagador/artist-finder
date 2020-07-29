export const find = (artistName, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${page}`)
    .then(res => res.json())
    .then(({ artists, count }) => ({
      offset: Math.ceil(count / 25),
      artists: artists.map(artists => ({
        id: artists.name,
        name: artists.name
      }))
    }));
};
