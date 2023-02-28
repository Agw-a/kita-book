import React from 'react'

const SearchButton = ({ placeholder, books, setSearchResult }) => {
  const preventSubmit = (i) => i.preventDefault(i)

  const handleInput = (ev) => {
    // if (!ev.target.value) return

    const results = books.filter(books => books.title.includes(ev.target.value) || books.authors.includes(ev.target.value))

    setSearchResult(results)
  }
  return (
    <header>
      <form onSubmit={preventSubmit}>
        <input placeholder={placeholder} 
        onChange={handleInput} 
        className='search-input' 
        type={'text'} 
        id='search' />
      </form>
      <button>Search books</button>
    </header>
  )
}

export default SearchButton
