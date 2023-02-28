import React from 'react'
import GetData from '../components/search/Api'


const SearchPage = ({searchResult}) => {
  return (
    <section>
        Search results
      <GetData />
    </section>
  )
}

export default SearchPage
