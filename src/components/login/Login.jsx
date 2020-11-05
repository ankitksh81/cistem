import React from 'react';
import './Login.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const Login = () => {

    return (
        <div className="container">
            <div className="login__container">

                <div className="login__header">
                    <h2 className="login__heading">
                        Login to <em>&nbsp;CISTEM</em>
                    </h2>
                </div>

                <form className="login__form" autoComplete="off">
                    <div>
                        <TextField className="login__email"
                            required
                            id="outlined-required"
                            label="Email"
                            variant="outlined"
                        />
                    </div>
                    <br />
                    <div>
                        <TextField className="login__password"
                            required
                            id="outlined-required"
                            label="Password"
                            variant="outlined"
                            type="password"
                        />
                    </div>
                    <br />

                    <Button size="large" className="login__button" variant="contained" color="primary">Login</Button>
                </form>

                <p className="login__footer">
                    Don't have an account?
                    <a href="http://www.google.com" target="_self"> Register</a>
                </p>

            </div>
        </div>
    )
}

export default Login;