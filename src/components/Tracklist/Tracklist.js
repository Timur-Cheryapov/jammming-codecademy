import styles from './Tracklist.module.css'

import React from 'react'
import Track from '../Track/Track'

function Tracklist(props) {
    const { tracks } = props

    return tracks.length > 0 ?
        (<ul className={styles.Tracklist}>
            { tracks.map(track => (
                <Track
                    className={styles.Track}
                    key={track.id}
                    track={track}
                    onClick={props.onTrackClick}
                />
            ))}
        </ul>)
        : <p className={styles.NothingToShowText}>There are currently no tracks!<br/>Try clicking on any track to add it here!</p>;
}

export default Tracklist;