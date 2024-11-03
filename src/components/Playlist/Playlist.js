import React from 'react'
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const {playlistName, tracks, onRemoveTrack, onSavePlaylist, onPlaylistNameChange } = props

    return (
        <>
            <input value={playlistName} onChange={onPlaylistNameChange} />
            <button onClick={onSavePlaylist}>Save to my account</button>
            <Tracklist tracks={tracks} onTrackClick={onRemoveTrack} />
        </>
    );
}

export default Playlist;