import "../styles/RecipeCard.css";
import { useContext ,useState} from "react";
import { SharedBox } from "../App"; 

function RecipeCard({ recipe,isFavorite }) {
  const onAddFavorite = useContext(SharedBox);
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
          <button className="recipe-card-btn">
            View Recipe
          </button>
         
        {!isFav && (
    <button
        className="recipe-card-btn favorite-action-btn"
        onClick={() => {
            onAddFavorite(recipe);
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