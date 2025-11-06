import React, { useState } from 'react';
import Song from './Song';

function SearchResults(props){
    const listItem = props.results.map(({song})=>{
                    return <Song
                        name={props.name}
                        artist={props.artist}
                        album={props.album}
                        id={props.id}
                    />;
                });

    // console.log(listItem);
    return (
        <>
            <h2>Results</h2>
            <ul className="results">
                {props.results.map((result) => (
                    <Song key={result.id} name={result.name} artist={result.artist} album={result.album}/>
                ))}
            </ul>
        </>
    );

}


export default SearchResults;