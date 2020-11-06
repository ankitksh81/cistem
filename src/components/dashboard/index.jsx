import React, {useContext, useEffect} from 'react';
import './index.css'
import {Web3Context} from '../../Web3Context';

const Dashboard = () => {
    const [web3, portis] = useContext(Web3Context);
    useEffect(() => {
        web3.eth.getAccounts();
    })
    return (
        <div style={{marginTop: "100px", padding:"0px 20px 0px 20px"}}>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard;
