import styles from "./App.module.css";

import React, { useState, useEffect } from 'react'
import { MOCK_TRACKS, MOCK_MY_TRACKS, SEARCH_DEFAULT } from '../../utils/mockData'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'
import SearchBar from '../SearchBar/SearchBar'
import Spotify from '../../utils/Spotify'

function App() {
  const [tracks, setTracks] = useState(MOCK_TRACKS)
  const [myTracks, setMyTracks] = useState([])
  const [playlistName, setPlaylistName] = useState('My playlist')

  useEffect(() => {
    Spotify.search(SEARCH_DEFAULT).then(setTracks, (reason) => { alert(`Oops!\n${reason}`) })
  }, [])

  const onSearchClickHandler = (prompt) => {
    Spotify.search(prompt).then(setTracks, (reason) => { alert(`Oops!\n${reason}`) })
  }

  const onAddTrackHandler = (id) => {
    const myTrack = tracks.find(track => track.id === id)

    setMyTracks((prev) => {
      if (!prev.includes(myTrack)) {
        return [myTrack, ...myTracks]
      } else {
        return myTracks
      }
    })
  }

  const onRemoveTrackHandler = (id) => {
    setMyTracks(prev => prev.filter(track => track.id !== id))
  }

  const playlistNameChangeHandler = ({target}) => {
    setPlaylistName(target.value)
  }

  const onSavePlaylistHandler = () => {
    Spotify.savePlaylist(playlistName, myTracks.map(track => track.uri)).then(() => {
      const num = myTracks.length
      setPlaylistName('My playlist')
      setMyTracks([])
      alert(`Successfully saved ${num} tracks to ${playlistName} playlist!`)
    }, (reason) => {
      alert(`There was an error while saving your playlist:\n${reason}`)
    })
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>Jammming</h1>
      <SearchBar onSearchClick={onSearchClickHandler} />

      <div className={styles.Tracklists}>
        <div className={styles.EachTracklist}>
          <SearchResults
          tracks={tracks}
          onAddTrack={onAddTrackHandler} />
        </div>
        <div className={styles.EachTracklist}>
          <Playlist
          playlistName={playlistName}
          tracks={myTracks}
          onRemoveTrack={onRemoveTrackHandler}
          onSavePlaylist={onSavePlaylistHandler}
          onPlaylistNameChange={playlistNameChangeHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
