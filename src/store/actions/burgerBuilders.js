import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (payload) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: payload
    }
}

export const removeIngredient = (payload) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: payload
    }
}

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        error: error
    }
}

export const initIngredients = () => {
    return (dispatch) => {

        axios.get("/ingredients.json")
            .then(response => {   
                dispatch(setIngredients(response.data)) ;
            })
            .catch(error => dispatch(setError(error)))
    }
}
