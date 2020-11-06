import React, {useState} from 'react';
import './Registration.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase';


const Registration = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
    const signUp = () => {
        var user = auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            return authUser.user.updateProfile({ displayName: name });
        })
        .catch((e) => alert(e.message));
        console.log(user);
        history.push({
            pathname:  "/dashboard"
        });
    }

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
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
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
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
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
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <Button size="large" className="registration__button" variant="contained" color="primary" onClick={()=>signUp()}>Register</Button>
                </form>

                <p className="registration__footer">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </p>

            </div>
        </div>
    )
}

export default Registration;