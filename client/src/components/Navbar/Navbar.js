import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Photos</Typography>

            </div>
            <Toolbar className={classes.toolbar}>
                {/* if the users exist, then show something. else, show something else */}
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{}user.result.name</Typography>
                        {/* logout button */}
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                // if not logged in, show button to login
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )}
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;