import React, {useState } from 'react'
import { Avatar, Button, Grid, Paper, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

export const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);

    const state = null;
    const classes = useStyles();
    const handleSubmit = () => {

    };
    const handleChange = () => {

    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchModes = () => {
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
        handleShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                {/* sign in or sign up depending on what needs to be done */}
                <Typography variant="h5">{isSignedUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* only if signed up, show something */}
                        {
                            isSignedUp && (
                                <>
                                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half></Input>
                                        <Input name="lastName" label="Last Name" handleChange={handleChange} half ></Input>

                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"></Input>
                        {/* if showPassword is true, then show text. otherwise show password */}
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}></Input>
                        {/* confirmation */}
                        { isSignedUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignedUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    {/* handles moving between sign in and sign up */}
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchModes}>
                                { isSignedUp ? 'Already have an account? Sign In' : "No account? Sign Up"} 
                            </Button>

                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>

    )
}

export default Auth;