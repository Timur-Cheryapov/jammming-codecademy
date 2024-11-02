import React, { useState } from 'react'
import Playlist from './components/Playlist'
import SearchResults from './components/SearchResults'
import SearchBar from './components/SearchBar'

const MOCK_TRACKS = [
  { songName: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", id: 1 },
  { songName: "Blinding Lights", artist: "The Weeknd", album: "After Hours", id: 2 },
  { songName: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", id: 3 },
  { songName: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", id: 4 },
  { songName: "Peaches", artist: "Justin Bieber", album: "Justice", id: 5 }
]

const MOCK_MY_TRACKS = [
  { songName: "Good 4 U", artist: "Olivia Rodrigo", album: "SOUR", id: 6 },
  { songName: "Stay", artist: "The Kid LAROI, Justin Bieber", album: "Stay - Single", id: 7 },
  { songName: "Save Your Tears", artist: "The Weeknd", album: "After Hours", id: 8 }
]

function App() {
  const [tracks, setTracks] = useState(MOCK_TRACKS)
  const [myTracks, setMyTracks] = useState(MOCK_MY_TRACKS)
  const [prompt, setPrompt] = useState('')

  const onPromptChangeHandler = ({target}) => {
    setPrompt(target.value)
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

  const onSavePlaylistHandler = () => {
    setMyTracks([])
  }

  return (
    <div>
      <SearchBar prompt={prompt} onPromptChange={onPromptChangeHandler} />
      <SearchResults tracks={tracks} onAddTrack={onAddTrackHandler} />
      <Playlist tracks={myTracks} onRemoveTrack={onRemoveTrackHandler} onSavePlaylist={onSavePlaylistHandler} />
    </div>
  );
}

export default App;
