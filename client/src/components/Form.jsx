import { useState } from "react"

export default function Form () {
    // We will store the form values in state 
    const [formValues, setFormValues] = useState(
        {
            username: "",
            food_category: "",
            recipeName: "",
            time: "",
            ingredients: "",
            instructions: ""
        }
    )

    // We need submit handler 
    // In the submit handler, we have different tasks:
    // - We need to prevent the default behaviour of our form
    // - We need to fetch the POST route from the server (you don't need useEffect for this task)
    function handleSubmit (event){
        event.preventDefault();
        //the client is trying to send a POST request to the /new-data route on the backend server 
        fetch("http://localhost:8080/add-recipe", { 
            method: "POST",
            headers: {"Content-type": "application/json",},
            body: JSON.stringify(formValues)
        });
        // alert("Form Submitted!")
    }
    
    // We need change handler 
    function handleChangeFormValues (event) {
        setFormValues({
            ...
            formValues,
            [event.target.name] : event.target.value
        })
        console.log(event.target.value)
    }

    return (
        <>
            <h2>Form</h2>
            {/* Write your form tags and all its elements in here, including the event listener (and the value attribute...) */}
            <form onClick={handleSubmit}>
                <label htmlFor="">Username:</label> <br/>
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
                <label htmlFor="">Recipe Name:</label> <br/>
                <input 
                    type="text" 
                    name="recipeName" 
                    id="recipeName"
                    placeholder="Enter your recipe name"
                    required
                    value={formValues.recipeName}
                    onChange={handleChangeFormValues}
                />
                <br/>
                <label htmlFor="">Cooking Time (minutes):</label> <br/>
                <input 
                    type="number" 
                    name="time" 
                    id="time"
                    min={0}
                    required
                    value={formValues.time}
                    onChange={handleChangeFormValues}
                />
                <br/>
                <label htmlFor="">Ingredients:</label> <br/>
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
                <label htmlFor="">Instructions:</label> <br/>
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
        </>
    )
}