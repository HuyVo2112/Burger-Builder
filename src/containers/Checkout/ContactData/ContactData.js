import React, { Component} from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/index";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

class ContactData extends Component {
    state={
        orderForm: {
          
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
                    
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Street",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Zip Code",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Country",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },   
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your Email",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {value: "fastest", displayValue:  "Fastest"},
                        {value: "cheapest", displayValue:  "Cheapest"}
                    ]
                },
                value: "fastest"
            },
        },
        valid: false,
    }


    checkValidity (value, rules){
        let isValid = true;

        if (rules === undefined) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid; 
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid; 
        }

        return isValid;
    }

    onChangeHandler = (event, inputType) => {
        const tempOrderForm = {...this.state.orderForm};
        const tempOrderElement = {...tempOrderForm[inputType]}
        tempOrderElement.value = event.target.value;
        tempOrderElement.valid = this.checkValidity(tempOrderElement.value, tempOrderElement.validation);
        tempOrderElement.touched = true;
        
        
        tempOrderForm[inputType] = tempOrderElement;
        let formValid = true;
        for (let property in tempOrderForm) {
            if (tempOrderForm[property].hasOwnProperty("validation")) {
                formValid = tempOrderForm[property].valid && formValid;
            }
            
        }
        this.setState({
            orderForm: tempOrderForm,
            valid: formValid,
        })  
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        const formData = {};

        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value;
        }

        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice.toFixed(2),
            orderData: formData,
            userId: this.props.userId,
        }
        console.log(this.props.token);
        this.props.burgerSuccessHandler(order, this.props.token);
        
    }

    render() {

        const formElementsArray = [];

        for (let input in this.state.orderForm) {
            formElementsArray.push({
                id: input,
                config: this.state.orderForm[input]
            })
        }

        let content = <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>    
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(input => (
                    <Input 
                        key={input.id}
                        elementType={input.config.elementType}
                        elementConfig={input.config.elementConfig}
                        value={input.config.value}
                        onChangeHandler={(event) => this.onChangeHandler(event, input.id)}
                        shouldValidate={input.config.validation}
                        valid={input.config.valid}
                        touched={input.config.touched}/>
                ))}
                <Button disabled={!this.state.valid} btnType="Success">ORDER</Button>
            </form>
        </div>
        return ( 
            this.props.loading ? <Spinner  /> : content
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        loading: state.order.loading,
        token: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        burgerSuccessHandler: (orderData, token) => dispatch(actionTypes.purchaseBurger(orderData, token))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));