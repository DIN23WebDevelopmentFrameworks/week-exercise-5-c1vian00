import { IRecipe } from "./Type";

interface IRecipeProps {
    recipeData: IRecipe;
}

export default function Recipe( {recipeData}: IRecipeProps) {
    return (
        <div className="recipe-box">
        <h3>{recipeData.name}</h3>
        <img src={recipeData.image} alt={recipeData.name} style={{ width: "50%", height: "auto", borderRadius: "5px" }} />
        
        <p><strong>Prep Time:</strong> {recipeData.prepTimeMinutes} minutes</p>
        <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes</p>
        <p><strong>Servings:</strong> {recipeData.servings}</p>
        <p><strong>Difficulty:</strong> {recipeData.difficulty}</p>
        <p><strong>Cuisine:</strong> {recipeData.cuisine}</p>
        <p><strong>Calories per Serving:</strong> {recipeData.caloriesPerServing}</p>
        <p><strong>Rating:</strong> {recipeData.rating} ({recipeData.reviewCount} reviews)</p>
        
        <p><strong>Ingredients:</strong></p>
        <ul>
          {recipeData.ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
  
        <p><strong>Instructions:</strong></p>
        <ol>
          {recipeData.instructions.map((instruction: string, index: number) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    )
}