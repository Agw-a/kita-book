import React from 'react'
import { useContext, useEffect, UseState, useCallback } from 'react';

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerms,  setSearchTerms] = useState("The lost world");
}

const Context = () => {
  return (
    <div>
      <h1>Context and getting api data</h1>
    </div>
  )
}

export default Context
