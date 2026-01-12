import React from "react";
import Home from "./Screens/Home";
import Course from "./Screens/Course";
import Cart from "./Screens/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/course/:id" element={<Course></Course>} />
        <Route path="/Cart" element={<Cart></Cart>} />
      </Routes>
    </>
  );
};

export default App;
