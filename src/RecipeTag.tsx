interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
    return (
        <div className="tag-box" onClick={() => onSelectTag(tagName)}>
            {tagName}
        </div>
    )
}