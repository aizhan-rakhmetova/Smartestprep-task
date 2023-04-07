import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../../redux/slices/Header/ToggleLanguage/ToggleLanguageSlice";
import classes from "./ToggleLanguage.module.css";

export function ToggleLanguage() {
    const dispatch = useDispatch();
    const activeButton = useSelector((state) => state.language.activeButton);

    const handleToggle = (lang) => {
        dispatch(toggleLanguage(lang));
    };

    return (
        <div className={classes.switchLanguage}>
                <button className={activeButton === "Eng" ? classes.active : ''}
                    onClick={() => handleToggle("Eng")}>
                    Eng
                </button>

                <button className={activeButton === "Rus" ? classes.active : ''}
                    onClick={() => handleToggle("Rus")}>
                    Rus
                </button>
        </div>
    );
}
