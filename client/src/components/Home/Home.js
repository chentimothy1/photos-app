import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import AllPosts from '../Posts/AllPosts';
import Form from '../Form/Form';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
    const dispatch = useDispatch();

    //for updating a post
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <AllPosts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
