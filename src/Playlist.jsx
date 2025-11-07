import React, { useState } from 'react';
import { generateId } from './utilities';

function Playlist({playlist, removeFromPlaylist}){
    const [remove, setRemove] = useState(null);
    const removeSong = (targetIndex) => {
        removeFromPlaylist((prev) => {
            return prev.filter((song, index) => index !== targetIndex);
        })
    };

    return (
        <>
            <form>
                <input type="text" id="newPlaylist" name="newPlaylist" placeholder="My Playlist"/>

            </form>
            <ul className="newPlaylist">

                    {playlist.map((addedSong, index) => {

                        function handleSubmit(e){
                            e.preventDefault();
                            removeSong(0);
                        }

                        


                        return (
                            <li key={index}>
                                <form onSubmit={handleSubmit}>
                                    {addedSong}
                                    <button type='submit' name='deleteSong'>X</button>
                                </form>
                                
                            </li>
                        
                        ); 
                    })}
                </ul>
                <button type='submit' form='newPlaylist' name='save-to-spotify-btn'>SAVE TO SPOTIFY</button>
        </>
    );
}

export default Playlist;

