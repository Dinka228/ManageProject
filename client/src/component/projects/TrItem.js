import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {MDBBtn} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {PROJECTS_PAGE_ROUTE} from "../../utils/consts";

const TrItem = observer(({project}) => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
    return (
        <tr>
            <td style={{cursor:"pointer"}} onClick={()=>{
                projects.setCurrProject(project)
                projects.setProjectPage(true)
                history.push(PROJECTS_PAGE_ROUTE+`/`+`${project.id}`)
            }}>{project.name}</td>
            <td>{project.progress}</td>
            {
                user.currUser.role === 'ADMIN' ?<td>
                    <MDBBtn type="submit" color="success" className="ms-1">
                        Finished
                    </MDBBtn>
                </td>:<div></div>
            }

            <td>
                {user.user.filter(users=>{
                    console.log(users)
                    if(+users.id === +project.curatorId){
                        return users
                    }
                }).map(userss =><div>{userss.name}</div>)}
            </td>
        </tr>
    );
});

export default TrItem;