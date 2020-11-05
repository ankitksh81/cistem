import React from 'react';
import './Registration.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const Registration = () => {

    return (
        <div className="container">
            <div className="registration__container">

                <div className="registration__header">
                    <h2 className="registration__heading">
                        Get Started with <em>&nbsp;CISTEM</em>
                    </h2>
                </div>

                <form className="registration__form" autoComplete="off">
                    
                    <div>
                        <TextField className="registration__email"
                            required
                            id="outlined-required"
                            label="Email"
                            variant="outlined"
                            type="email"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField className="registration__name"
                            required
                            id="outlined-required"
                            label="Name"
                            variant="outlined"
                            type="text"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField className="registration__password"
                            required
                            id="outlined-required"
                            label="Password"
                            variant="outlined"
                            type="password"
                        />
                    </div>
                    <br />
                    <Button size="large" className="registration__button" variant="contained" color="primary">Register</Button>
                </form>

                <p className="registration__footer">
                    Already have an account?
                    <a href="http://www.google.com" target="_self"> Login</a>
                </p>

            </div>
        </div>
    )
}

export default Registration;