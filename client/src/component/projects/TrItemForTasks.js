import React, {useContext, useEffect, useState} from 'react';
import {PROJECTS_PAGE_ROUTE} from "../../utils/consts";
import {MDBBadge, MDBBtn} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";

const TrItemForTasks = observer(({task}) => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
    const [colorProgress,setColorProgress] = useState('none')
    const [colorPriority,setColorPriority] = useState('none')

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2" style={{color:"black"}}>{user.user.filter(users=>{
                    if(+users.id === +task.curatorId){
                        return users
                    }
                }).map(userss => <div>{userss.name}</div>)}</span>
            </th>
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
                <MDBBtn type="submit" color="danger">
                    Delete
                </MDBBtn>
                <MDBBtn type="submit" className="ms-1" color="secondary" onClick={()=>{
                    projects.setCurrTask(task)
                }}>
                    Show
                </MDBBtn>
                <MDBBtn type="submit" color="success" className="ms-1">
                    Finished
                </MDBBtn>
            </td>
        </tr>
    );
});

export default TrItemForTasks;