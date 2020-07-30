export const find = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(({ releases }) => ({
    //   totalPages: Math.ceil(count / 25),
      releases: releases.map(release=> ({
        id: release.id,
        title: release.title,
        date: release.date
      }))
    }));
};
  
