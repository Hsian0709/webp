import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Post from './post';
import { db } from '../fb/firebase';

const { useState,useEffect} = React;
const Newpost = () => {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setposts(snapshot.docs.map(doc=>({
                id:doc.id,
                post:doc.data()
            })));
        })
        return () => {
        };
    }, []);
    return (
        <Box>
            <Container sx={{ width: 1000, borderColor: 'grey.300', boxShadow: 2, pb: 2 }}>
                {
                    posts.map(({id,post}) =>(
                        <Post key={id} postId={id} username={post.username} text={post.text} imgurl={post.imgurl} userphoto={post.userphoto} />
                    ))
                }
            </Container>
        </Box>
    );
};
export default Newpost