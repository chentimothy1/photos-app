import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';


const AllPosts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        // if posts.length is something other than 0, everything will be false and the posts will be showed
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={2}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))    
                }
            </Grid>
        )
    )
}

export default AllPosts;