// The app component is the parent of your other components 

import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";
import Home from "./components/Home";

// Here you should set up your routes 
export default function App () {
  return (
    <>
      <h1>Week 7 Assignment</h1>
      {/* Routes go here! */}

      <Navbar/>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Form/>} path="/form"/>
          <Route element={<Recipes/>} path="/recipes"/>
        </Routes>
      <Footer/>
    </>
  )
}