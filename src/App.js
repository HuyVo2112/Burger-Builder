import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout"
// import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Redirect, Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const AsyncBurgerBuilder = asyncComponent(() => {
  return import("./containers/BurgerBuilder/BurgerBuilder");
})


class App extends Component {

  componentDidMount() {
    this.props.authSetStateHandler();
  }

  render() {

    let routes = (
      <Switch> 
        <Route path="/auth" component={Auth}/>
        <Route path="/" exact component={AsyncBurgerBuilder}/>
        <Redirect to="/" />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>  
            <Route path="/auth" component={Auth}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/> 
            <Route path="/logout" component={Logout}/>
            <Route path="/" exact component={AsyncBurgerBuilder}/>
            <Redirect to="/" />
          </Switch>
      )
    }
    return (
      <div>
        <Layout style={{textAlign: "center"}}>
          {routes}
        </Layout>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.tokenId !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authSetStateHandler: () => dispatch(actions.authSetState()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
