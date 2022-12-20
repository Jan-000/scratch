import React, { useEffect, useState } from "react";
import { Link, Route, useMatch, useParams } from "react-router-dom";
import TodoList from "../TodoList";
import Todo from "./Todo";
//import LOCAL_STORAGE_KEY from "../App"
const LOCAL_STORAGE_KEY = 'todoApp.todos'


export default function Ridetail()
{
  //GetId()
  const { id } = useParams();
  let todos

  const data =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  // });
  console.log("dyx local", data)
  console.log("id is", id)

  const item = data.find(x => x.id === id);
  //console.log("voila", item)
  // const { path } = useMatch();
//console.log("hir todos", todos)
  // const { url } = useMatch();
  // const history = useNavigate();

  const {toStation, fromStation} = item


  return (
    <div >
      <div>
        <h1>Ride details: </h1>
          
        
        <div><strong>Train from:</strong> {fromStation}</div>
        <div><strong>to:</strong> {toStation}</div>
         {/* <Todo key={todo.id} todo={todo}/>  */}
         {/* <TodoList todos={todos}/> */}
         <small><small>travel ID: { id } </small></small>
      </div>
    </div>
  );
};