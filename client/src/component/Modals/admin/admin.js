import React, {useContext} from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Form} from "react-bootstrap";
import {Context} from "../../../index";

const Admin = ({show,onHide}) => {
    const {projects} = useContext(Context)
    return (
        <div>
            <>
                <MDBModal
                    staticBackdrop
                    tabIndex="-1"
                    show={show}
                    onHide={onHide}
                >
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Admin panel</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody className='d-flex justify-content-between'>
                                <MDBBtn onClick={()=>{
                                    projects.setShowCreateProject(true)
                                    projects.setShowAdmin(false)
                                }}>
                                    Create Project
                                </MDBBtn>
                                <MDBBtn onClick={()=>{
                                    projects.setShowCreateUser(true)
                                    projects.setShowAdmin(false)
                                }}>
                                    Create new User
                                </MDBBtn>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={()=>{
                                    onHide()
                                }}>
                                    Close
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
        </div>
    );
};

export default Admin;