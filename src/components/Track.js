import React from 'react'

function Track(props) {
    const { songName, artist, album, id } = props.track

    const handleClick = () => {
        props.onClick(id)
    }

    return (
        <li onClick={handleClick} >
            <h1>{songName}</h1>
            <h2>{artist}</h2>
            <h3>{album}</h3>
        </li>
    );
}

export default Track;