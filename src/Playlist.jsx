import React, { useState } from 'react';
import Tracklist from './Tracklist';

function Playlist({playlist, removeFromPlaylist, createNewPlaylist}){

    
    const removeSong = (targetIndex) => {
        removeFromPlaylist((prev) => {
            return prev.filter((song, index) => index !== targetIndex);
        })
    };

    
    const [text, setText] = useState('');

    const handleTextChange = ({target}) =>{
        const { value } = target;
        setText(value);
    };

    const handleSubmitSpotify = (event) =>{
        event.preventDefault();
        if(text.length){
            const newPlaylist = {
                title: text,
                array: playlist,
            };
            setText('');
            removeFromPlaylist([]);
            createNewPlaylist(newPlaylist);
            console.log(newPlaylist.title, newPlaylist.array);
        };
    };

    return (
        <>
            <form>
                <input type="text" id="newPlaylist" name="newPlaylist" placeholder="My Playlist" onChange={handleTextChange} value={text}/>
                
            </form>
            <ul className="newPlaylist">

                    {playlist.map((addedSong, index) => {

                        function handleSubmit(e){
                            e.preventDefault();
                            removeSong(0);
                        }

                        return (
                            <li key={index}>
                                <form onSubmit={handleSubmit} id='song'>
                                    {addedSong.map((prop, index) => {
                                        if (index >0 && index < addedSong.length-1)
                                        return prop + ' ';
                                    } )}
                                    <button type='submit' form='song' name='deleteSong' className="secondary-btn">X</button>
                                </form>
                                
                            </li>
                        
                        ); 
                    })}
                </ul>
                <button type='submit' form='newPlaylist' name='save-to-spotify-btn' onClick={handleSubmitSpotify} className="primary-btn">SAVE TO SPOTIFY</button>
            
        </>
    );
}

export default Playlist;



/* <form method="post" action="ServerFileToExecute.php">
    <input type="submit" name="save" value="Click here to save" />
    <input type="submit" name="delete" value="Click here to delete" />
</form> */
