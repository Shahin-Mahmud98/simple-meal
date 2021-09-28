import React from 'react';
import './Meal.css'
const Meal = (props) => {
    console.log(props);
    const { strMealThumb, strMeal, strArea, strIdMeal } = props.food;
    return (
        <div className="food">
            <div className="foodsAbdar">
                <img className="size" src={strMealThumb} alt="" />
                <h1>Name:{strMeal}</h1>
                <h5>Area:{strArea}</h5>
                <p>Id:{strIdMeal}</p>
            </div>

        </div>
    );
};

export default Meal;