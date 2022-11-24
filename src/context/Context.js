import React, { useContext, useState, createContext } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("AppContext must be within contextprovider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [fav, setFavs] = useState([]);

  const addToFavorites = (book) => {
    const oldFavs = [...fav];
    const newFavs = oldFavs.concat(book);

    setFavs(newFavs);
  };

  const removeFromFavorites = (id) => {
    const oldFavs = [...fav];
    const newFavs = oldFavs.filter((book) => book.id !== id);
    setFavs(newFavs);
  };

  return (
    <AppContext.Provider value={{fav, addToFavorites, removeFromFavorites}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
