export const find = (artistId, limit) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=${limit}`)
    .then(res => res.json())
    .then(res => ({
      totalCount: res['release-count'],
      releases: res.releases.map(release=> ({
        id: release.id,
        title: release.title,
        date: release.date
      }))
    }));
};
  
