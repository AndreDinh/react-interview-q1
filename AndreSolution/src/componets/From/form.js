import React, { useState, useEffect } from 'react';
import { isNameValid, getLocations } from '../../mock-api/apis';
import './FormStyles.css';

export default function Form() {
    const [formData, setFormData] = useState({ name: '', country: '' });
    const [countries, setCountries] = useState([]);
    const [table, setTable] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        getLocations().then(setCountries);
    }, []);


    useEffect(() => {
        const validate = async () => {
            if (formData.name) {
                try {
                    const isValid = await isNameValid(formData.name);
                    if (!isValid) {
                        setError('This name has already been taken');
                    } else {
                        setError('');
                    }
                } catch (error) {
                    console.error('Error validating name:', error);
                    setError('Error in validating name');
                }
            } else {
                setError('');
            }
        };

        validate();
    }, [formData.name]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const submitNameAndCountry = () => {
        if (!error && formData.name && formData.country) {
            setTable((prevTable) => [...prevTable, formData]);
        }
    };

    return (
        <div>
            <form className="form-container">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                {error && <p className="error">{error}</p>}

                <div className="form-group">
                    <label htmlFor="country">Location</label>
                    <select
                        id="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    >
                        {countries.map((countryOption, index) => (
                            <option key={index} value={countryOption}>
                                {countryOption}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="button-container">
                    <button type="button" onClick={() => setTable([])} className="clear-btn">
                        Clear
                    </button>
                    <button type="button" onClick={submitNameAndCountry} className="add-btn">
                        Add
                    </button>
                </div>
            </form>

            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="name-header">Name</th>
                            <th className="location-header">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
