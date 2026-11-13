import { useContext } from "react";
import  {SharedBox} from "../Context/SharedBox";
import RecipeCard from "./RecipeCards";

function Favorites() {

  const { favorites } = useContext(SharedBox);

  return (
    <div className="recipes-page-container">

      <div className="search-section">
        <h1>My Favorite Recipes</h1>
      </div>

      <div className="recipe-details-container">

        {favorites.length === 0 ? (
          <p className="no-recipes-found">
            No favorite recipes added yet.
          </p>
        ) : (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={true}
            />
          ))
        )}

      </div>
    </div>
  );
}

export default Favorites;
