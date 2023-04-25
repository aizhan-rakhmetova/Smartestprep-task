import React from 'react';
import classes from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
//для отправки действий в Redux-хранилище, и useSelector для извлечения данных из хранилища.
import { setName, setSurname } from '../../../../../redux/slices/ProfileInfo/profileSlice';
//импорт двух action creators

export function Profile() {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.profile.name);
    const surname = useSelector((state) => state.profile.surname);

    const handleNameChange = (e) => {
        dispatch(setName(e.currentTarget.value));
        console.log('Name:', e.currentTarget.value)
    };

    const handleSurnameChange = (e) => {
        dispatch(setSurname(e.currentTarget.value));
        console.log('Surname:', e.currentTarget.value)
    };

    return (
        <div className={classes.profile}>
            <h2 className={classes.header}>Profile</h2>
            <form className={classes.form}>
                <div className={classes.profileInput}>
                    <label className={classes.label}>Name</label>
                    <input className={classes.input}
                           id="name-input"
                           placeholder="Ivanov"
                           name="name"
                           value={name}
                           onChange={handleNameChange}
                    />
                </div>

                <div className={classes.profileInput}>
                    <label className={classes.label}>Surname</label>
                    <input className={classes.input}
                           id="surname-input"
                           placeholder="Ivan"
                           name="surname"
                           value={surname}
                           onChange={handleSurnameChange}
                    />
                </div>
            </form>
        </div>
    );
}