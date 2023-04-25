import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../../redux/slices/Header/ToggleLanguage/ToggleLanguageSlice";
// импортирует экшен из слайса
import classes from "./ToggleLanguage.module.css";

export function ToggleLanguage() {
    const dispatch = useDispatch(); // получает доступ к функции диспатча экшенов из Redux-стора.
    //Этот хук возвращает ссылку на функцию отправки из хранилища Redux
    const activeButton = useSelector((state) => state.language.activeButton);
    //получает значение активной кнопки языка из Redux-стора
     //для получения значения свойства activeButton из состояния Redux
    // и сохранения его в локальной переменной activeButton.
    // Далее, значение этой переменной используется для определения, какая кнопка языка должна быть отображена
    // в активном состоянии.

    const handleToggle = (lang) => {
        dispatch(toggleLanguage(lang));
    };
    // диспатчит экшен creator toggleLanguage с переданным языком при клике на кнопке языка.

    return (
        <div className={classes.switchLanguage}>
                <button className={activeButton === "Eng" ? classes.active : ''}
                        hi
                    onClick={() => handleToggle("Eng")}>
                    {/*функция, которая принимает параметр lang и вызывает dispatch с аргументом toggleLanguage(lang). */}
                    {/*Это функция-обработчик, которая будет вызываться при нажатии на кнопки переключения языка.*/}
                    Eng
                </button>

                <button className={activeButton === "Rus" ? classes.active : ''}
                    onClick={() => handleToggle("Rus")}>
                    Rus
                </button>
        </div>
    );
}
