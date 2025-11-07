import { use, useState } from 'react';
import './App.css';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Song from './Song';

import { spotifyPlaylist, addedSongs } from './utilities';


function App() {
  
  
  const [results, setResults] = useState(spotifyPlaylist);

  const [playlist,setPlaylist] = useState([]);
 
  

 


  

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <SearchBar />
        <SearchResults results={results} addToPlaylist={setPlaylist}/>
        <Playlist playlist={playlist} removeFromPlaylist={setPlaylist}/>
      </main>
      
      
      
    </>
  )
}

export default App;
