// import { Route, Routes } from "react-router-dom";
// import Form from "./Form";
// import Recipes from "./Recipes";
import { Link } from "react-router-dom"

export default function Navbar () {

    return (
        <>
            <Link to={"/"}>Home</Link> |
            <Link to={"/form"}> Recipe Form</Link> | 
            <Link to={"/recipes"}> Recipes</Link>
        </>
    )
}