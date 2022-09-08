import { createContext } from "react";
import { useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavotes: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(FavoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(FavoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetupId);
  }

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
