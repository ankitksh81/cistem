import { Button, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, {useContext, useEffect} from 'react';
import {Web3Context} from '../../Web3Context';

import './IssueCert.css';
//Certificate Design
//Name of the student
//Position (optional)
//Student Email

function IssueCert() {

/*    const [web3, portis] = useContext(Web3Context);
    useEffect(() => {
        const contract_abi= [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "certHash",
                        "type": "bytes32"
                    },
                    {
                        "name": "name",
                        "type": "bytes32"
                    },
                    {
                        "name": "achievement",
                        "type": "bytes32"
                    },
                    {
                        "name": "certType",
                        "type": "uint256"
                    }
                ],
                "name": "insertCert",
                "outputs": [
                    {
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "certHash",
                        "type": "bytes32"
                    }
                ],
                "name": "getCert",
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes32"
                    },
                    {
                        "name": "achievement",
                        "type": "bytes32"
                    },
                    {
                        "name": "certType",
                        "type": "uint256"
                    },
                    {
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getCertCount",
                "outputs": [
                    {
                        "name": "count",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];
        const contract_address = "0x1AcD3Eb3928D2d78adE40B38eEFEF13a932Eb879";
        const accounts = web3.eth.getAccounts()
        // const CertificateContract = new web3.eth.Contract(contract_abi, contract_address);
        // CertificateContract.methods.getCertCount().call();
    })
*/
    const issueCertificate = () => {

    }

    return (
        <div className="issue__outer-container">
            <h1>Issue Certificate</h1>
            <div className="issue__container">
                <form autoComplete="off">
                    <div className="cert__dropdown">
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
