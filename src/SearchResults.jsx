import React, { useState } from 'react';
import Song from './Song';
import { generateId } from './utilities';


function SearchResults({results, addToPlaylist}){

    const addSong = (song) =>{
        addToPlaylist(addedSong=>[song, ...addedSong]);
    };

    return (
        <>
            <h2>Results</h2>

            <ul>
                {results.map((result, index ) => {
                    
                    function handleSubmit(e){
                        e.preventDefault();
                        
                        const song = [result.id + ' ', result.name + ' ', result.artist + ' ', result.album + ' '];
                        addSong(song);
                    }

                    return (
                    
                        <li key={index}>
                            <form onSubmit={handleSubmit}>
                                <Song id={result.id} name={result.name} artist={result.artist} album={result.album}/> 
                                <button type='submit' name='addSong'>+</button>
                            </form> 
                                
                        </li>
                    
                    );
                })}
                
            </ul>
        </>
    );

}


export default SearchResults;