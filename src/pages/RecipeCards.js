import "../styles/RecipeCard.css";
import { useContext ,useState} from "react";
import { SharedBox } from "../App"; 
import { Link } from "react-router-dom";
function RecipeCard({ recipe,isFavorite }) {
 const { handleAddFavorite, handleDisplayRecipe } = useContext(SharedBox);
   
const [isFav,setIsFav]=useState(isFavorite);
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-card-content">
        <h2>{recipe.name}</h2>
        <p>
          <strong>Prep:</strong> {recipe.prepTime} mins
        </p>
        <p>
          <strong>Cooking Time:</strong> {recipe.cookTime} mins
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings} persons
        </p>
        <p className="recipe-description"> {recipe.description} </p>
        
        <div className="recipe-card-actions">
        <Link
    to="/RecipeDisplay"
    className="recipe-card-btn"
    onClick={() => handleDisplayRecipe(recipe)}
>
    View Recipe
</Link>
         
         
        {!isFav && (
    <button
        className="recipe-card-btn favorite-action-btn"
        onClick={() => {
            handleAddFavorite(recipe);
            setIsFav(true);
        }}
    >
        Favorite
    </button>
)}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;