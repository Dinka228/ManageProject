import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody, MDBCardImage, MDBCardText,
    MDBCheckbox,
    MDBCol,
    MDBContainer, MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow, MDBTable, MDBTableBody, MDBTableHead,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane, MDBTypography,
} from "mdb-react-ui-kit";
import {observer} from "mobx-react-lite";
import TrItem from "./TrItem";
import {Context} from "../../index";
import TrItemForTasks from "./TrItemForTasks";
import TrItemForPersonalTasks from "./TrItemForPersonalTasks";

const PersonalBoard = observer(() => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-between">
                    <MDBCol md={7}>
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <h4 className="text-center my-3 pb-3">My Tasks</h4>
                                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <MDBCol size="12">
                                        <MDBInput
                                            label="Enter a task here"
                                            id="form1"
                                            type="text"
                                        />
                                    </MDBCol>
                                    <MDBCol size="12">
                                        <MDBBtn type="submit">Search</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBTable className="mb-4">
                                    <MDBTableHead>
                                        <tr>
                                            <th scope="col" style={{color:"black"}}>Task</th>
                                            <th scope="col" style={{color:"black"}}>Progress</th>
                                            <th scope="col" style={{color:"black"}}>Priority</th>
                                            <th scope="col" style={{color:"black"}}>DeadLine</th>
                                            <th scope="col" style={{color:"black"}}>Actions</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                            projects.tasks.filter(taskFilter=>{
                                                if(+taskFilter.curatorId === +user.currUser.id){
                                                    return taskFilter
                                                }
                                            }).map(task=>
                                                <TrItemForPersonalTasks key={task.id} task={task}/>
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
            </MDBContainer>
        </section>
    );
});

export default PersonalBoard;