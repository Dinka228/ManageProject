import React from 'react';
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {observer} from "mobx-react-lite";

const DiagramAboutCountTask = observer(({data}) => {
    console.log(data)
    return (
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" style={{fontSize:12}}/>
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="countTask" fill="#8884d8" barSize={30} />
        </BarChart>
    );
});

export default DiagramAboutCountTask;