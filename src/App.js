import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import Portis from '@portis/web3';
import Web3 from 'web3';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Registration from './components/registration/Registration.jsx';
import { auth } from './firebase';
import {Web3Context} from './Web3Context';
import RenderCertificate from './components/renderCertificate/RenderCertificate.jsx';
import Dashboard from './components/dashboard';
import Homepage from './components/homepage';
import Navigation from './components/navbars/Navigation.jsx';
function App() {
  const web3 = useRef(null);
  const portis = useRef(null);
  const [portisLoggedIn, setPortisLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

  //Check if logged in with Firebase
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				//user logged in
				console.log(authUser)
				setUser(authUser)
			} else {
				//user logged out
				setUser(null)
			}
		})

		return () => {
			//perform cleanup
			unsubscribe()
		}
	}, [user])

  //Initialize web3 and portis
  useEffect(() => {
    if(portis.current!==null && !portis.current.isLoggedIn()) {
      portis.current = new Portis('380b878f-f415-48f8-b5ef-d0f417d004d3', 'maticTestnet');
      web3.current = new Web3(portis.current.provider);
      web3.current.eth.getAccounts().then(()=>{
        setPortisLoggedIn(true);
      });
      console.log("Logged in to portis");
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Navigation user={user} auth={auth}/>
        <Web3Context.Provider value={web3.current}>
          <Route exact path='/'>
          {/* todo: replace with homepage component */}
            <Homepage/>
          </Route>
          <Route exact path='/dashboard'>
          {/* todo: replace with dashboard component */}
            {user ? <Dashboard/> : <Redirect to="/login" />}
          </Route>
          <Route exact path='/login'>
            {user ? <Redirect to="/dashboard" /> : <Login />}
            
          </Route>
          <Route exact path='/signup'>
            {user ? <Redirect to="/dashboard" /> : <Registration />}
          </Route>
          <Route exact path='/rendercert'>
            <RenderCertificate />
          </Route>
        </Web3Context.Provider>
      </Router>
    </div>
  );
}

export default App;
