import React, {useContext, useState} from 'react';
import {
    MDBBtn, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Dropdown, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {registration} from "../../../http/userAPI";
import DropdownItem from "react-bootstrap/DropdownItem";

const CreateNewUser = observer(({show,onHide}) => {
    const {user} = useContext(Context)
    const [User, setUser] = useState({name:"",password:"",
        telephone:"", email:""})
    const [newRole,setNewRole] = useState('')
    const reg = (e) =>{
            const Users={
                ...User,role:newRole

            }
            console.log(Users)
            const reg = async ()=>{
                const response = await registration(Users.email,Users.password,Users.role,Users.name,Users.telephone)
                console.log(response)
            }
            reg()
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
                            <MDBModalTitle>Creating user...</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                <Form.Control
                                    value={User.name}
                                    onChange={e=>setUser({...User, name: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Введіть повне ім'я"}
                                />
                                <Form.Control
                                    value={User.email}
                                    onChange={e=>setUser({...User, email: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Введіть пошту"}
                                />
                                <Form.Control
                                    value={User.telephone}
                                    onChange={e=>setUser({...User, telephone: e.target.value})}
                                    className='mt-3'
                                    placeholder={"Введіть телефон"}
                                />
                                <Form.Control
                                    value={User.password}
                                    onChange={e=>setUser({...User, password: e.target.value})}
                                    className='mt-3'
                                    type='password'
                                    placeholder={"Введіть password"}
                                />
                                <Dropdown className='mt-3'>
                                    <Dropdown.Toggle> {newRole !== '' ? newRole : "Виберіть роль"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <DropdownItem onClick={()=>{
                                            setNewRole('ADMIN')
                                        }}>
                                            Admin
                                        </DropdownItem>
                                        <DropdownItem onClick={()=>{
                                            setNewRole('Junior')
                                        }}>
                                            Junior
                                        </DropdownItem>
                                        <DropdownItem onClick={()=>{
                                            setNewRole('Middle')
                                        }}>
                                            Middle
                                        </DropdownItem>
                                        <DropdownItem onClick={()=>{
                                            setNewRole('Senior')
                                        }}>
                                            Senior
                                        </DropdownItem>
                                        <DropdownItem onClick={()=>{
                                            setNewRole('Customer')
                                        }}>
                                            Customer
                                        </DropdownItem>
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
                                reg()
                            }}>Create</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default CreateNewUser;