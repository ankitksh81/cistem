import React, {useState} from 'react';
import './Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
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
  },
  drawer: {
      width: 300,
      fontSize: 36, 
  },
}));

const Navigation = () => {
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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer classes={{ paper: classes.drawer }} open={drawerOpen} onClose={() => setDrawerOpen(false)}>

                <div className="drawer__name">
                    Profile Name
                </div>
                <hr/>

                <MenuList className="menu-list">
                    <MenuItem style={{fontSize: 28}}>
                        Dashboard
                    </MenuItem>
                    <MenuItem style={{fontSize: 28}}>
                        Design Certificate
                    </MenuItem>
                    <MenuItem style={{fontSize: 28}}>
                        Issue Certificate
                    </MenuItem>
                    <MenuItem style={{fontSize: 28}}>
                        Verify Certificate
                    </MenuItem>
                </MenuList>
            </Drawer>
        </div>
    )
}

export default Navigation;
