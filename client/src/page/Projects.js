import React, {useContext} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from "mdb-react-ui-kit";
import {Context} from "../index";
import TrItem from "../component/projects/TrItem";

const Projects = () => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol lg="9" xl="7">
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <h4 className="text-center my-3 pb-3">Projects</h4>
                                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <MDBCol size="12">
                                        <MDBInput
                                            label="Enter a project here"
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
                                            <th scope="col">ProjectName</th>
                                            <th scope="col">Status</th>
                                            {user.currUser.role === 'ADMIN' ?
                                                <th scope="col">Actions</th>:<div></div>
                                            }

                                            <th scope="col">Responsible</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                            projects.project.map(project=>
                                                <TrItem key={project.id} project={project}/>
                                            )

                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Projects;