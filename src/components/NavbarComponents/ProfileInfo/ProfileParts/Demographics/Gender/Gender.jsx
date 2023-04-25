import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { setGender } from '../../../../../../redux/slices/ProfileInfo/demographics/genderSlice';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 0px',
    },
    label: {
        marginBottom: '5px',
        color: '#51606F',
        fontWeight: 400,
        fontSize: '14px'
    },
    dropDown: {
        border: 'none',
        width: '343px',
        borderRadius: '12px',
        padding: '10px',
        background: '#E8F2FF',
        color: '#000000',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '400',
        outline: 'none',

        '&:focus': {
            borderColor: '#2e84f1',
        },
        '&:before, &:after': {
            border: 'none'
        }
    },

    option: {
        background: '#FFFFFF',
        color: '#51606F',
        fontSize: '16px'
    },
    customOption: {
        color: '#51606F',
        fontStyle: 'italic',
    },
}));

function Gender({ formikProps }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (formikProps.values.gender !== '') {
            dispatch(setGender(formikProps.values.gender));
            console.log('Gender:', formikProps.values.gender);
        }
    }, [formikProps.values.gender, dispatch]);

    return (
        <div className={classes.input}>
            <FormControl className={classes.formControl}>
                <InputLabel className={classes.label} shrink id="gender-select-label">Gender</InputLabel>
                <Field as={Select} labelId="gender-select-label" id="gender-select" name="gender"
                       className={classes.dropDown}>
                    <MenuItem className={`${classes.option} ${classes.customOption}`} value="">
                        Select
                    </MenuItem>
                    <MenuItem className={classes.option} value="male">
                        Male
                    </MenuItem>
                    <MenuItem className={classes.option} value="female">
                        Female
                    </MenuItem>
                </Field>
            </FormControl>
        </div>
    );
}

export default Gender;

// Когда пользователь выбирает значение из выпадающего списка, Field обрабатывает это значение и сохраняет его внутри
// объекта formikProps.values.gender, который представляет значения всех полей формы, связанных с компонентом Formik.
//
//     Таким образом, при отправке данных формы на сервер, значения всех полей формы, включая gender, будут переданы
// вместе с запросом.
