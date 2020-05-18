import React from 'react'
import style from './box.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.box}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <div className="photo">
            <p>Calories: {calories.toFixed(0)} cal</p>
            <img src={image}></img>
            </div>
        </div>
    )
}

export default Recipe