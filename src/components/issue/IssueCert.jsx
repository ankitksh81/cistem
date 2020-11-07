import { Button, FormControl, InputLabel, MenuItem, TextField, Select } from '@material-ui/core';
import React, {useContext, useEffect} from 'react';
import {Web3Context} from '../../Web3Context';
import { makeStyles } from '@material-ui/core/styles';

import './IssueCert.css';
//Certificate Design
//Name of the student
//Position (optional)
//Student Email

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


function IssueCert() {

    const classes = useStyles();
    const issueCertificate = () => {

    }

    return (
        <div className="issue__outer-container">
            <h1>Issue Certificate</h1>
            <div className="issue__container">
                <form autoComplete="off">
                    <div className="issue__cert">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="cert__design">Certificate Design</InputLabel>
                            <Select
                                label="Certificate Design"
                                labelId="cert__design"
                                id="cert__design"
                            >
                                <MenuItem>Design 1</MenuItem>
                                <MenuItem>Design 1</MenuItem>
                                <MenuItem>Design 1</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <br />
                    <div>
                        <TextField className="input"
                            required
                            id="outlined-required"
                            variant="outlined"
                            label="Participant's Name"
                            type="text"
                        />
                    </div>
                    <br/>
                    <div>
                        <TextField className="input"
                            id="outlined-required"
                            variant="outlined"
                            label="Position (Optional)"
                            type="text"
                        />
                    </div>
                    <br/>
                    <div>
                        <TextField className="input"
                            required
                            id="outlined-required"
                            variant="outlined"
                            label="Participant's Email id"
                            type="email"
                        />
                    </div>
                    <br/>
                    <Button variant="contained" size="large" color="primary" onClick={()=>issueCertificate()}>Issue</Button>
                </form>
            </div>
        </div>
    )
}

export default IssueCert;
