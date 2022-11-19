import React, { useContext, useEffect, useCallback, useState } from 'react';

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerms,  setSearchTerms] = useState("The lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true)
    const [resutTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            const response = await  fetch(`${URL}${searchTerms}`);
            const data = await response.json();
            console.log(data);
            const {docs} = data;
        } catch (error){
            console.log(error);
            setLoading(false);
        };

    }, [searchTerms]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerms, fetchBooks]);

    return (
        <AppContext.Provider value= {{
            loading, books, setSearchTerms, resutTitle, setResultTitle,

        }}>
            {children}
        </AppContext.Provider>
    )
}



export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
