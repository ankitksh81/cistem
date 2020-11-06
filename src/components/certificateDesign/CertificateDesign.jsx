import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import './CertificateDesign.css'

const CertificateDesign = () => {
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
                            />
                            <Typography variant="caption">eg: has bagged/participated "Position" in REVA Hack 2020, a 3 day hackathon conducted by REVA University</Typography>
                        </div>
                        <br/>
                        <div>
                            <TextField className="position"
                                id="outlined-required"
                                label="Position (Optional)"
                                variant="outlined"
                                type="text"
                            />
                        </div>
                        <br/>
                        <div>
                            <TextField className="sign"
                                id="outlined-required"
                                label="Signee"
                                variant="outlined"
                                type="text"
                            />
                        </div>
                    </form>
                </div>
                <div className="render__space">
                    
                </div>
            </div>
        </div>
    )
}

export default CertificateDesign;
