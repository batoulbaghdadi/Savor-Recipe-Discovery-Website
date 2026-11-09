
import "../styles/RecipeDisplay.css";
function RecipeDisplay({ display }) {

  const selectedRecipe = display;
return (
    <div className="recipe-display">

     
      <div className="recipe-display-hero">

        <div className="recipe-display-info">
          <span className="recipe-category">
            {selectedRecipe.category}
          </span>

          <h1>{selectedRecipe.name}</h1>

          <p>{selectedRecipe.description}</p>

        </div>

        <img
          src={selectedRecipe.image}
          alt={selectedRecipe.name}
          className="recipe-display-image"
        />

      </div>

     
      <div className="recipe-details">

        <div>
            <span>Preparation Time:</span>
          <strong>{selectedRecipe.prepTime} min</strong>
          
        </div>

        <div>
            <span>Cooking Time:</span>
          <strong>{selectedRecipe.cookTime} min</strong>
          
        </div>

        <div><span>Total Time:</span>
          <strong>{selectedRecipe.totalTime} min</strong>
          
        </div>

        <div>  <span>Servings:</span>
          <strong>{selectedRecipe.servings}</strong>
        
        </div>

        <div><span>Difficulty:</span>
          <strong>{selectedRecipe.difficulty}</strong>
          
        </div>

      </div>

     
      <div className="recipe-display-content">

        <section className="ingredients-section">
          <h2>Ingredients</h2>

          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="instructions-section">
          <h2>Instructions</h2>

          <ol>
            {selectedRecipe.instructions.map((step, index) => (
              <li key={index}>
                <span className="step-number">
                  {index + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

      </div>

    </div>
  );
}

export default RecipeDisplay;