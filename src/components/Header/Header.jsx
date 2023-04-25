import React from 'react';
import {ToggleLanguage} from "./ToggleLanguage/ToggleLanguage";
import user from "../../assets/Header/User.svg"
import classes from './Header.module.css'
import logo from "../../assets/Sidebar/Logo.svg";

export function Header() {
    return (
        <header className={classes.headerWrapper}>
            <div className={classes.wrapper}>

                <div className={classes.logo}>
                    <a><img src={logo} alt="logo"/></a>
                </div>
                hi

                <div className={classes.rightPartElements}>
                    <button className={`$classes.button $classes.blogButton`}>Blog</button>
                    <button className={`$classes.button $classes.blogButton`}>Useful Resources</button>
                    <ToggleLanguage/>
                    <button><img className={classes.user} src={user} alt="user"/></button>
                </div>

            </div>
        </header>
    );
}
