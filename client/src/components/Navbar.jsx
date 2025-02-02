import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar () {

    return (
        <>
            <div className="navbar-container">
            <Link to={"/"}>Home</Link> |
            <Link to={"/form"}> Share a recipe</Link> | 
            <Link to={"/recipes"}> View all recipes</Link>
            </div>
        </>
    )
}