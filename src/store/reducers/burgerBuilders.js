import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: null,
    building: false,
}

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.payload.ingredient]: state.ingredients[action.payload.ingredient] + 1};
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = updateObject(state, {ingredients: updatedIngredients, building: true})
    return (updateObject(updatedState, {
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.ingredient],
    }))
}

const removeIngredient = (state, action) => {
    const updatedIng = { [action.payload.ingredient]: state.ingredients[action.payload.ingredient] - 1};
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = updateObject(state, {ingredients: updatedIngs, building: true})
    return (updateObject(updatedSt, {
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload.ingredient],
    }))
}

const setIngredients = (state, action) => {
    let newPrice = 4;

    for (let ingredient in action.ingredients) {
        newPrice+=INGREDIENT_PRICES[ingredient]*action.ingredients[ingredient];
    }

    return updateObject(state, {
        ingredients: action.ingredients,
        totalPrice: newPrice,
        error: false,
        building: false,
        
    })
}

const burgerReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENT: return setIngredients(state, action);
        case actionTypes.SET_ERROR: return updateObject(state, {error: action.error});
        default: return state;
    }
}

export default burgerReducer;