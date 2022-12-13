import Navbar from "./Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Create from "./pages/Create"
import TodoList from "./TodoList"
import Ridetail from "./pages/Ridetail"
import Todo from "./pages/Todo"

import React from 'react';
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>
<Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
         
          <Route path="/create/:id" element={<Ridetail todo={Todo} />} />
        </Routes>
      </div>


    <h6>All due credit to WebDevSimplified on which I based this app.</h6>


    </>
  )
}

export default App;
