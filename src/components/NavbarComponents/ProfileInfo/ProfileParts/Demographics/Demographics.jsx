import React from 'react';
import { Formik, Form } from 'formik';
import classes from './Demographics.module.css';
import Gender from '../Demographics/Gender/Gender';
import CountryOfResidence from "./CountryOfResidence/CountryOfResidence";
import CityOfResidence from "./CityOfResidence/CityOfResidence";

export function Demographics() {
    return (
        <div className={classes.demographics}>
            <h2 className={classes.header}>Demographics</h2>
            <Formik
                initialValues={{
                    gender: '',
                    country: '',
                    city: ''
                }}
            >
                {(formikProps) => (
                    <Form>
                        <div className={classes.form}>
                            <Gender formikProps={formikProps} />
                            <CountryOfResidence formikProps={formikProps} />
                            <CityOfResidence formikProps={formikProps} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}