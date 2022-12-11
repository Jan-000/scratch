import React from "react";
import { Link, Route, useMatch, useParams } from "react-router-dom";



export default function Ridetail()
{
  //GetId()
  const { id } = useParams();
  console.log("de profondis", id);
  // const { path } = useMatch();

  // const { url } = useMatch();
  // const history = useNavigate();
//console.log("i readx", { id })
  return (
    <div >
      <div>
        <h1>essa</h1>
        <h3>ID: </h3>  
        { id }
        LOLLO
      </div>
    </div>
  );
};