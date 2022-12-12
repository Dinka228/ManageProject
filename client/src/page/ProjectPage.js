import React, {useContext} from 'react';
import {
    MDBBadge, MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon, MDBInputGroup,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBTooltip,
} from "mdb-react-ui-kit";
import SideBar from "../component/projects/sideBar";
import {Context} from "../index";
import {useHistory} from "react-router-dom";
import TrItemForTasks from "../component/projects/TrItemForTasks";
import Forum from "../component/projects/forum";
import PersonalBoard from "../component/projects/personalBoard";
import {observer} from "mobx-react-lite";
import Diagrams from "../component/projects/diagrams";
import Customer from "../component/projects/customer";
const ProjectPage = observer(() => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
    return (

        <section >
            <MDBContainer className="py-5 h-100">
                <SideBar/>
                {projects.forumPage?
                    <Forum/>:<div></div>
                }
                {projects.profilePage ?
                    <PersonalBoard/>:<div></div>
                }
                {projects.diagramPage ?
                    <Diagrams/>:<div></div>
                }
                {projects.customer ?
                    <Customer/>:<div></div>
                }
                {projects.projectPage?
                    <MDBRow  className="d-flex justify-content-center align-items-center">
                        <MDBCol  md="12" xl="10">
                            <MDBCard className="mask-custom">
                                <MDBCardBody className="p-4 text-white">
                                    <div className="text-center pt-3 pb-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                                            alt="Check"
                                            width="60"
                                        />
                                        <h2 className="my-4" style={{color:"black"}}>Task List</h2>
                                    </div>
                                    <MDBTable className="text-white mb-0">
                                        <MDBTableHead>
                                            <tr>
                                                <th scope="col" style={{color:"black"}}>Team Member</th>
                                                <th scope="col" style={{color:"black"}}>Task</th>
                                                <th scope="col" style={{color:"black"}}>Progress</th>
                                                <th scope="col" style={{color:"black"}}>Priority</th>
                                                <th scope="col" style={{color:"black"}}>Actions</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {
                                                projects.tasks.map(task=><TrItemForTasks key={task.id} task={task}/>)
                                            }
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        {projects.currTask.name ?
                            <MDBCol  md="12" xl="10" className='mt-4'>
                                <MDBCard className="mask-custom">
                                    <MDBCardBody className="p-4 text-white">
                                        <div className="text-center pt-3 pb-2">

                                            <h2 className="my-4" style={{color:"black"}}>{projects.currTask.name}</h2>
                                        </div>
                                        <MDBInputGroup className='mb-3' textBefore='Team Member'>
                                            <input className='form-control' type='text'
                                                    value={user.user.filter(users=>{
                                                            if(+users.id === +projects.currTask.curatorId){
                                                                return users
                                                            }
                                                        }).map(userss => userss.name)}
                                            />
                                        </MDBInputGroup>

                                        <MDBInputGroup className='mb-3' size='lg' textBefore='Answer'>
                                            <input className='form-control' type='text'
                                                   value={projects.currTask.answer}
                                            />
                                        </MDBInputGroup>
                                        <MDBInputGroup className='mb-3' textBefore='DeadLine'>
                                            <input className='form-control' type='text'
                                                   value={projects.currTask.date}
                                            />
                                        </MDBInputGroup>
                                        <MDBBtn color={"success"}>Update</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            :<div></div>
                        }
                    </MDBRow>
                    :<div></div>
                }

            </MDBContainer>
        </section>
    );
});

export default ProjectPage;