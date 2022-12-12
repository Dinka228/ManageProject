import React, {useContext} from 'react';
import {MDBBadge, MDBBtn} from "mdb-react-ui-kit";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";

const TrItemForCustomer = observer(({task}) => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
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
                <span style={{color:"black"}}>{task.date}</span>
            </td>
        </tr>
    );
});

export default TrItemForCustomer;