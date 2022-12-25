import React, {useContext, useEffect, useState} from 'react';
import {
    MDBBadge, MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon, MDBInput, MDBInputGroup,
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
import CreateTask from "../component/Modals/admin/createTask";
import {fetchProject} from "../http/projectAPI";
import {createTask, fetchOneTask, updateTask} from "../http/taskAPI";
import {Dropdown, Form} from "react-bootstrap";
const ProjectPage = observer(() => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
    const [searchCheck,setSearchCheck]=useState("")
    const [updateTaskInfo, setUpdateTaskInfo] = useState({curatorId:"",answer:''})
    const [selectedPeople,setSelectedPeople]=useState("")
    useEffect(()=>{
        fetchOneTask(projects.currProject.id).then(data=>projects.setTasks(data))
    },[])
    useEffect(()=>{
            console.log('SHOW')
            setUpdateTaskInfo({...updateTaskInfo, answer: projects.currTask.answer,curatorId:projects.currTask.curatorId})
    },[projects.currTask.name])

    function updateTaskFunc(){
        console.log(updateTaskInfo)
        const newUTask = {
            ...updateTaskInfo, taskId:projects.currTask.id
        }
        const task = async ()=>{
            await updateTask(newUTask)
            fetchOneTask(projects.currProject.id).then(data=>projects.setTasks(data))
        }
        task()
        setUpdateTaskInfo({curatorId:'',answer:projects.currTask.answer})
        setSelectedPeople("")
        projects.setCurrTask({})
    }
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
                                        {
                                            user.currUser.role === 'ADMIN' ? <MDBBtn onClick={()=>{
                                                projects.setShowCreateTask(true)
                                            }
                                            }>
                                                Create Task
                                            </MDBBtn> : <div></div>
                                        }

                                    </div>
                                    <MDBTable className="text-white mb-0">
                                        <MDBTableHead>
                                            <tr>
                                                <th scope="col" style={{color:"black"}}>Team Member</th>
                                                <th scope="col" style={{color:"black"}}>Task</th>
                                                <th scope="col" style={{color:"black"}}>Progress</th>
                                                <th scope="col" style={{color:"black"}}>Priority</th>
                                                {
                                                    +projects.currProject.curatorId === +user.currUser.id || user.currUser.role === 'ADMIN'
                                                        ?
                                                        <th scope="col" style={{color:"black"}}>Actions</th>
                                                        :
                                                        <div></div>
                                                }


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
                                            <h3 style={{color:"black"}}>Team Member</h3>
                                            <Dropdown className='mt-3 mb-3'>
                                                <Dropdown.Toggle> {
                                                    user.user.filter(users=>{
                                                    if(+users.id === +projects.currTask.curatorId){
                                                        return users
                                                    }
                                                }).map(userss =>selectedPeople === '' ? userss.name : selectedPeople)}</Dropdown.Toggle>
                                                {
                                                    user.currUser.role === 'Customer' ?
                                                        <Dropdown.Menu>
                                                            {user.user.map(users=>
                                                                <Dropdown.Item
                                                                    onClick={e=>{
                                                                        setSelectedPeople(users.name)
                                                                        setUpdateTaskInfo({...updateTaskInfo, curatorId: users.id})
                                                                    }}
                                                                    key={users.id}
                                                                >
                                                                    {users.name}
                                                                </Dropdown.Item>
                                                            )}
                                                        </Dropdown.Menu> : <div></div>
                                                }

                                            </Dropdown>

                                        <Form.Control
                                            value={updateTaskInfo.answer}
                                            onChange={e=>setUpdateTaskInfo({...updateTaskInfo, answer: e.target.value})}
                                            className='mt-3'
                                            placeholder={"Enter answer"}
                                        />
                                        {
                                            user.currUser.role === 'Customer'
                                            ?
                                                <MDBBtn color={"success"} onClick={()=>{updateTaskFunc()}}>
                                                    Update
                                                </MDBBtn>
                                                : <div></div>
                                        }

                                    </MDBCardBody>

                                </MDBCard>
                            </MDBCol>
                            :<div></div>
                        }
                    </MDBRow>
                    :<div></div>
                }
            <CreateTask show={projects.showCreateTask} onHide={()=>{
                projects.setShowCreateTask(false)
            }}/>
            </MDBContainer>
        </section>
    );
});

export default ProjectPage;