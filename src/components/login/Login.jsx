import React, {useState} from 'react';
import './Login.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
    const signIn = () => {
        var user = auth
        .signInWithEmailAndPassword(email, password)
        .catch((e) => alert(e.message));
        if(user){
            history.push({
                pathname:  "/dashboard"
            });
        };
    };

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
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <br />

                    <Button size="large" className="login__button" variant="contained" color="primary"  onClick={()=>signIn()}>Login</Button>
                </form>

                <p className="login__footer">
                    Don't have an account?
                    <Link to="/signup"> Register</Link>
                </p>

            </div>
        </div>
    )
}

export default Login;