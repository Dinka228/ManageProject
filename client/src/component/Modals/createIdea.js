import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBContainer,
} from "mdb-react-ui-kit";
import {Form} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createTask} from "../../http/taskAPI";
import {createIdea, fetchIdea} from "../../http/ideaAPI";


const CreateIdea = observer(({show,onHide}) => {
    const [newIdea, setNewIdea] = useState({name:''})
    const [selectPeople,setSelectPeople] = useState({})
    const {projects} = useContext(Context)
    const {user} = useContext(Context)
    function addNewIdea()   {
        const newUIdea={
            ...newIdea,id:Date.now(),creatorId:user.currUser.id

        }
        const formData = new FormData()
        formData.append('name',newUIdea.name)
        formData.append('creatorId',user.currUser.id)
        createIdea(formData).then(data=>{
            fetchIdea().then(data=>projects.setIdea(data))
            onHide()
        })
        setNewIdea({name:''})
        onHide()

    }
    return (
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
                            <MDBModalTitle>Creating idea...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                <Form.Control
                                    value={newIdea.name}
                                    onChange={e=>setNewIdea({...newIdea, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Enter idea"}
                                />
                            </Form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                addNewIdea()
                            }}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default CreateIdea;