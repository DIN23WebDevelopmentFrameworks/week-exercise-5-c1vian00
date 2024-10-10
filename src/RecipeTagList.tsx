import RecipeTag from "./RecipeTag";

interface IRecipeTagProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTagList( { tagList, onSelectTag }: IRecipeTagProps) {
    return (
        <div className="tag-list">
            <h3>Choose a tag below</h3>
            {tagList.map((tag) => (
                <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
            ))}
        </div>
    )
}