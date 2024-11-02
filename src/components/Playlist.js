import React, { useState } from 'react'
import Tracklist from './Tracklist';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('My playlist')

    const playlistNameChangeHandler = ({target}) => {
        setPlaylistName(target.value)
    }

    const savePlaylist = () => {
        // Should use Spotify API in order to save it in user's account
        console.log("Saved playlist")
        props.onSavePlaylist()
    }

    return (
        <>
            <input value={playlistName} onChange={playlistNameChangeHandler} />
            <button onClick={savePlaylist}>Save to my account</button>
            <Tracklist tracks={props.tracks} onTrackClick={props.onRemoveTrack} />
        </>
    );
}

export default Playlist;