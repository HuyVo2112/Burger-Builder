import React, { Component } from "react";
import { Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.css";
import { Redirect } from "react-router-dom";

class Auth extends Component {

    state =  {
        controls: {
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Email",
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Password",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
            }
        },
        isSignup: true,
    }

    componentDidMount() {
        if (!this.props.building) {
            this.props.setAuthRedirectPathHandler();
        }
    }

    checkValidity (value, rules) {
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

        if (rules.isEmail) {
            let regEx = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
            isValid = regEx.test(value) && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid; 
        }

        return isValid;
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        })
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }

        this.setState({
            controls: updatedControls
        })
    } 

    submitHandler = (event) => {
        event.preventDefault();
        
        this.props.authHandler(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    } 

    render() {

        const formElementsArray = [];

        for (let input in this.state.controls) {
            formElementsArray.push({
                id: input,
                config: this.state.controls[input]
            })
        }

        let formElements = formElementsArray.map(input => (
            <Input 
                key={input.id}
                elementType={input.config.elementType}
                elementConfig={input.config.elementConfig}
                value={input.config.value}
                onChangeHandler={(event) => this.inputChangedHandler(event, input.id)}
                shouldValidate={input.config.validation}
                valid={input.config.valid}
                touched={input.config.touched}/>
        ))


        let errorMessage = null;

        if (this.props.error) {
            errorMessage = this.props.error.message;
        }

        if (this.props.loading) {
            formElements = <Spinner />
        }
        return (
            <div className={classes.Auth}>
                {console.log("hello2")}
                {console.log(this.props.isAuthenticated)}
                {this.props.isAuthenticated ? <Redirect to={this.props.authRedirectPath}/> : null} 
                <form onSubmit={this.submitHandler}>
                    {errorMessage}
                    {formElements}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button clicked={this.switchAuthModeHandler} btnType="Danger">SWITCH TO {this.state.isSignup ? "SIGN IN" : "SIGN UP"}</Button>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.tokenId !== null,
        building: state.burger.building,
        authRedirectPath: state.auth.authRedirectPath,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authHandler: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        setAuthRedirectPathHandler: () => dispatch(actions.setAuthRedirectPath("/")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);