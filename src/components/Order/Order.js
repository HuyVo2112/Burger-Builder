import React from "react"
import classes from "./Order.module.css"

const order = (props) => {

    let ingredientList = [];

    for(let ingredientName in props.ingredients) {
        ingredientList.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName],


        })
    }

    let ingredientOutput = ingredientList.map(ingredient => <span style={
        {
            display: "inline-block",
            textTransform: "capitalize",
            padding: "5px",
            margin: "0 8px",
            border: "1px solid #ccc"
        }
    }>({ingredient.name}) ({ingredient.amount})</span>);
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number(props.price).toFixed(2)}</strong></p>
        </div>
    )
    

}

    



export default order;