import React, {useContext, useEffect, useState} from 'react';
import {PROJECTS_PAGE_ROUTE} from "../../utils/consts";
import {MDBBadge, MDBBtn} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {finishTask, finishTaskUser} from "../../http/taskAPI";

const TrItemForPersonalTasks = ({task}) => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
    const [colorProgress,setColorProgress] = useState('none')
    const [colorPriority,setColorPriority] = useState('none')
    return (
        <tr className="fw-normal">
            <td className="align-middle">
                <span style={{color:"black"}}>{task.name}</span>
            </td>
            <td className="align-middle">
                <h6 className="mb-0">
                    {
                        task.progress === 'In Progress' ?
                            <MDBBadge className="mx-2" color="secondary">
                                {task.progress}
                            </MDBBadge>
                            :
                            <MDBBadge className="mx-2" color="success">
                                {task.progress}
                            </MDBBadge>
                    }
                </h6>
            </td>
            <td className="align-middle">
                <h6 className="mb-0">
                    {
                        task.priority === 'High priority' ?
                            <MDBBadge className="mx-2" color="danger">
                                {task.priority}
                            </MDBBadge>
                            :
                            <MDBBadge className="mx-2" color="success">
                                {task.priority}
                            </MDBBadge>
                    }

                </h6>
            </td>
            <td className="align-middle">
                <span style={{color:"black"}}>{task.date}</span>
            </td>
            <td className="align-middle">
                <MDBBtn type="submit" color="success" className="ms-1" onClick={()=>{
                    finishTaskUser(task.id,user.currUser.id).then(data=>projects.setTasks(data))
                }}>
                    Finished
                </MDBBtn>
            </td>
        </tr>
    );
};

export default TrItemForPersonalTasks;