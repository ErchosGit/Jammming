import React, { useState } from 'react';
import SearchButton from './SearchButton';

function SearchBar(){
    return (
        <form>
            <input type="text" id="query" name="query"/>
            <SearchButton />
        </form>
    );
}

export default SearchBar;