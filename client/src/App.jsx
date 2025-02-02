// The app component is the parent of your other components 
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";

// Here you should set up your routes 
export default function App () {
  return (
    <>
      {/* Routes go here! */}
      <Header/>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Form/>} path="/form"/>
          <Route element={<Recipes/>} path="/recipes"/>
        </Routes>
      <Footer/>
    </>
  )
}