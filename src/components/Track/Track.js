import styles from './Track.module.css'

import React from 'react'

function Track(props) {
    const { songName, artist, album, id, albumCoverUrl, previewAudioUrl } = props.track

    const handleClick = () => {
        props.onClick(id)
    }

    return (
        <li className={styles.Track} onClick={handleClick} >
            <div className={styles.Information}>
                <h1 className={styles.Song}>{songName}</h1>
                <h2 className={styles.Artist}>{artist}</h2>
                {/* <h3 className={styles.Album}>{album}</h3> */}
                <audio className={styles.Audio} controls src={previewAudioUrl} />
            </div>
            <div className={styles.CoverContainer}>
                <img className={styles.Cover} src={albumCoverUrl} />
            </div>
        </li>
    );
}

export default Track;