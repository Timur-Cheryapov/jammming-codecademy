import styles from "./SearchResults.module.css"

import React from 'react'
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {

    return (
        <div className={styles.SearchResults}>
            <h1 className={styles.Title}>Search Results</h1>
            <Tracklist tracks={props.tracks} onTrackClick={props.onAddTrack} />
        </div>
    );
}

export default SearchResults;