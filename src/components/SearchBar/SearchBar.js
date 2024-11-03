import React, { useState } from 'react'
import { SEARCH_DEFAULT } from '../../utils/mockData'

function SearchBar(props) {
    const { onSearchClick } = props
    const [prompt, setPrompt] = useState(SEARCH_DEFAULT)

    const onPromptChangeHandler = ({target}) => {
        setPrompt(target.value)
    }

    return (
        <>
            <input value={prompt} onChange={onPromptChangeHandler} />
            <button onClick={() => onSearchClick(prompt)}>Search</button>
        </>
    );
}

export default SearchBar;