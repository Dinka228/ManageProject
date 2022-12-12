import React, {useContext, useEffect, useState} from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import DiagramAboutCountProgressComplete from "./diagrams/diagramAboutCountProgressComplete";
import DiagramAboutCountTask from "./diagrams/diagramAboutCountTask";
let countInProgress = 0
let countComplete = 0
const Diagrams = observer(() => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    useEffect(()=>{
        projects.tasks.filter(task=>{
            if(task.progress === 'In Progress'){
                countInProgress++
            }
            else{
                countComplete++
            }
        })
    })


    const dataProgress = [
        {name: 'In Progress', count: countInProgress},
        {name: 'Complete', count: countComplete}
    ];
    const dataTask = user.user
    return (
        <MDBContainer>
            <MDBRow md={12}>
                <MDBCol md={6}>
                    <h2 className='d-flex justify-content-center align-items-center'>CountProgress</h2>
                    <DiagramAboutCountProgressComplete data={dataProgress}/>
                </MDBCol>
                <MDBCol md={6}>
                    <h2 className='d-flex justify-content-center align-items-center'>CountTask</h2>
                    <DiagramAboutCountTask data={dataTask}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
});

export default Diagrams;