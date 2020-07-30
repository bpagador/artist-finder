export const find = (artistSearch, offset, limit) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistSearch}&fmt=json&limit=${limit}&offset=${offset}`)
    .then(res => res.json())
    .then(({ artists, count }) => ({
      totalCount: count,
      artists: artists.map(artist => ({
        id: artist.id,
        name: artist.name
      }))
    }));
};
