import React, { useEffect, useState } from 'react';
import Cart from '../Food-cart/Cart';
import Meal from '../Meal/Meal';
import './Food.css'

const Food = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, []);

    const addToCart = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);

    }

    return (
        <div className="food-Container">
            <div>
                <h3>Food:{foods.length}</h3>
                {
                    foods.map((food, i) => <Meal key={i} food={food}></Meal>)
                }
            </div>
            <div className="container">
                <h1>Show Food</h1>
            </div>

        </div>

    );
};

export default Food;