import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Auxilary from "../../../hoc/Auxilary/Auxilary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {

    const someClasses = [classes.SideDrawer];


    if (props.open) {
        someClasses.push(classes.Open);
    } else {
        someClasses.push(classes.Close);
    }

    return (
        <Auxilary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={someClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
            
                <nav>
                    <NavigationItems clicked={props.closed}/>
                </nav>
            </div>
        </Auxilary>
        
    );
}

export default SideDrawer;