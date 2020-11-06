import { TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import './CertificateDesign.css'
import Certificate from '../certificate/Certificate';

const CertificateDesign = () => {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [para, setPara] = useState("");
    const [position, setPosition] = useState("");
    const [signee, setSignee] = useState("");

    return (
        <div className="design__container">
            <Typography variant="h2">Personalize your Certificate</Typography>
            <div className="inner__container">
                <div className="input__space">
                    <form className="cert__input" autoComplete="off">
                        <div>
                            <TextField className="title"
                                required
                                id="outlined-required"
                                label="Certificate Title"
                                variant="outlined"
                                type="text"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                            />
                        </div>
                        <br />
                        <div>
                            <TextField className="name"
                                required
                                id="outlined-required"
                                label="Participant's Name"
                                variant="outlined"
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div>
                            <TextField className="para"
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
                        <div>
                        <Typography variant="caption">eg: has bagged/participated {"{position}"} in REVA Hack 2020, a 3 day hackathon conducted by REVA University</Typography>
                        </div>
                        <div>
                            <TextField className="position"
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
                            <TextField className="sign"
                                required
                                id="outlined-required"
                                label="Signee"
                                variant="outlined"
                                type="text"
                                value={signee}
                                onChange={(e)=>setSignee(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className="render__space">
                <PDFViewer style={{width:"100%", height:"100%"}}>
                    <Certificate cert_title={title} cert_name={name} cert_para={para} cert_position={position} cert_sign={signee}/>
                </PDFViewer>
                </div>
            </div>
        </div>
    )
}

export default CertificateDesign;
