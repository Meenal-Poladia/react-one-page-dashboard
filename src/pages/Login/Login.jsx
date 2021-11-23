import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css"
import logo from "../../assests/company-logo.jpg";
import {EMAIL_REGEX} from "../../constants/regex";
import {useEffect, useState} from "react";

const theme = createTheme();

const Login = () => {
    //Adding values to the input obtained
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Adding functionality to Remember Me button
    const [rememberCredentials, setRememberCredentials] = useState(false);

    //Checking if email and password is valid
    const [validEmail, setValidEmail] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);

    //After clicking the login button
    const handleSubmitLogin = (event) => {
        event.preventDefault();

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // if(checkEmail && checkPassword === !"") {
        //     //Success goes here
        //     if(validEmail && checkPassword === !"") {
        //         console.log(email, password);
        //     }
        // }
        // if(!validEmail || ) {
        //     console.log(`In valid mail`)
        // }
        if(checkEmail && checkPassword === !"") {
            if(validEmail){
                console.log(`Email & Password are correct and valid`);
            }
        }
        if(!validEmail) {
            console.log(`Enter valid email`);
        }
        if(password === !""){
            console.log(`Enter valid password`);
        }

        //If using a axios call to login an authenticated user
        // const params = {
        //     email,
        //     password
        // }
        // console.log('reached')
        //
        // axios.post(LOGIN_URL, {}, {params})
        //     .then(response => {
        //         localStorage.setItem("token", response.data.token);
        //         console.log(response)
        //         history.push('/dashboard');
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

    };

    //After clicking the Remember Me button
    const handleClickRememberMe = () => {
        alert(`Remember Me button is being clicked`);
        setRememberCredentials(true);
        if(rememberCredentials) {
            setRememberCredentials(false);

        }
    }

    useEffect((e) => {
        setValidEmail(EMAIL_REGEX.test(email));
        setCheckEmail(!!setEmail);
        setCheckPassword(!!setPassword);
    })


    return (
        <section className="login-background-colour">
            <article className="login-divider">
                <figure>
                    <img src={logo} alt="company-logo" className="logo-img"/>
                </figure>
                <div className="login-container">
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ l: 1, bgcolor: 'secondary.main' }}>
                                    {/*<LockOutlinedIcon />*/}
                                </Avatar>
                                <Typography component="h1" variant="h5" sx={{marginBottom : 5, marginTop: 5}}>
                                    Login to Hiring Bot
                                </Typography>
                                <Box component="form" onSubmit={handleSubmitLogin} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        pattern={EMAIL_REGEX}
                                        onChange={event => setEmail(event.target.value)}
                                        sx={{marginBottom : 3}}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={event => setPassword(event.target.value)}
                                        sx={{marginBottom : 3}}
                                    />
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={rememberCredentials}
                                                          onChange={handleClickRememberMe}
                                                />
                                            }

                                            label="Remember Me"
                                        />
                                    </FormGroup>
                                    <div className="login-button">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                mt: 3,
                                                mb: 2
                                            }}
                                            className="login-button"
                                        >
                                            Login
                                        </Button>
                                    </div>

                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
            </article>

        </section>

    );
}
export default Login;