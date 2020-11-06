import React from 'react';
import illustraton from './illustration.jpg';
import './Homepage.css'
import { Button } from '@material-ui/core';
import Footer from '../footer/Footer';

function Homepage() {
    return (
        <div className="main__container">
            <div className="container">         
                <div className="hometext">
                    <h2 className="hero__name">CISTEM</h2>
                    <p>A free Certificate issuing and storing service.</p><br/>
                    <Button size="large" variant="contained" color="primary">Get Started</Button>
                </div>
                <div className="home__illus">
                    <img id="hero__illustration" src={illustraton} alt=""/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
