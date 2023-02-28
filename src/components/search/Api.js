import React from 'react'
import { useState, useEffect } from 'react'
import axios  from 'axios'
import { LIBRARY_URL } from '../LibraryApi/LibraryApi'
import SearchButton from './SearchButton'

const GetData = () => {

    const [serach, setSearchResults] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() =>
        axios.get(`${LIBRARY_URL}`)
        .then((response) => {
            setBooks(response.data)
            setSearchResults(response.data)
        })
    ,[])

    return (
        <section>
                <SearchButton  placeholder={'enter text'} books={books} setSearchResult={setSearchResults}/>
        </section>
    )
}

export default GetData