/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadBoxes, updateBox, saveBox } from "./boxesSlice";
import { loadZones } from "./zonesSlice";
import BoxForm from './boxForm';
import BoxTable from './boxTable';

const Boxes = () => {
    const dispatch = useDispatch();
    const zonePage = useSelector((state) => state.entities.zones.page);
    const boxPage = useSelector((state) => state.entities.boxes.page);
    const paginate = useSelector((state) => state.pagination);
    const error = useSelector((state) => state.entities.boxes.error);
    const [box, setBox] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        dispatch(loadZones({ page: 1, limit: 100, sort: "name", order: "asc", param: "", }));
    },
        []);

    useEffect(() => {
        dispatch(loadBoxes(paginate));
    }, [paginate]);

    const handleSelect = async (sBox) => {
        setEdit(true);
        setBox({ zoneId: sBox.zone._id, ...sBox });
    };

    const handleClear = async () => {
        setEdit(false);
        setBox({ zoneId: "" });
    };

    const handleSubmit = async (event) => {
        if (edit) {
            dispatch(updateBox(box._id, event));
        } else {
            dispatch(saveBox(event));
        }
        setBox({});
    };

    return (<div className="grid grid-cols-1 md:grid-cols-3 m-3 gap-3">
        <div className="rounded-md">
            <BoxForm zonePage={zonePage} error={error} box={box} onSubmit={handleSubmit} onClear={handleClear} >
            </BoxForm>
        </div>

        <div className="md:col-span-2">
            <BoxTable boxPage={boxPage} select={handleSelect}></BoxTable>
        </div>
    </div>);
}

export default Boxes;