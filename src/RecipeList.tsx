import Recipe from "./Recipe"
import { IRecipe } from "./Type";

interface IRecipeListProps {
    recipes: IRecipe[];
}

export default function RecipeList({recipes} : IRecipeListProps) {
    return (
        <div className="recipe-list">
        {recipes.length > 0 ? (
            recipes.map((recipe) => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))
        ) : (
            <p>No recipes found.</p>
        )}
        </div>
    )
}