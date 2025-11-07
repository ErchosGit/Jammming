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
    album: 'Unknown',
    id: 0,
  },
  {
    name: 'Back In Black',
    artist: 'AC DC',
    album: 'Unknown',
    id: 1,
  },
  {
    name: 'The Art of War',
    artist: 'Sabbaton',
    album: 'Unknown',
    id: 2,
  },
  {
    name: 'Paint It Black',
    artist: 'Unknown',
    album: 'Unknown',
    id: 3,
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