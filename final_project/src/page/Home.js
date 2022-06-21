import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Post from './post';
import Edit from './edit';
import Grid from '@mui/material/Grid';
import { db, auth } from '../fb/firebase';
import '@fontsource/roboto/400.css';
const { useState, useEffect } = React;
const Personalpage = () => {
    const [user, setuser] = useState('');
    const [posts, setposts] = useState([]);
    const [photo, setphoto] = useState('');
    useEffect(() => {
        db.collection('users').doc(auth.currentUser.displayName).onSnapshot(doc => { setuser(doc.data()) });
        setphoto(auth.currentUser.photoURL);
        db.collection('posts').where('username', '==', `${auth.currentUser.displayName}`).orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setposts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })));
        });

    }, []);
    return (
        <Box>
            <Container sx={{ width: 1000, borderLeft: 1, borderRight: 1, borderColor: 'grey.300', boxShadow: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid xs={4} sx={{ mt: 2 }}>
                            <Avatar alt="" src={photo} sx={{ width: 150, height: 150, ml: 5, mt: 3 }} />
                        </Grid>
                        <Grid xs={8} sx={{ textAlign: 'center', mt: 6 }}>
                            <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 3 }}
                                divider={<Divider orientation="vertical" flexItem />}>
                                <Typography variant="h6" sx={{ width: 150 }}>Posts : {posts.length}</Typography>
                                <Typography variant="h6" sx={{ width: 150 }}>Followers : {user.follower}</Typography>
                                <Typography variant="h6" sx={{ width: 150 }}>Followering : {user.followering}</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Typography variant='h4' sx={{ ml: 5, mt: 2 }}>{user.name}</Typography>
                    <Typography variant="subtitle1" sx={{ ml: 5 }}>{user.introduce}</Typography>
                    <Edit photo={photo} introduce={user.introduce} name={user.name} />
                </Box >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mr:5,
                        ml:5
                    }}
                >
                    {
                        posts.map(({ id, post }) => (
                            <Post key={id} postId={id} username={post.username} text={post.text} imgurl={post.imgurl} userphoto={post.userphoto} />
                        ))
                    }
                </Box>
            </Container >
        </Box>
    )
};
export default Personalpage;










