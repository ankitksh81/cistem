import React, {useContext, useEffect} from 'react';
import './Dashboard.css'
import {Web3Context} from '../../Web3Context';
import { Button } from '@material-ui/core';

const Dashboard = () => {
    const [web3, portis] = useContext(Web3Context);
    useEffect(() => {
        web3.eth.getAccounts();
    })
    return (
        <div style={{marginTop: "100px", padding:"0px 20px 0px 20px"}}>
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
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
