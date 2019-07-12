import React from 'react'

export const RecipeContent = props =>
    console.log(props.recipes) || (
        <div>
            {props.recipes.map((data, index) => {
                return <div key={index}> <img src= {data.recipe.image} alt="makanan"/> </div>
            })}
        </div>
    )
