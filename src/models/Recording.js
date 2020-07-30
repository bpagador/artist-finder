export const find = (releaseId, limit) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json&limit=${limit}`)
    .then(res => res.json())
    .then(res => ({
      totalCount: res['recording-count'],
      recordings: res.recordings.map(recording => (
        {
          title: recording.title,
          id: recording.id,
          type: recording.disambiguation
        }
      ))
    }));
};
