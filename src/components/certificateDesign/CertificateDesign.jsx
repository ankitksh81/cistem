import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import './CertificateDesign.css'
import Certificate from '../certificate/Certificate';
import {db} from '../../firebase';

const CertificateDesign = ({user}) => {
    const [title, setTitle] = useState("Certificate of Achievement");
    const [name, setName] = useState("");
    const [para, setPara] = useState("has secured the {position} in Smart India Hackathon, a 3 day hackathon conducted by REVA University");
    const [position, setPosition] = useState("1st");
    const [signee, setSignee] = useState("Signee Name");

    const addCertToDB = () => {
        console.log(user.uid);
        db.collection("data").add({
                    uid: user.uid,
                    design_name: name,
                    title: title,
                    para: para,
                    signee: signee
                })
                .then(function() {
                    console.log("Document successfully written!");
                    alert("Certificate Design Saved successfully!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
    };

    //     if(db.collection("data").doc(user.uid).collection("certificates").doc(name).exists){
    //     }
    //     else{
    //         db.collection("data").doc(user.uid).collection("certificates").doc(name).set({
    //             title: title,
    //             para: para,
    //             signee: signee
    //         })
    //         .then(function() {
    //             console.log("Document successfully written!");
    //         })
    //         .catch(function(error) {
    //             console.error("Error writing document: ", error);
    //         });
    //     }
    // }

    return (
        <div className="design__container">
            <h2>Personalize your Certificate</h2>
            <div className="inner__container">
                <div className="input__space">
                    <form className="cert__input" autoComplete="off">
                        
                        <div>
                            <TextField className="input"
                                required
                                id="outlined-required"
                                label="Name for this Design"
                                variant="outlined"
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Design 1"
                            />
                        </div>
                        <br/>
                        <div>
                            <TextField className="input"
                                required
                                id="outlined-required"
                                label="Certificate Title"
                                variant="outlined"
                                type="text"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                placeholder="Certificate of Participation"
                            />
                        </div>
                        <br/>
                        <div>
                            <TextField className="input"
                                required
                                id="outlined-required"
                                label="Paragraph text"
                                variant="outlined"
                                type="text"
                                value={para}
                                onChange={(e)=>setPara(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="caption">
                        <p style={{marginTop: 0}}>*Make sure to add {"'{position}'"} where you want to see the position in paragraph text.</p>
                        </div>
                        <div>
                            <TextField className="input"
                                id="outlined-required"
                                label="Position (Optional)"
                                variant="outlined"
                                type="text"
                                value={position}
                                onChange={(e)=>setPosition(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div>
                            <TextField className="input signee"
                                required
                                id="outlined-required"
                                label="Signee"
                                variant="outlined"
                                type="text"
                                value={signee}
                                onChange={(e)=>setSignee(e.target.value)}
                            />
                        </div>
                        <Button variant="contained" size="large" color="primary" style={{marginTop: "10px"}} className="design__button" onClick={()=>addCertToDB()}>Save</Button>
                    </form>
                </div>
                <div className="render__space">
                <PDFViewer style={{width:"100%", height:"100%"}}>
                    <Certificate cert_title={title} cert_name="Student Name" cert_para={para} cert_position={position} cert_sign={signee}/>
                </PDFViewer>
                </div>
            </div>
        </div>
    )
}

export default CertificateDesign;
