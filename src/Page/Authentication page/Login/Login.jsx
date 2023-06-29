import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, FormControlLabel, Checkbox, Button, Typography, Divider, Grid, Link, Paper } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { authentication } from '../../../Firebase/config';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Login({ setStep }) {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const [ details, setDetails ] = useState({
        email: 'gouravchatterjee65@gmail.com',
        password: 'gourav',
        remember: false
    })


    const handleSubmit = () => {
        setLoading(true);
        authentication.signInWithEmailAndPassword(details.email, details.password)
        .then( resp => {
            setLoading(false);
        })
        .catch( error => {
            setLoading(false);
            setError(error.message); 
        })
    }

    const handleOnChange = (name, event) => {
        setDetails({...details, [name]: event.target.value});
        setError(null);
    }

    return (
        <motion.form autoComplete = 'off' initial = {{ opacity: 0 }} animate = {{ opacity: 1 }} exit = {{ opacity: 0 }} transition={{ delay: 0.2 }} >
            {/* <Paper elevation={2} sx = {{ p: 2, mt:2}}>
                <Typography variant='body2' color='text.secondary' sx = {{mb:1 }}>Email: client@demo.com</Typography>
                <Typography variant = 'body2' color='text.secondary'>Pass: client</Typography>
            </Paper> */}
            <TextField 
                fullWidth 
                size = 'small'
                margin = 'dense' 
                variant = 'outlined' 
                label = 'Email' 
                sx = {{ marginTop: 4 }}
                onChange = { (e) => handleOnChange('email', e) }
            />

            <TextField 
                fullWidth 
                type = 'password'
                size = 'small'
                margin = 'dense' 
                variant = 'outlined' 
                label = 'Password' 
                sx = {{ marginTop: 2 }}
                onChange = { (e) => handleOnChange('password', e) }
            />
            <Grid container alignItems='center'>
                <Grid item>
                    <FormControlLabel color='text.secondary'
                        control = { 
                            <Checkbox 
                                checked = { details.remember }
                                onChange={ (e) => setDetails({...details, remember: e.target.checked}) }
                            />}
                        label = "Remember me"
                    />
                </Grid>
                <Grid item>
                    <Typography textAlign='right'>
                        <Link textAlign='right' component='button' underline='none' variant='body1' color='primary' > Forgot password? </Link>
                    </Typography>
                </Grid>
            </Grid>
            
            { error && <Typography textAlign='center' color = 'error'>{ error }</Typography>}

            <LoadingButton
                // endIcon={<LoginIcon />}
                onClick = { handleSubmit }
                loading = { loading }
                // loadingPosition = "end"
                variant = "contained"
                margin = 'dense'
                fullWidth
                sx = {{ marginTop: 2 }}
            >
                { loading ? 'Logging In' : 'Login' }
            </LoadingButton>



            {/* <Button 
                variant='text' 
                color='primary'
                fullWidth
                size='small'
                onClick={ () => {
                    setStep({
                        login: false,
                        register: true,
                        forgotPassword: false
                    })
                }}
            >
                New to our platform? Create an account
            </Button> */}

            <Typography textAlign='center' variant='body1' sx = {{ marginTop: 2}}>
                New to our platform? &nbsp;
                <Link variant='body1' underline='none' textAlign='center' component='button' onClick = { () => {
                    setStep({
                        login: false,
                        register: true,
                        forgotPassword: false
                    })
            }}>
             Create an account
            </Link>
            </Typography>

                <Divider sx = {{ mt: 2, mb: 2}}> <Typography color='text.secondary'>Or</Typography></Divider>
            <Button color='primary' variant='outlined' startIcon={<GoogleIcon sx = {{ color: '#EA4335'}}/>} fullWidth sx = {{ marginTop: 1 }}>
                Sign in with Google
            </Button>
            <Button color='primary' variant='outlined' startIcon={<FacebookIcon/>} fullWidth sx = {{ marginTop: 2 }} >
                Sign in with Facebook
            </Button>
        </motion.form>
    )
}
