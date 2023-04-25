import { Field } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Dropdown.module.css'
import { fetchCountries } from '../../../../../../api/api';
import { setCountry } from '../../../../../../redux/slices/ProfileInfo/demographics/countryOfResidenceSlice';

function CountryOfResidence({ formikProps }) {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countryOfResidence.countries);

    useEffect(() => { dispatch(fetchCountries()); }, [dispatch]);
    useEffect(() => { console.log(countries) }, [countries]);
    useEffect(() => { console.log('Selected Country:', formikProps.values.country); },
        [formikProps.values.country]);

    const handleCountryChange = (e) => {
        formikProps.setFieldValue('country', e.currentTarget.value);
        dispatch(setCountry(formikProps.values.country));
    };

    //You could also use formikProps.values.country to get the current value of the country field in
    // the formik form. However, formikProps.values.country would give you the old value of the country
    // field before the setFieldValue function updates it with the new selected value. Therefore,
    // e.currentTarget.value is used here to get the new selected value of the dropdown menu.

    return (
        <div className={classes.input}>
            <label className={classes.label}>Country of Residence</label>
            <Field
                className={classes.dropDown}
                as="select"
                name="country"
                id="country"
                value={formikProps.values.country}
                onChange={handleCountryChange}
            >
                {countries.map((country) => (
                    <option className={classes.option} key={country.id} value={country.name}>
                        {country.name}
                    </option>
                ))}
            </Field>
        </div>
    );
}

export default CountryOfResidence;