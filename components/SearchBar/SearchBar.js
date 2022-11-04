import React from 'react';
import { TextInput } from 'react-native'
import styles from './SearchBar.style'

const SearchBar = () => {
    return (
        <TextInput style={styles.input} placeholder="Search.." />
    )
}

export default SearchBar;