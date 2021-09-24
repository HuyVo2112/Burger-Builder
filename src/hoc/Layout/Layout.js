import React, {Component} from 'react';
import Auxilary from "../Auxilary/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import { connect } from "react-redux";
class Layout extends Component {  

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        })
    }

    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => ({
            showSideDrawer: !prevState.showSideDrawer,
        }))
    }

    render() {
        return (
            <Auxilary>
                <Toolbar  
                    isAuthenticated={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerOpenedHandler}/>
                <SideDrawer
                    isAuthenticated={this.props.isAuthenticated} 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilary>
        )
    }
    
    

}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.tokenId !== null,
    }
}

export default connect(mapStateToProps)(Layout);

