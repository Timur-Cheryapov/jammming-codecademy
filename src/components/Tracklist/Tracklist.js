import React from 'react'
import Track from '../Track/Track'

function Tracklist(props) {
    const { tracks } = props

    return tracks.length > 0 ?
        (<ul>
            { tracks.map(track => (
                <Track
                    key={track.id}
                    track={track}
                    onClick={props.onTrackClick}
                />
            ))}
        </ul>)
        : <p>There are currently no tracks!<br/>Try clicking on any track in order to add it here!</p>;
}

export default Tracklist;