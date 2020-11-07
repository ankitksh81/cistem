import { Button, TextField } from '@material-ui/core';
import React from 'react';
import './Verify.css';

const Verify = () => {
    return (
        <div className="verify__container">
            <div className="verify__heading">
                <h2 className="heading">Verify Certificate</h2>
            </div>
            <div className="verify__input">
                <TextField className="hash__input" id="outlined-basic" label="Certificate Hash" variant="outlined" />
            </div>
            <br/>
            <br/>
            <br/>
            <Button variant="contained" size="large" type="submit" color="primary" className="very__button">Verify</Button>
        </div>
    )
}

export default Verify;

