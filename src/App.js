import Navbar from "./Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Create from "./pages/Create"
import TodoList from "./TodoList"
import Ridetail from "./pages/Ridetail"

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
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/create/:id" element={<Ridetail />} />
        </Routes>
      </div>


    <p>All due credit to WebDevSimplified on which I based this app.</p>


    </>
  )
}

export default App;
