import React, {useContext, useEffect, useState} from 'react';
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
import {observer} from "mobx-react-lite";
import {createProject} from "../../../http/projectAPI";
import {createTask, fetchOneTask} from "../../../http/taskAPI";
import {fetchUser} from "../../../http/userAPI";

const CreateTask = observer(({show,onHide}) => {
    const [newTask, setNewTask] = useState({name:'',answer:""})
    const [selectPeople,setSelectPeople] = useState({})
    const [selectPriority,setSelectPriority] = useState('')
    const [selectCustomerPeople,setSelectCustomerPeople] = useState({})
    const {Tasks} = useContext(Context)
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    useEffect(()=>{
        fetchUser().then(data=>user.setUser(data))
    },[])
    function addNewGoodsFunc() {
        const newUTask = {
            ...newTask,curatorId: selectPeople.id,priority:selectPriority,projectId:projects.currProject.id
        }
        const task = async ()=>{
            const response = await createTask(newUTask)
            console.log(response)
            fetchOneTask(projects.currProject.id).then(data=>projects.setTasks(data))
        }
        task()
        setNewTask({name:'',answer:""})
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
                            <MDBModalTitle>Creating Task...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                <Form.Control
                                    value={newTask.name}
                                    onChange={e=>setNewTask({...newTask, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Enter name"}
                                />
                                <Form.Control
                                    value={newTask.answer}
                                    onChange={e=>setNewTask({...newTask, answer: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Enter answer"}
                                />
                                <Dropdown className='mt-3'>
                                    <Dropdown.Toggle> {selectPriority !== '' ? selectPriority : "Choose priority"}</Dropdown.Toggle>
                                    <Dropdown.Menu>

                                            <Dropdown.Item
                                                onClick={()=>{
                                                    setSelectPriority('Low priority')
                                                }}>
                                                Low priority
                                            </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={()=>{
                                                setSelectPriority('Medium priority')
                                            }}>
                                            Medium priority
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={()=>{
                                                setSelectPriority('High priority')
                                            }}>
                                            High priority
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className='mt-3'>
                                    <Dropdown.Toggle> {selectPeople.name || "Choose curator"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {user.user.map(users=>
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
});

export default CreateTask;