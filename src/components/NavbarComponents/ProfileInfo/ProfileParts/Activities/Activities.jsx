import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import classes from './Activities.module.css';
import { addActivity } from '../../../../../redux/slices/ProfileInfo/addActivitySlice';

export const Activities = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        dispatch(addActivity(values));
        resetForm();
    };
    return (
        <div className={classes.activities}>
            <h2 className={classes.header}>Activities</h2>
            <Formik
                initialValues={{
                    activityType: '',
                    tier: 'exceptional',
                    activityName: '',
                    description: '',
                }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <div className={classes.form}>
                            <div className={classes.line}>
                                <p className={classes.title}>Activity type</p>
                                <div className={classes.labels}>
                                    <label className={classes.label}>
                                        <Field
                                            className={classes.radioButton}
                                            type="radio"
                                            name="activityType"
                                            value="extracurriculars"
                                            checked={values.activityType === 'extracurriculars'}
                                            onChange={handleChange}
                                        />
                                        Extracurriculars
                                    </label>
                                    <label className={classes.label}>
                                        <Field
                                            className={classes.radioButton}
                                            type="radio"
                                            name="activityType"
                                            value="honors"
                                            checked={values.activityType === 'honors'}
                                            onChange={handleChange}
                                        />
                                        Honors
                                    </label>
                                </div>
                            </div>

                            <div className={classes.line}>
                                <label className={classes.title} htmlFor="tier-select">Tier</label>
                                <Field
                                    className={classes.tierLine}
                                    as="select"
                                    id="tier-select"
                                    name="tier"
                                    value={values.tier}
                                    onChange={handleChange}
                                >
                                    <option className={classes.tierOption} value="exceptional">1 — Exceptional</option>
                                </Field>
                            </div>

                            <div className={classes.line}>
                                <label className={classes.title} htmlFor="activity-name-input">Activity name</label>
                                <Field
                                    className={classes.activityInput}
                                    id="activity-name-input"
                                    name="activityName"
                                    placeholder="Enter a name of activity"
                                />
                            </div>

                            <div className={classes.line}>
                                <label className={classes.title} htmlFor="description-input">Description</label>
                                <Field
                                    className={classes.descriptionInput}
                                    id="description-input"
                                    name="description"
                                    placeholder="Enter a description of activity"
                                />
                            </div>

                            <div className={classes.button}>
                                <button type="submit"><p className={classes.buttonText}>+ Add Activity</p></button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};