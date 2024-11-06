import styles from './Playlist.module.css'

import React from 'react'
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
    const {playlistName, tracks, onRemoveTrack, onSavePlaylist, onPlaylistNameChange } = props

    return (
        <div className={styles.Playlist}>
            <div className={styles.TitleContainer}>
                <div className={styles.InputContainer}>
                    <input
                        className={styles.TitleInput}
                        value={playlistName}
                        onChange={onPlaylistNameChange} />
                </div>
                <button
                    className={styles.SaveButton}
                    onClick={onSavePlaylist}>
                    Save to my account
                </button>
            </div>
            <Tracklist
                className={styles.Tracklist}
                tracks={tracks}
                onTrackClick={onRemoveTrack} />
        </div>
    );
}

export default Playlist;