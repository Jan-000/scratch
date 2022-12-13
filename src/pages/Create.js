import TodoList from "../TodoList"
import Todo from "./Todo"

import { v4 as uuidv4 } from 'uuid'
import React, { useState, useRef, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function Create() {


  //console.log("yx", localStorage)
  
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  });

  const todoNameRef = useRef()
  const todoNameRef2 = useRef()

  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  
  function handleAddRide(e) {
    const fromStation = todoNameRef.current.value
    const toStation = todoNameRef2.current.value
    if (fromStation === ''&&toStation === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), fromStation: fromStation, toStation: toStation}]
    })
    todoNameRef.current.value = null
    todoNameRef2.current.value = null
  }

    return (
    <>
    <h1>Share your ride</h1>
    <TodoList todos={todos}
    />
   
     <input placeholder="from"
      ref={todoNameRef}
     type="text" />
      <br />
      <input placeholder="to"
       ref={todoNameRef2}
      type="text" />
      <br />

      <button
       onClick={handleAddRide}
      >Add Ride</button>
      </>
      
      
      )
  }
  