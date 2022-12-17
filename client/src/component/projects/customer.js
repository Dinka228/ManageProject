import React, {useContext, useEffect, useState} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody, MDBCardHeader, MDBCardImage, MDBCardText,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTable, MDBTableBody,
    MDBTableHead, MDBTextArea, MDBTypography
} from "mdb-react-ui-kit";
import TrItemForPersonalTasks from "./TrItemForPersonalTasks";
import {Context} from "../../index";
import TrItemForCustomer from "./TrItemForCustomer";
import {createMessage, fetchOneMessage} from "../../http/messageAPI";
import {fetchOneTask} from "../../http/taskAPI";
import {observer} from "mobx-react-lite";

const Customer = observer(() => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const [newMessage,setNewMessage] = useState({text:""})
    const [searchCheck,setSearchCheck]=useState("")
    useEffect(()=>{
        fetchOneTask(projects.currProject.id).then(data=>projects.setTasks(data))
    },[])
    function addNewMessage(){
        const newUMessage={
            ...newMessage

        }
        const formData = new FormData()
        formData.append('text',newUMessage.text)
        formData.append('creatorWorkerId',user.currUser.id)
        formData.append('gerWorkerId',user.currMessageUser.id)
        createMessage(formData).then(data=>{
            fetchOneMessage(user.currUser.id,user.currMessageUser.id).then(data=>projects.setMessage(data))
        })
        setNewMessage({text:''})

    }
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-between">
                    <MDBCol md={7}>
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <h4 className="text-center my-3 pb-3">Customer DashBoard</h4>
                                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <MDBCol size="12">
                                        <MDBInput
                                            label="Enter a task here"
                                            id="form1"
                                            type="text"
                                            onChange={e=>{
                                                setSearchCheck(e.target.value)
                                            }}
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBTable className="mb-4">
                                    <MDBTableHead>
                                        <tr>
                                            <th scope="col" style={{color:"black"}}>Team Member</th>
                                            <th scope="col" style={{color:"black"}}>Task</th>
                                            <th scope="col" style={{color:"black"}}>Progress</th>
                                            <th scope="col" style={{color:"black"}}>Priority</th>
                                            <th scope="col" style={{color:"black"}}>DeadLine</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                            projects.tasks.filter(taskFilter=>{
                                                if (searchCheck === "") {
                                                    return taskFilter
                                                } else if (searchCheck !== "") {
                                                    if (taskFilter.name.startsWith(searchCheck)) {
                                                        return taskFilter
                                                    }
                                                }
                                                else{
                                                    return taskFilter
                                                }
                                            }).map(task=>
                                                <TrItemForCustomer key={task.id} task={task}/>
                                            )

                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md={5} className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                  alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5" style={{color:"black"}}>{user.currUser.name}</MDBTypography>
                                    <MDBCardText style={{color:"black"}}>{user.currUser.role}</MDBCardText>
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Information</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Email</MDBTypography>
                                                <MDBCardText className="text-muted">{user.currUser.email}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Phone</MDBTypography>
                                                <MDBCardText className="text-muted">{user.currUser.telephone}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-between mt-4">
                    <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                        <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                            Contacts
                        </h5>

                        <MDBCard>
                            <MDBCardBody>
                                <MDBTypography listUnStyled className="mb-0">
                                    {
                                        user.user.filter(userFilter=>{
                                            if(userFilter.id !== user.currUser.id){
                                                if(userFilter.role === 'ADMIN' || +userFilter.id === +projects.currProject.curatorId){
                                                    return userFilter
                                                }
                                            }

                                        }).map(users=>
                                            <li
                                                className="p-2 border-bottom"
                                                style={{ backgroundColor: "#eee" }}

                                            >
                                                <a href="#!" className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="pt-1">
                                                            <p className="fw-bold mb-0">{users.name}</p>
                                                            <p className="small text-muted">
                                                                {users.role}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }
                                </MDBTypography>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                    {
                        user.currMessageUser.name ? <MDBCol md="6" lg="7" xl="8">
                            <div  style={{overflow:"scroll", maxHeight:400}}>
                                <MDBTypography listUnStyled>
                                    <h2>{user.currMessageUser.name ? user.currMessageUser.name : <div></div>}</h2>
                                    {
                                        projects.messages.filter(messageFilter=>{
                                            if(+messageFilter.creatorWorkerId === +user.currMessageUser.id || +messageFilter.gerWorkerId === +user.currMessageUser.id){
                                                return messageFilter
                                            }
                                        }).map(message=>
                                            <li className="d-flex justify-content-between mb-4">
                                                {
                                                    <MDBCard>
                                                        <MDBCardHeader className="d-flex justify-content-between p-3">
                                                            <p className="fw-bold mb-0">{user.user.filter(users=>{
                                                                if(+users.id === +message.creatorWorkerId){
                                                                    return users
                                                                }
                                                            }).map(userss => <div>{userss.name}</div>)}</p>
                                                        </MDBCardHeader>
                                                        <MDBCardBody>
                                                            <p className="mb-0">
                                                                {message.text}
                                                            </p>
                                                        </MDBCardBody>
                                                    </MDBCard>

                                                }

                                            </li>
                                        )
                                    }


                                </MDBTypography>
                            </div>
                            <li className="bg-white mb-3">
                                <MDBTextArea label="Message" id="textAreaExample" rows={4}
                                             value={newMessage.text}
                                             onChange={e=>setNewMessage({...newMessage, text: e.target.value})}
                                />
                            </li>
                            <MDBBtn color="info" rounded className="float-end" onClick={()=>{
                                addNewMessage()
                            }}>
                                Send
                            </MDBBtn>
                        </MDBCol> : <div></div>
                    }


                </MDBRow>
            </MDBContainer>
        </section>
    );
});

export default Customer;