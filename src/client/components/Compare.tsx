import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Moment from 'react-moment';

import Loading from '../components/Loading';
import apiService from '../utils/api-service';
import { IBrew, ICoffeeBag } from '../utils/types';
import BrewOutput from './BrewOutput';

const Compare = (props: CompareProps) => {
    const [compare, setCompare] = useState<Array<IBrew>>([]);
    const [control, setControl] = useState<number>(0);
    const [loading, setLoading] = useState<Boolean>(true);
    const [sourceId, setSourceId] = useState<number>(0);

    const [b, setB] = useState<IBrew>();
    const [ratio, setRatio] = useState<number>(0);
    const [grindLoss, setGrindLoss] = useState<number>(0);
    const [brewTime, setBrewTime] = useState<string>("0:00");
    const [bloomToBrewWeightPercent, setBloomToBrewWeightPercent] = useState<number>(0);
    const [bloomToBrewTimePercent, setBloomtoBrewTimePercent] = useState<number>(0);
    const [yeildPercent, setYeildPercent] = useState<number>(0);
    const [drawDown, setDrawDown] = useState<string>("0:00");
    const [drawDowntoBrewPercent, setDrawDowntoBrewPercent] = useState<number>();
    const [coffeeHeld, setCoffeeHeld] = useState<number>(0);
    const [theDelta, setTheDelta] = useState<number>(0);

    const match = props.sourceId;

    useEffect(() => {
        DBCalls();
    }, []);

    const DBCalls = async () => {
        const rList = await apiService("/api/brews/list/");
        setCompare(rList);
    }

    // This is a hack. Moment.JS produces Object Object inside of an <option> tag --
    const dateFormat = (x: any) => {
        return x.split("T")[0];
    }

    const hCompare = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setControl(Number(e.target.value));
        getControl(Number(e.target.value));
    }

    const getControl = async (id: number) => {
        setSourceId(id);
        const rDelta = await apiService("/api/brews/delta/" + id);
        setTheDelta(rDelta[0].delta);

        const rBrew = await apiService("/api/brews/details/" + id);
        if (rBrew.status === 418) { // I'm a Teapot! --
            const b: IBrew = rBrew.data[0]; // b is for Brew --S

            // Do Math with b --
            setBrewTime(Math.floor(b.brewtimeinsec / 60) + ":" + (b.brewtimeinsec % 60));

            const btbWeight = (b.bloomweight / b.brewtimeinsec * 100).toFixed(2);
            setBloomToBrewWeightPercent(Number(btbWeight));

            const btbTime = (b.bloomtimeinsec / b.brewtimeinsec * 100).toFixed(2);
            setBloomtoBrewTimePercent(Number(btbTime));

            const ytbWeight = (b.yeild / b.brewweight * 100).toFixed(2);
            setYeildPercent(Number(ytbWeight));

            const br = (b.brewweight / (b.gramspostgrind || b.gramspregrind)).toFixed(2);
            setRatio(Number(br));

            const held = (b.brewweight - b.yeild);
            setCoffeeHeld(Number(held));

            if (b.drawdownstart) {
                const drawDownDuration = b.brewtimeinsec - b.drawdownstart;
                const drawDownTimeFormat = Math.floor(drawDownDuration / 60) + ":" + (drawDownDuration % 60);

                setDrawDown(drawDownTimeFormat);
                setDrawDowntoBrewPercent(Number(((drawDownDuration / b.brewtimeinsec) * 100).toFixed(2)));
            }

            // Set b to State and Re-Render --
            setB(b);
            setLoading(false);
        }
    }

    if (control === 0) {
        return (
            <>
                <h4>Compare with...</h4>
                <select value={control} onChange={hCompare}>
                    <option value="0">Select a Brew...</option>
                    {compare?.map(brew => (
                        <option key={brew.id} value={brew.id} disabled={brew.id === match ? true : false}>
                            {dateFormat(brew._createdat)} - {brew.coffeename} - {brew.brewmethod}
                        </option>
                    ))}
                </select>
            </>
        )
    } else {
        return (
            <BrewOutput sourceId={sourceId} />
        );
    }
};

interface CompareProps {
    sourceId: number
}

export default Compare;