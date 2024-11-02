import React from 'react'

function SearchBar(props) {
    const {prompt, onPromptChange} = props

    return (
        <input value={prompt} onChange={onPromptChange} />
    );
}

export default SearchBar;