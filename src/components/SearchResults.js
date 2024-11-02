import React from 'react'
import Tracklist from './Tracklist';

function SearchResults(props) {

    return (
        <>
            <h1>Search Results</h1>
            <Tracklist tracks={props.tracks} onTrackClick={props.onAddTrack} />
        </>
    );
}

export default SearchResults;