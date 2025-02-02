import "./RecipeComments.css"
export default function RecipeComments (props) {
    const {
        // id, 
        username, 
        food_category, 
        recipe_name, 
        minutes, 
        ingredients, 
        instructions, 
        // setRefreshCount
    } = props 

    // async function handleDelete(){
    //     //the client is trying to send a POST request to the /new-data route on the backend server 
    //     await fetch(`http://localhost:8080/delete-recipe/${id}`, { 
    //         method: "DELETE",
    //         headers: {"Content-type": "application/json",},
    //     });
    //     alert("Your recipe has been deleted!")
    //     setRefreshCount(prevCount => prevCount + 1);
    // }
    return (
        <>
        <div className="recipe-container"> 
                    <h4>Recipe shared by: {username}</h4>
                    <h4>Category: {food_category}</h4>
                    <h3>{recipe_name}</h3>
                    <p>{minutes} min(s)</p>
                    <p>Ingredients: {ingredients}</p>
                    <p>Instructions: {instructions}</p>
                    {/* <button onClick={handleDelete}>Delete recipe</button> */}
                    </div>
        </>
    )
}