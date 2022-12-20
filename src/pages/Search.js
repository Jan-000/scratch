import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const datax = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  // console.log("erstmal luk hir", datax)
  // console.log("luk hir", datax[1].id)

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    const result = datax.filter(
      (o) =>
        o.fromStation.includes(searchTerm) || o.toStation.includes(searchTerm)
    );

    setSearchResult(result);
    console.log("masz", searchResult);
  }, [searchTerm]);

  return (
    <>
      <h1>Search ride</h1>

      <input onChange={handleChange} value={searchTerm} type="text" />

      <br />

      <div>
        <ul>
          {searchResult.map((item) => (
            <li>
              <Link to={item.id} todo={item}>
                {item.fromStation} → {item.toStation}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
