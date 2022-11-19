import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'


const SearchLibraryData = () => {

  return (
    <div>
      <h1>Search for books </h1>
      <div>
        Container
        <div>
          Search content
          <form>
            <div>
              <input type={'text'} placeholder = "Type author or Book title"/>
              <button type='submit'>
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchLibraryData;
