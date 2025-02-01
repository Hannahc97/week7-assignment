export default function Form () {
    // We will store the form values in state 
    // We need submit handler 
    // In the submit handler, we have different tasks:
    // - We need to prevent the default behaviour of our form
    // - We need to fetch the POST route from the server (you don't need useEffect for this task)
    
    // We need change handler 
    return (
        <>
            <h2>Form</h2>
            {/* Write your form tags and all its elements in here, including the event listener (and the value attribute...) */}
            <form>
                <label htmlFor="">Username:</label> <br/>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    placeholder="Enter your username"
                    required 
                />
                <br/>
                <label htmlFor="">Choose a category: </label>
                <select 
                    name="category" 
                    id="category"
                    required>
                    <option value="Starter">Starter</option>
                    <option value="Mains">Mains</option>
                    <option value="Dessert">Dessert</option>
                </select>
                <br/>
                <label htmlFor="">Recipe Name:</label> <br/>
                <input 
                    type="text" 
                    name="recipe-name" 
                    id="recipe-name"
                    placeholder="Enter your recipe name"
                    required 
                />
                <br/>
                <label htmlFor="">Cooking Time (minutes):</label> <br/>
                <input 
                    type="number" 
                    name="time" 
                    id="time"
                    min={0}
                    required 
                />
                <br/>
                <label htmlFor="">Ingredients:</label> <br/>
                <textarea 
                    name="ingredients" 
                    id="ingredients"
                    placeholder="Enter the ingredients needed for this recipe"
                    required 
                    rows="10" 
                    cols="30">
                </textarea>
                <br/>
                <label htmlFor="">Instructions:</label> <br/>
                <textarea 
                    name="instructions" 
                    id="instructions"
                    placeholder="Enter the instuctions for your recipe"
                    required 
                    rows="8" 
                    cols="50">
                </textarea>
                <br/>
                <button type="submit">Submit Recipe!</button>
            </form>
            {/* Remember to track the input changes */}

        </>
    )
}