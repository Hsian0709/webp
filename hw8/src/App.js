import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={9}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: -0.5 }} />
              Sign in
            </Typography>
            <TextField
              margin="normal"
              required
              sx={{ width: 350 }}
              id="outlined-basic" label="Email Address" variant="outlined" />
            <TextField
              margin="normal"
              required
              sx={{ width: 350 }}
              id="outlined-basic" label="Password" variant="outlined" />
            <Grid item mr={30}>
              <Link href="#" variant="body2" >
                Forgot password?
              </Link>
            </Grid>

            <FormControlLabel
              sx={{ mr: 25, my: 0.1 }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 0, mb: 2, mr: -33 }}
            >
              Sign In
            </Button>
            <Grid item mb={1}>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}
