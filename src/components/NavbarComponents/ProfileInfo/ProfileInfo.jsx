import React from 'react';
import {Profile} from "./ProfileParts/Profile/Profile";
import {Demographics} from "./ProfileParts/Demographics/Demographics";
import {Activities} from "./ProfileParts/Activities/Activities";
import classes from './ProfileInfo.module.css'


export function ProfileInfo() {
    return (
        <div className={classes.profileInfo}>
            <Profile />
            <Demographics/>
            <Activities/>
        </div>
    );
}

