export const find = (artistName, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${page}`)
    .then(res => res.json())
    .then(json => ({
      totalPages: Math.ceil(json.count / 25),
      artists: json.artists.map(artists => ({
        id: artists.name,
        name: artists.name
      }))
    }));
};
