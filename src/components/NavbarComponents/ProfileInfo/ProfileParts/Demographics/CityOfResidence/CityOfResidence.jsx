import { Field } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Dropdown.module.css'
import { fetchCities } from '../../../../../../api/api';
import {setCity} from "../../../../../../redux/slices/ProfileInfo/demographics/cityOfResidenceSlice";

function CityOfResidence({ formikProps }) {
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.cityOfResidence.cities);

    useEffect(() => { dispatch(fetchCities()); }, [dispatch]);
    useEffect(() => { console.log(cities) }, [cities]);

    useEffect(() => {
        console.log('Selected City:', formikProps.values.city);
    }, [formikProps.values.city]);

    const handleCityChange = (e) => {
        formikProps.setFieldValue('city', e.currentTarget.value);
        dispatch(setCity(e.currentTarget.value));
    };

    return (
        <div className={classes.input}>
            <label className={classes.label}>City of Residence</label>
            <Field
                className={classes.dropDown}
                as="select"
                name="city"
                id="city"
                value={formikProps.values.city}
                onChange={handleCityChange}
            >
                {cities.map((city) => (
                    <option className={classes.option} key={city.id} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </Field>
        </div>
    );
}

export default CityOfResidence;