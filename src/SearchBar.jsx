import React, { useState } from 'react';
import { generateId } from './utilities';



function SearchBar(props){

    const [text, setText] = useState('');

    const handleTextChange = ({target}) =>{
        const { value } = target;
        setText(value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(text.length){
            const song = {
                id: generateId(),
                text: text,
            };
            // props.addSong(song);
            setText('');
        };
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                onChange={handleTextChange}
                value= {text} 
                type="text"
                id="query"
                name="query"
                aria-label="Let's Jammm!"
                placeholder="Let's Jammm!"
                
                
            />
            <button type='submit' form='query' name='search-button' value="Search" >Search</button>
        </form>
    );
}

export default SearchBar;