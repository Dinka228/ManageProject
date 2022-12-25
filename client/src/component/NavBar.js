import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {
    MDBCollapse,
    MDBContainer, MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../index";
import {LOGIN_ROUTE, PROFILE_ROUTE, PROJECTS_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    const [showNavCentred, setShowNavCentred] = useState(false);
    const history = useHistory()
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    return (
        <Navbar bg="dark" expand="lg">
            {
                user.isAuth ? <Container>
                    <Navbar.Brand  style={{cursor:"pointer", color:"white"}} onClick={()=>{
                        projects.setForumPage(false)
                        projects.setProjectPage(false)
                        projects.setProfilePage(false)
                        projects.setDiagramPage(false)
                        projects.setCustomer(false)
                        history.push(PROJECTS_ROUTE)
                    }}>Project management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            {
                                user.currUser.role === 'ADMIN' && !projects.forumPage
                                && !projects.projectPage
                                && !projects.profilePage
                                && !projects.customer
                                && !projects.diagramPage ?
                                    <Nav.Link style={{color:"white"}} onClick={()=>{
                                        projects.setShowAdmin(true)
                                }
                                }>AdminPanel</Nav.Link>
                                     :
                                     <div></div>
                             }


                        </Nav>
                        <Nav className="ms-auto" >
                            <Nav.Link style={{color:"white"}} onClick={()=>{
                                user.setIsAuth(false)
                                user.setCurrentUser({})
                                history.push(LOGIN_ROUTE)
                            }
                            }>Exit</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container> : <div></div>
            }

        </Navbar>
    );
})

export default NavBar;