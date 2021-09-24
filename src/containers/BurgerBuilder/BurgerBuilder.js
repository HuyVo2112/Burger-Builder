import React, {Component} from "react";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/index";



class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            purchasing: false,
            loading: false,
        }

        
    }

    updatePurchaseState = (ingredients) => {
        return Object.values(ingredients).reduce((acc, currentValue) => acc + currentValue) > 0;
    }

    componentDidMount() {
        this.props.getIngredientFromDatabaseHandler()
            
    }



    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState((prevState, prevProps) => ({
                purchasing: true
            }))
        } else {
            this.props.setAuthRedirectPathHandler("/checkout")
            this.props.history.push("/auth");
        }
            
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    parseQueryParam = () => {
        let tempString = "?";

        for(let ingredient in this.props.ingredients) {
            tempString+=`${ingredient}=${this.props.ingredients[ingredient]}&`;
        }
        tempString = tempString + `totalPrice=${this.props.totalPrice}`
        return tempString;
    }

    purchaseContinueHandler = () => {
        //alert("You continued");
        this.props.purchaseInitHandler();
        this.props.history.push({
            pathname: "/checkout",
            // search: this.parseQueryParam(),
        })
    }

    render() {

        const disabled = {
            ...this.props.ingredients,
        }

        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }

        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        let orderSummary = null;    

        if(this.props.ingredients) {
            burger = 
            <Auxilary>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls 
                isAuthenticated={this.props.isAuthenticated}
                ingredientAdded={this.props.addIngredientHandler}
                ingredientRemoved={this.props.removeIngredientHandler}
                disabled={disabled}
                price={this.props.totalPrice}
                purchaseable={this.updatePurchaseState(this.props.ingredients)}
                ordered={this.purchaseHandler}
                />  
            </Auxilary>

            orderSummary = <OrderSummary 
                ingredients={this.props.ingredients} 
                purchaseContinued={this.purchaseContinueHandler}
                purchaseCancelled={this.purchaseCancelHandler}
                price={this.props.totalPrice}/>
            
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        
        return (
            <Auxilary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxilary>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        totalPrice: state.burger.totalPrice,
        ingredients: state.burger.ingredients,
        error: state.burger.error,
        isAuthenticated: state.auth.tokenId !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredientHandler: (ingredient) => dispatch(actionTypes.addIngredient({ingredient: ingredient})),
        removeIngredientHandler: (ingredient) => dispatch(actionTypes.removeIngredient({ingredient: ingredient})),
        getIngredientFromDatabaseHandler: () => dispatch(actionTypes.initIngredients()),
        purchaseInitHandler: () => dispatch(actionTypes.purchaseInit()),
        setAuthRedirectPathHandler: (path) => dispatch(actionTypes.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));