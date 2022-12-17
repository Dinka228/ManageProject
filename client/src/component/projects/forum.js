import React, {useContext, useEffect, useState} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBTypography,
    MDBTextArea,
    MDBCardHeader,
} from "mdb-react-ui-kit";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import CreateIdea from "../Modals/createIdea";
import {createIdea, fetchIdea} from "../../http/ideaAPI";
import {createIdeaMessage, fetchOneIdeaMessage} from "../../http/ideaMessageAPI";

const Forum = observer(() => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const history = useHistory()
    const [createIdeaVisible,setCreateIdeaVisible] = useState(false)
    const [newIdeaMessage,setNewIdeaMessage] = useState({text:""})
    function addNewIdeaMessage(){
        const newUIdeaMessage={
            ...newIdeaMessage,id:Date.now(),creatorId:user.currUser.id,ideaId:projects.currIdea.id

        }
        const formData = new FormData()
        formData.append('text',newUIdeaMessage.text)
        formData.append('ideaId',projects.currIdea.id)
        formData.append('creatorId',user.currUser.id)
        createIdeaMessage(formData).then(data=>{
            fetchOneIdeaMessage(projects.currIdea.id).then(data=>projects.setIdeasMessage(data))
        })
        setNewIdeaMessage({text:''})

    }
    useEffect(()=>{
        fetchIdea().then(data=>projects.setIdea(data))
    },[])
    return (
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
            <MDBRow>
                <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                    <h5 className="font-weight-bold mb-3 text-center text-lg-start">
                        Themes
                    </h5>

                    <MDBCard>
                        <MDBCardBody>
                            <MDBTypography listUnStyled className="mb-0">
                                {
                                    projects.idea.map(idea=>
                                        <li
                                            className="p-2 border-bottom"
                                            style={{ backgroundColor: "#eee" }}
                                            onClick={()=>{
                                                projects.setCurrIdea(idea)
                                                fetchOneIdeaMessage(projects.currIdea.id).then(data=>projects.setIdeasMessage(data))
                                            }
                                            }

                                        >
                                            <a href="#!" className="d-flex justify-content-between">
                                                <div className="d-flex flex-row">
                                                    <div className="pt-1">
                                                        <p className="fw-bold mb-0">{user.user.filter(users=>{
                                                            if(+users.id === +idea.creatorId){
                                                                return users
                                                            }
                                                        }).map(userss => <div>{userss.name}</div>)}</p>
                                                        <p className="small text-muted">
                                                            {idea.name}
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
                    <MDBBtn color={"success"} className='mt-4' onClick={()=>{
                        setCreateIdeaVisible(true)
                    }}>
                        Add Themes
                    </MDBBtn>
                </MDBCol>

                <MDBCol md="6" lg="7" xl="8">
                    <MDBTypography listUnStyled>
                        <h2>{projects.currIdea.name ? projects.currIdea.name : <div></div>}</h2>
                        {
                            projects.ideasMessage.map(message=>
                                <li className="d-flex justify-content-between mb-4">
                                    <MDBCard>
                                        <MDBCardHeader className="d-flex justify-content-between p-3">
                                            <p className="fw-bold mb-0">{user.user.filter(users=>{
                                                if(+users.id === +message.creatorId){
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
                                </li>
                            )
                        }
                        <li className="bg-white mb-3">
                            <MDBTextArea label="Message" id="textAreaExample" rows={4}
                                         value={newIdeaMessage.text}
                                         onChange={e=>setNewIdeaMessage({...newIdeaMessage, text: e.target.value})}
                            />
                        </li>
                        <MDBBtn color="info" rounded className="float-end" onClick={()=>{
                            addNewIdeaMessage()
                        }}>
                            Send
                        </MDBBtn>
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <CreateIdea show={createIdeaVisible} onHide={()=>{
                setCreateIdeaVisible(false)}
            }/>
        </MDBContainer>
    );
});

export default Forum;