import styles from './SearchBar.module.css'

import React, { useState } from 'react'
import { SEARCH_DEFAULT } from '../../utils/mockData'

function SearchBar(props) {
    const { onSearchClick } = props
    const [prompt, setPrompt] = useState(SEARCH_DEFAULT)

    const onPromptChangeHandler = ({target}) => {
        setPrompt(target.value)
    }

    const onEnterPress = (event) => {
        if (event.key === 'Enter') {
            onSearchClick(prompt)
        }
    }

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchInputContainer}>
                <input
                    className={styles.SearchInput}
                    value={prompt}
                    onChange={onPromptChangeHandler}
                    onKeyUp={onEnterPress} />
            </div>
            <button
                className={styles.Button}
                onClick={() => onSearchClick(prompt)}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;