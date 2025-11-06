import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import { spotifyPlaylist } from './SpotifyPlaylist';


function App() {
  const [results, setResults] = useState(spotifyPlaylist);

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <SearchBar />
        <SearchResults results={spotifyPlaylist}/>
      </main>
      
      
      
    </>
  )
}

export default App;
