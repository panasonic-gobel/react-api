import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './components/Recipe'


const App = () => {
    const APP_ID = 'd7cdbd90'
    const APP_KEY = '7ab5074670cf57c35309138defe89185'
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')
    // const API_URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }
    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <div className='App'>
            {/* <h1>Find recipients here</h1> */}
            <form onSubmit={getSearch} className='search-form'>
                <input
                    className='search-bar'
                    type='text'
                    value={search}
                    onChange={updateSearch}
                    placeholder='Please enter the recipe you are looking for?'
                />
                <button className='search-button' type='submit'>
                    Search
                </button>
            </form>
            <div className='recipes'>
                {recipes.map(recipe => (
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
    )
}
export default App
