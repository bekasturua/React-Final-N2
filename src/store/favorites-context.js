import { createContext } from "react";
import { useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavotes: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavotes: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
