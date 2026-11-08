
import React, { useState } from "react";
import RecipeCard from "./RecipeCards";
import recipes from "../Module/Recipes";
import "../styles/RecipeDetails.css";

function RecipeDetails() {
  const [search, setSearch] = useState("");

  // Filter recipes based on the search input
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="recipes-page-container">

      <div className="search-section">
        <span className="search-badge">Explore</span>

        <h1>Discover Recipes</h1>

        <div className="search-input-wrapper">
          <input
            type="text"
            className="recipe-search-input"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for a recipe..."
          />
        </div>
      </div>

      <div className="recipe-details-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
               />
          ))
        ) : (
          <p className="no-recipes-found">
            No recipes found matching your search.
          </p>
        )}
      </div>

    </div>
  );
}

export default RecipeDetails;
