import React, { useState } from 'react';
import Track from './Track';


function SearchResults({results, addToPlaylist}){

    const addTrack = (song) =>{
        addToPlaylist(addedSong=>[song, ...addedSong]);
    };

    return (
        <>
            <h2>Results</h2>

            <ul>
                {results.map((result, index ) => {
                    
                    function handleSubmit(e){
                        e.preventDefault();
                        
                        const song = [result.id, result.name, result.artist, result.album, result.track];
                        addTrack(song);
                    }

                    return (
                    
                        <li key={index}>
                            <form onSubmit={handleSubmit}>
                                <Track name={result.name} artist={result.artist} album={result.album}/> 
                                <button type='submit' name='addSong' className="secondary-btn">+</button>
                            </form> 
                                
                        </li>
                    
                    );
                })}
                
            </ul>
        </>
    );

}


export default SearchResults;