import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {observer} from "mobx-react-lite";
let countInProgress = 0
let countComplete = 0
const DiagramAboutCountProgressComplete = observer(({data}) => {

    return (
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="count" fill="#8884d8" barSize={30} />
        </BarChart>

    );
});

export default DiagramAboutCountProgressComplete;