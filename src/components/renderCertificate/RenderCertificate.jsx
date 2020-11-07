import React, {useState, useEffect, useContext} from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import Certificate from '../certificate/Certificate';
import {db} from '../../firebase';
import {Web3Context} from '../../Web3Context';
import { Button } from '@material-ui/core'

const RenderCertificate = ({match}) => {
    const [certData, setCertData] = useState({});
    const [web3, portis] = useContext(Web3Context);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        db.collection("issuedCerts").doc(match.params.hash).get().then(function(doc) {
            if (doc.exists) {
                const design = doc.data().design_name;
                const uid = doc.data().u_id;
                console.log(design);
                console.log(uid);
                db.collection("data").where("uid", "==", uid)
                .get()
                .then(function(querySnapshot) {
                    var certificateData;
                    querySnapshot.forEach(function(doc) {
                        if(doc.data().design_name == design){
                            certificateData = doc.data();
                            setCertData(doc.data());
                        };
                    });
                    console.log("variable", certificateData);
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });

            } else {
                console.log("No such Certificate!");
            }
        }).catch(function(error) {
            console.log("Error getting Certificate:", error);
        });
    }, []);
    const getValueFromWeb3 = () => {
        //Web3 Code starts
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
                    CertificateContract.methods.getCert(web3.utils.fromAscii('iBWvYW940U6gqHrlrZnR')).call().then(function (result) {
                        console.log(result);    
                    });
    }
    return(
        <>
        {certData&&(
            <PDFViewer style={{width:"100vw", height:"100vh"}}>
                <Certificate cert_title={certData.title} cert_name="John Doe" cert_para={certData.para}  cert_position="1st position" cert_sign={certData.signee}/>
            </PDFViewer>
        )}
            <Button variant="contained" size="large" color="primary" onClick={()=>getValueFromWeb3()} disabled={contract?false:true}>Fetch Student Detail</Button>
        </>    
    );
};

export default RenderCertificate;