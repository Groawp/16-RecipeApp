import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  require("dotenv").config();
  const APP_KEY = "fdd84601f6ddb74c5f7b762fe1316751";
  const APP_ID = "a85feabe";
  
  // create array of recipe when data.hits return an array of object
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')
  
  const eReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    getRecipe();
  }, [query]);


  const getRecipe = async () => {
    const response = await fetch(eReq);
    const data = await response.json();
    console.log(data);
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // update value in the input
    console.log('search');
  };

  const getSearch = e => {
    e.preventDefault()
    // stop auto refresh
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="searchbar" type="text" value={search} onChange={updateSearch}/>
        <button type="submit" className="searchbtn">
          Search
        </button>
      </form>
      <div>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
