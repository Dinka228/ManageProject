import React, {useContext, useEffect} from 'react';
import {Context} from "../../../index";
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import {observer} from "mobx-react-lite";
let countInProgress = 0
let countComplete = 0
const DiagramAboutCountProgressComplete = observer(() => {
    const {projects} = useContext(Context)
    const dataGraphic = []
    const dataProgress = [
        {name: 'In Progress', count: 0},
        {name: 'Finished', count: 0}
    ];
    projects.tasks.filter(task=>{
        if(+task.projectId === +projects.currProject.id){
            if(task.progress === 'In Progress'){
                dataProgress[0].count++
            }
            else if(task.progress === 'Finished'){
                dataProgress[1].count++
            }
            console.log(dataGraphic)
        }
    })
    return (
        <BarChart width={600} height={300} data={dataProgress}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="count" fill="#8884d8" barSize={30} />
        </BarChart>

    );
});

export default DiagramAboutCountProgressComplete;