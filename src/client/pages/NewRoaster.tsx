import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Nav from '../components/Nav';
import apiService from '../utils/api-service';
import { IOption } from '../utils/types';

const NewFilter = (props: NewFilterProps) => {
    const [theBrand, setTheBrand] = useState<string>('');

    const history = useHistory();

    useEffect(() => {

    }, []);

    const hTheBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheBrand(e.target.value);
    }

    const verifyRoaster = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const r = await apiService("/api/roasters/new", "POST", { brand: theBrand });
        console.log(theBrand);
        console.log(r);
        if (r) history.push('/coffeebags/new');
    }

    return (
        <>
            <Nav />
            <h1>Add New Coffee Roaster</h1>
            <form className="d-flex flex-column">
                <input type="text" placeholder="Coffee Company" value={theBrand} onChange={hTheBrand}></input>
                <button className="btn btn-primary" onClick={verifyRoaster}>Submit Filter</button>
            </form>
        </>
    );
};

interface NewFilterProps { }

export default NewFilter;
