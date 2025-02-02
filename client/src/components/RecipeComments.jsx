import "./RecipeComments.css"
export default function RecipeComments (props) {
    const {username, food_category, recipe_name, minutes, ingredients, instructions} = props 
    return (
        <>
        <div className="recipe-container"> 
                    <h4>By: {username}</h4>
                    <h4>{food_category}</h4>
                    <h3>{recipe_name}</h3>
                    <p>{minutes} min/s</p>
                    <p>Ingredients: {ingredients}</p>
                    <p>Instructions: {instructions}</p>
                    </div>
        </>
    )
}