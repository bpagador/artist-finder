export const find = (artistSearch, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistSearch}&fmt=json&limit=25&offset=${page}`)
    .then(res => res.json())
    .then(({ artists, count }) => ({
      totalPages: Math.ceil(count / 25),
      artists: artists.map(artist => ({
        id: artist.id,
        name: artist.name
      }))
    }));
};
