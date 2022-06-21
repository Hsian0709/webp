import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Imageupload from './page/imageipload';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from './fb/firebase';
const { useState, useEffect } = React;
const Header = () => {
    const navigate=useNavigate();
    const [user, setuser] = useState(null);
    const [page, setpage] = useState("IG");
    useEffect(() => {
        auth.onAuthStateChanged((currentuser) => {
            if (currentuser) {
                console.log(currentuser);
                setuser(currentuser);
                setpage(`@${currentuser.displayName}`);
            } else {
                setuser(null);
                setpage("IG"); 
            }
        })
    }, [user]);
    return (
        <Container sx={{ width: 1000, borderColor: 'grey.300', boxShadow: 2 }}>
            <Grid container  >
                <Grid item xs={6}>
                    <Typography variant='h3' sx={{ mt: 1 }}>{page}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                        }}
                    >
                        {user ? (<>
                            <IconButton sx={{ width: 70, height: 70 }}>
                                <LogoutRoundedIcon sx={{ fontSize: 40, mt: 2 }} onClick={() => {auth.signOut();navigate('/signin');}} />
                            </IconButton>
                            <IconButton as={Link} to={"/posts"} sx={{ width: 70, height: 70 }}>
                                <NotificationsIcon sx={{ fontSize: 40, mt: 2 }} onClick={() => setpage("Newpost")}/>
                            </IconButton>
                            <Imageupload username={user.displayName} userphoto={user.photoURL} />
                            <IconButton as={Link} to={"/Home"} sx={{ width: 70, height: 70 }} onClick={() => setpage(`@${user.displayName}`)}>
                                <HomeRoundedIcon sx={{ fontSize: 40, mt: 2 }} />
                            </IconButton>
                        </>) : (
                            <IconButton as={Link} to={"/signin"} sx={{ width: 70, height: 70 }}>
                                <LoginRoundedIcon sx={{ fontSize: 40, mt: 2 }} onClick={() => setpage(`@${user.displayName}`)}/>
                            </IconButton>
                         )}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Header