import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, {useContext, useEffect, useState} from 'react';
import {Web3Context} from '../../Web3Context';
import { makeStyles } from '@material-ui/core/styles'
import {db} from '../../firebase';

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

function IssueCert({user}) {

    const classes = useStyles();

    const [contract, setContract] = useState(null);
    const [designs, setDesigns] = useState([]);
    const [account, setAccount] = useState(null);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [web3, portis] = useContext(Web3Context);
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
        const CertificateContract = new web3.eth.Contract(contract_abi, contract_address);
        setContract(CertificateContract);
        web3.eth.getAccounts().then(e => {
            setAccount(e[0]);
        });
    }, []);

    useEffect(() => {
        fetchDesigns();
    }, [])
    
    const fetchDesigns = () => {
        // var designList = [];
        // var designNames = [];
        db.collection("data").where('uid', '==', user.uid)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // console.log(doc.id, " => ", doc.data());
                    // designList.push(doc.data());
                    setDesigns(oldArray => [...oldArray, doc.data()]);
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }
    const issueCertificate = () => {    
        if(contract && account){
            // //Method to send certificate
            // contract.methods.insertCert(web3.utils.fromAscii("Hash"), web3.utils.fromAscii("Anurag"), web3.utils.fromAscii("1st Place"), 1).send({from: account})
            // .then(function(receipt){
            //     // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
            //     console.log(receipt);
            // });
        }
    }

    return (
        <div className="issue__outer-container">
            <h1>Issue Certificate</h1>
            <div className="issue__container">
                <form autoComplete="off">
                    <div className="cert__dropdown">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="cert__design">Certificate Design</InputLabel>
                            <Select
                                labelId="cert__design"
                                id="cert__design"
                                value={selectedDesign}
                                onChange={(e) => setSelectedDesign(e.target.value)}
                            >
                                {designs.map((design, index) => (
                                    <MenuItem key={index} value={design.design_name}>{design.design_name}</MenuItem>
                                ))}
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
                    <Button variant="contained" size="large" color="primary" onClick={()=>issueCertificate()} disabled={contract&&account?false:true}>Issue</Button>
                </form>
            </div>
        </div>
    )
}

export default IssueCert;
