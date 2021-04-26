import React from 'react';
import camera from './images/camera.jpg';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Photos</Typography>
                <img className={classes.image} src="https://t3.ftcdn.net/jpg/02/70/09/98/240_F_270099822_9zbx236dHn1hyxYNl9HSOBvpUEpU0eOz.jpg"
                    alt="photos" height="100" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}


export default App;