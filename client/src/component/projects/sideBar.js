import React, {useContext, useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBRipple,
    MDBBadge,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import {Context} from "../../index";

const SideBar = () => {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
    const {projects} = useContext(Context)
    return (
        <>
            <MDBCollapse tag="nav" className="d-lg-block bg-dark sidebar">
                <div className="position-sticky">
                    <MDBListGroup flush className="mx-3 mt-4">
                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'onClick={()=>{
                                projects.setForumPage(false)
                                projects.setProjectPage(true)
                                projects.setProfilePage(false)
                                projects.setDiagramPage(false)
                                projects.setCustomer(false)
                            }}>
                                <MDBIcon fas icon="tachometer-alt me-1" />
                                {projects.currProject.name}
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem  tag='a' href='#' action className='mt-4 border-0 border-bottom rounded' onClick={()=>{
                                projects.setForumPage(true)
                                projects.setProjectPage(false)
                                projects.setProfilePage(false)
                                projects.setDiagramPage(false)
                                projects.setCustomer(false)
                            }}>
                                <MDBIcon fas icon="chart-area me-1" />
                                Forum
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='mt-4 border-0 border-bottom rounded'onClick={()=>{
                                projects.setForumPage(false)
                                projects.setProjectPage(false)
                                projects.setProfilePage(true)
                                projects.setCustomer(false)
                                projects.setDiagramPage(false)
                            }}>
                                <MDBIcon fas icon="lock me-1" />
                                Personal Dashboard
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='mt-4 border-0 border-bottom rounded'onClick={()=>{
                                projects.setForumPage(false)
                                projects.setProjectPage(false)
                                projects.setProfilePage(false)
                                projects.setDiagramPage(true)
                                projects.setCustomer(false)
                            }}>
                                <MDBIcon fas icon="chart-pie me-1" />
                                Diagrams
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className=' mt-4 border-0 border-bottom rounded'onClick={()=>{
                                projects.setForumPage(false)
                                projects.setProjectPage(false)
                                projects.setProfilePage(false)
                                projects.setDiagramPage(false)
                                projects.setCustomer(true)
                            }}>
                                <MDBIcon fas icon="globe me-1" />
                                Customer
                            </MDBListGroupItem>
                        </MDBRipple>
                    </MDBListGroup>
                </div>
            </MDBCollapse>
        </>
    );
};

export default SideBar;