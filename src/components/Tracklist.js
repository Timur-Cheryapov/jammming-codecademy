import React, { useState } from 'react'
import Track from './Track'

function Tracklist(props) {

    return (
        <ul>
            {props.tracks.map(track => (
                <Track
                    key={track.id}
                    track={track}
                    onClick={props.onTrackClick}
                />
            ))}
        </ul>
    );
}

export default Tracklist;