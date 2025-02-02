// We need a component to render the data from the database
import { useEffect, useState  } from "react";

export default function Recipes () {
    // We need to store the database values in state
    const [data, setData] = useState([]);

    // we need to fetch the values from the database (via server) --> this is an effect 
    // once we have fetched the values, we need to parse them into JSON --> console log your data to see what it looks like, in case you might have to wrangle it
    // set the state variable to store our fetched data 
    useEffect(()=> {
        async function fetchData () {
            try {
                const response = await fetch("http://localhost:8080/recipes");
                const data = await response.json;
                console.log("EFFECT!!! : Data fetched successfully!")
                setData(data)
            } catch (error){
                console.error(`"SIDE EFFECT!! : Failed to fetch" ${error}`)
            }
        }
        fetchData()
    }, []) 



    //! When you have finished your assignment remember to replace the local host urls with the Render server url 
    return (
        <>
            <h2>All recipes will be displayed here</h2>
            {/* here I will render a list with all my content entries (remeber the key) */}
            {/* a suggestion for you, fancies: why not conditionally rendering some of your content data? */}
        </>
    )
}