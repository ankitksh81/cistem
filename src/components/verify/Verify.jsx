import { Button, TextField } from '@material-ui/core';
import React from 'react';
import {useHistory} from 'react-router-dom';
import './Verify.css';

const Verify = () => {
    const history = useHistory();
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
            <Button variant="contained" size="large" type="submit" color="primary" onClick={(e)=>history.push("/rendercert/P5jFrKk58QayN0AhowPC")} className="very__button">Verify</Button>
        </div>
    )
}

export default Verify;

