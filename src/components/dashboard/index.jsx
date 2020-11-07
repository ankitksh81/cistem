import React, {useContext, useEffect} from 'react';
import './Dashboard.css'
import {Web3Context} from '../../Web3Context';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [web3, portis] = useContext(Web3Context);
    useEffect(() => {
        web3.eth.getAccounts();
    })
    return (
        <div style={{marginTop: "80px", padding:"0px 20px 0px 20px"}}>
            <h1 className="dashboard__heading">Dashboard</h1>
            <div className="dashboard__first">
                <div className="first__left">
                    <h2 className="first__heading">
                        Get Started with&nbsp;<em>CISTEM</em>
                    </h2>
                    <p className="first__para">
                        Somethings you need to setup before you can start using CISTEM.
                    </p>
                    <br/>

                </div>
                <div className="first__right">
                    <h2 className="first__heading ">
                        Setup&nbsp;<em>Portis</em>
                    </h2>
                    <br/>
                    <div className="first__list">
                        <li>
                            Login/Register with Portis.
                        </li>
                        <li>
                            Get test Matic tokens from <a href="https://faucet.matic.network/">here</a> by entering your Portis wallet address. <strong>(Only for testing purposes)</strong>
                        </li>
                        <li>
                            Tokens are only required for issuing certificates.
                        </li>
                    </div>
                    <br/>
                </div>
            </div>

            <div className="dashboard__second">
                <div className="second__left">
                    <h2 className="second__heading">
                        What can you do with&nbsp;<em>CISTEM</em>&nbsp;?
                    </h2>
                    <p className="first__para">
                        Following are some of the features of CISTEM
                    </p>
                    <div className="dashboard__buttons">
                        <h3 className="dashboard__h3">1. Design Certificates</h3>
                        <Link to="/designcert">
                            <Button variant="contained" size="large" color="primary">Design Certificates</Button>
                        </Link>
                        <br/>
                        <h3 className="dashboard__h3">2. Issue Certificates</h3>
                        <Link to="/issuecert">
                            <Button variant="contained" size="large" color="primary">Issue Certificates</Button>
                        </Link>
                        <br/>
                        <h3 className="dashboard__h3">3. Verify Certificates</h3>
                        <Link to="/verifycert">
                            <Button variant="contained" size="large" color="primary">Verify Certificates</Button>
                        </Link>
                    </div>
                </div>
                <div className="second__right">
                    <div className="second__about">
                        <h3 className="dashboard__about-h3">Design Certificates</h3>
                        <p>
                            CISTEM provides you the ability to design your certificates and preview your work at the same time. <br/>
                            You can also download a pdf of design if you would like to do so.
                        </p>

                        <h3 className="dashboard__about-h3">Issue Certificates</h3>
                        <p>
                            We at CISTEM wants to make the process of issuing certificates hassle free. <br/>
                            When you are ready with your design, click on issue certificate and it's done.
                        </p>

                        <h3 className="dashboard__about-h3">Verify Certificates</h3>
                        <p>
                            We know how hard it is today to get vrified certificates. <br/>
                            So we took care of verifing the certificates for you. Using "Blockchain" we can verify the certificates <br/>
                            with doing much. All you have to do is give the hash of the certificates and you can view the valid certificates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
