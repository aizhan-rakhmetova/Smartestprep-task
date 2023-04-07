import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';
import dashboard from '../../assets/Sidebar/Vector.svg'
import profile from '../../assets/Sidebar/Vector-2.svg'
import recommendations from '../../assets/Sidebar/Vector-3.svg'
import catalog from '../../assets/Sidebar/Vector-4.svg'
import saved from '../../assets/Sidebar/Vector-5.svg'
import applications from '../../assets/Sidebar/Vector-6.svg'
import learningPlatform from '../../assets/Sidebar/Vector-7.svg'


export function Navbar() {
    return (
        <nav className={classes.nav}>
                <div className={classes.oneLink}>
                    <NavLink to="/dashboard" className={navData => navData.isActive ? classes.active : classes.item}>
                        <img src={dashboard} alt={"dashboard"}/>
                        Dashboard</NavLink>
                </div>
                <div className={classes.twoLink}>
                    <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>
                        <img src={profile} alt={"profile"}/>
                        Profile</NavLink>
                </div>
                <div className={classes.threeLink}>
                    <NavLink to="/recommendations"
                             className={navData => navData.isActive ? classes.active : classes.item}>
                        <img src={recommendations} alt={"recommendations"}/>
                        Recommendations</NavLink>
                </div>
                <div className={classes.fourLink}>
                    <NavLink to="/catalog" className={navData => navData.isActive ? classes.active : classes.item}>
                        <img src={catalog} alt={"catalog"}/>
                        Catalog</NavLink>
                </div>
                <div className={classes.fiveLink}>
                    <NavLink to="/saved" className={navData => navData.isActive ? classes.active : classes.item}>
                        <img src={saved} alt={"saved"}/>
                        Saved</NavLink>
                </div>
                <div className={classes.sixLink}>
                    <NavLink to="/applications" className={navData => navData.isActive ? classes.active : classes.item}>
                        <img src={applications} alt={"applications"}/>
                        Applications</NavLink>
                </div>

                <div className={classes.divider}></div>

                <div className={classes.sevenLink}>
                    <NavLink to="/learning-platform"
                             className={navData => navData.isActive ? classes.active : classes.item}>
                        <img src={learningPlatform} alt={"learningPlatform"}/>
                        Learning Platform</NavLink>
                </div>
        </nav>
    );
}