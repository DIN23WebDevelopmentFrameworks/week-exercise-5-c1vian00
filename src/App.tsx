import { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import "./App.css"

const App = () => {

  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState(null)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => {
        setTags(data)
      })
  }, [])

  const handleTagSelect = (tagName: string) => {
    setSelectedTag(tagName)

    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
  }

  const handleBackButtonClick = () => {
    setSelectedTag(null)
  }

  return (
    <>
      <h1>ACME Recipe O'Master</h1>

      {selectedTag && <h2>Recipes for {selectedTag}</h2>}

      {selectedTag ? (
        <>
          <button className="back-button" onClick={handleBackButtonClick}>Back</button>
          <RecipeList recipes={recipes} />
        </>
      ): (
        <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
      )}
      
    </>
  );
};

export default App;
