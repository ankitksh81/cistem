import React, {useState} from 'react';
import './Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import{Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, IconButton, Drawer, MenuList, MenuItem } from '@material-ui/core';
import MenuOutlined from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontSize: 32,
    fontFamily: "Fira Code",
  },
  drawer: {
      width: 300,
      fontSize: 36,
  },
}));

const Navigation = ({user, auth}) => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    return (
        <div>
            <AppBar positioin="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
                        <MenuOutlined />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        CISTEM
                    </Typography>

                    {user? (
                        <Button color="inherit" onClick={()=>{auth.signOut()}}>Logout</Button>
                    ):(   
                        <Link to="/login" style={{textDecoration: 'none', color:'white'}}>
                            <Button color="inherit">Login</Button>
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer classes={{ paper: classes.drawer }} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            {user?(
                <>
                <div className="drawer__name">
                    {user.displayName}
                </div>
                <hr/>

                <MenuList className="menu-list">
                    <Link to="/dashboard" style={{textDecoration: 'none', color:'black'}}>
                        <MenuItem style={{fontSize: 28, marginBottom: 5}}>Dashboard</MenuItem>
                    </Link>
                    <Link to="/designcert" style={{textDecoration: 'none', color:'black'}}>
                        <MenuItem style={{fontSize: 28, marginBottom: 5}}>Design Certificate</MenuItem>
                    </Link>
                    <Link to="/issuecert" style={{textDecoration: 'none', color:'black'}}>
                        <MenuItem style={{fontSize: 28, marginBottom: 5}}>Issue Certificate</MenuItem>
                    </Link>
                    <Link to="/dashboard" style={{textDecoration: 'none', color:'black'}}>
                        <MenuItem style={{fontSize: 28, marginBottom: 5}}>Verify Certificate</MenuItem>
                    </Link>
                </MenuList>
                </>
            ):(
                <MenuList className="menu-list">
                    <Link to="/" style={{textDecoration: 'none', color:'black'}}>
                        <MenuItem style={{fontSize: 28, marginBottom: 5}}>Homepage</MenuItem>
                    </Link>
                    <Link to="/login" style={{textDecoration: 'none', color:'black'}}>
                        <MenuItem style={{fontSize: 28, marginBottom: 5}}>Login</MenuItem>
                    </Link>
                    <Link to="/signup" style={{textDecoration: 'none', color:'black'}}>
                        <MenuItem style={{fontSize: 28, marginBottom: 5}}>SignUp</MenuItem>
                    </Link>
                </MenuList>
            )}
                
            </Drawer>
        </div>
    )
}

export default Navigation;
