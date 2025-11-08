let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}

export const spotifyPlaylist = [
  {
    name: 'Through Fire and Flames',
    artist: 'Dragon Force',
    album: 'Inhuman Rampage',
    id: 0,
    track:'spotify:track:1UMdbkqX19OiwfExH7gzYA',
  },
  {
    name: 'Back In Black',
    artist: 'AC DC',
    album: 'Back In Black',
    id: 1,
    track: 'spotify:track:08mG3Y1vljYA6bvDt4Wqkj',
  },
  {
    name: 'The Art of War',
    artist: 'Sabaton',
    album: 'The Art of War (Re-Armed)',
    id: 2,
    track: 'spotify:track:3dt0qnuV3FZjTQN947C7FK',
  },
  {
    name: 'Paint It Black',
    artist: 'Rolling Stones',
    album: 'Aftermath',
    id: 3,
    track: 'spotify:track:63T7DJ1AFDD6Bn8VzG6JE8',
  },
];

export const addedSongs = [
  {
    name: 'Through Fire and Flames',
    artist: 'Dragon Force',
    album: 'Unknown',
    id: 12,
  },
  {
    name: 'Paint It Black',
    artist: 'Unknown',
    album: 'Unknown',
    id: 13,
  },
];