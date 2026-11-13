
import React, { createContext, useState } from 'react';

export const SharedBox = createContext();

function SharedBoxProvider({ children }) {

  const [favorites, setFavorites] = useState([]);
  const [display, setDisplay] = useState(null);

 
  const handleAddFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

 
  const handleDisplayRecipe = (recipe) => {
    setDisplay(recipe);
  };
  const handleRemoveFavorite = (recipe) => {
  setFavorites(favorites.filter((item) => item.id !== recipe.id));
};

  return (
    <SharedBox.Provider
      value={{
        favorites,
        display,
        handleAddFavorite,
        handleDisplayRecipe,
        handleRemoveFavorite
      }}
    >
      {children}
    </SharedBox.Provider>
  );
}

export default SharedBoxProvider;
