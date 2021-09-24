import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {


    componentDidMount() {
        // const query = new URLSearchParams(this.props.location.search);
        // const tempIngredients = {};
        // let tempPrice;

        // for(let param of query.entries()) {
        //     if (this.props.ingredients.hasOwnProperty(param[0])) {
        //         tempIngredients[param[0]] = Number(param[1]);
        //     }
        //     if (param[0] === "totalPrice") {
        //         tempPrice = Number(param[1]);
        //     }

        // }


        // this.setState({
        //     ingredients: tempIngredients,
        //     totalPrice: tempPrice,
        // })

    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    render() {
        console.log("hello");
        let summary = <Redirect to="/"></Redirect>
        
        if (this.props.ingredients) {
            let purchasedRedirect = this.props.donePurchase ? <Redirect to="/"></Redirect> : null;

            summary = <div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.cancelCheckoutHandler}
                    checkoutContinued={this.continueCheckoutHandler} />
                <Route
                    path={this.props.match.path + "/contact-data"}
                    component={ContactData} />
            </div>
        }
        return summary;
        
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        donePurchase: state.order.donePurchase,
    }

}



export default connect(mapStateToProps)(Checkout);