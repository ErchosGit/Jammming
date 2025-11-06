import React, { useState } from 'react';

function Song(props) {
    return <li>{props.name} {props.artist} {props.album} {props.id}</li>;
}

export default Song;