import React, {useContext, useState} from 'react';
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
import {Dropdown, Form} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {Context} from "../../../index";
import {registration} from "../../../http/userAPI";
import {createProject, fetchProject} from "../../../http/projectAPI";

const CreateProject = ({show,onHide}) => {
    const [newProject, setNewProject] = useState({name:''})
    const [selectPeople,setSelectPeople] = useState({})
    const [selectCustomerPeople,setSelectCustomerPeople] = useState({})
    const {projects} = useContext(Context)
    const {user} = useContext(Context)
    function addNewGoodsFunc() {
        const newUProject = {
            ...newProject,curatorId: selectPeople.id,customerId:selectCustomerPeople.id
        }
        const proj = async ()=>{
            const response = await createProject(newUProject)
            fetchProject().then(data=>projects.setProject(data))
            console.log(response)
        }
        proj()
        setNewProject({name:''})
        setSelectPeople({})
        setSelectCustomerPeople({})
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
                            <MDBModalTitle>Creating project...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                <Form.Control
                                    value={newProject.name}
                                    onChange={e=>setNewProject({...newProject, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Введіть назву"}
                                />
                                <Dropdown className='mt-3'>
                                    <Dropdown.Toggle> {selectPeople.name || "Виберіть відповідного за проєкт"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {user.user.filter(userFilter=>{
                                            if(userFilter.role === 'Senior'){
                                                return userFilter
                                            }
                                        }).map(users=>
                                            <Dropdown.Item
                                                onClick={()=>{
                                                    setSelectPeople(users)
                                                }}
                                                key={users.id}
                                            >
                                                {users.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className='mt-3'>
                                    <Dropdown.Toggle> {selectCustomerPeople.name || "Виберіть замовника"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {user.user.filter(userFilter=>{
                                            if(userFilter.role === 'Customer'){
                                                return userFilter
                                            }
                                        }).map(users=>
                                            <Dropdown.Item
                                                onClick={()=>{
                                                    setSelectCustomerPeople(users)
                                                }}
                                                key={users.id}
                                            >
                                                {users.name}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Close
                            </MDBBtn>
                            <MDBBtn onClick={()=>{
                                addNewGoodsFunc()
                            }}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default CreateProject;