import { useState } from "react"
import "./Form.css"
import { useNavigate } from "react-router-dom"

export default function Form () {
    // We will store the form values in state 
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState(
        {
            username: "",
            food_category: "",
            recipe_name: "",
            minutes: "",
            ingredients: "",
            instructions: ""
        }
    )
    
    // We need change handler 
    function handleChangeFormValues (event) {
        setFormValues({
            ...
            formValues,
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }

    // We need submit handler 
    // In the submit handler, we have different tasks:
    // - We need to prevent the default behaviour of our form
    // - We need to fetch the POST route from the server (you don't need useEffect for this task)
    function handleSubmit (event){
        event.preventDefault();
        //the client is trying to send a POST request to the /new-data route on the backend server 
        fetch("https://week7-assignment-nh1l.onrender.com/add-recipe", { 
            method: "POST",
            headers: {"Content-type": "application/json",},
            body: JSON.stringify({formValues})
        });
        alert("Your recipe has been submitted!")
        navigate("/recipes")
    }

    

    return (
        <>
        <div className="form-container">
            <h2>Recipe Form</h2>
            {/* Write your form tags and all its elements in here, including the event listener (and the value attribute...) */}
            <form id="form-container2" onSubmit={handleSubmit}>
                <label htmlFor="">Username: </label> <br/>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    placeholder="Enter your username"
                    required
                    value={formValues.username}
                    onChange={handleChangeFormValues}
                />
                <br/>
                <label htmlFor="">Food Category: </label> <br/>
                <input 
                    type="text" 
                    name="food_category" 
                    id="food_category"
                    placeholder="Enter the food category"
                    required
                    value={formValues.food_category}
                    onChange={handleChangeFormValues}
                />
                <br/>
                <label htmlFor="">Recipe Name: </label> <br/>
                <input 
                    type="text" 
                    name="recipe_name" 
                    id="recipe_name"
                    placeholder="Enter your recipe name"
                    required
                    value={formValues.recipe_name}
                    onChange={handleChangeFormValues}
                />
                <br/>
                <label htmlFor="">Cooking Time (minutes): </label> <br/>
                <input 
                    type="number" 
                    name="minutes" 
                    id="minutes"
                    min={0}
                    required
                    value={formValues.minutes}
                    onChange={handleChangeFormValues}
                />
                <br/>
                <label htmlFor="">Ingredients: </label> <br/>
                <textarea 
                    name="ingredients" 
                    id="ingredients"
                    placeholder="Enter the ingredients needed for this recipe"
                    required 
                    rows="10" 
                    cols="30"
                    value={formValues.ingredients}
                    onChange={handleChangeFormValues}>
                </textarea>
                <br/>
                <label htmlFor="">Instructions: </label> <br/>
                <textarea 
                    name="instructions" 
                    id="instructions"
                    placeholder="Enter the instuctions for your recipe"
                    required 
                    rows="8" 
                    cols="50"
                    value={formValues.instructions}
                    onChange={handleChangeFormValues}>
                </textarea>
                <br/>
                <button type="submit">Submit Recipe!</button>
            </form>
            {/* Remember to track the input changes */}
        </div>
        </>
    )
}