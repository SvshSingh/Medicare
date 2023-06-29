import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextField, FormControlLabel, Checkbox, Button, Typography, Divider } from '@mui/material';
import { authentication } from '../../../Firebase/config';
import LoadingButton from '@mui/lab/LoadingButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../../Firebase/config';
import { teal } from '@mui/material/colors';


export default function Register({ setStep }) {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const [ details, setDetails ] = useState({
        fullName: null,
        email: null,
        password: null,
        remember: false
    })

    const setDefaultTheme = async (uid) => {
        try {
            const collectionRef = collection(firestore, 'Theme');
            await addDoc(collectionRef, {
                primary: teal,
                secondary: teal,
                uid: uid
            });
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const resp = await authentication.createUserWithEmailAndPassword(details.email, details.password);
            await resp.user.updateProfile({
                displayName: details.fullName
            });
            await setDefaultTheme(resp.user.uid);
            setLoading(false);
        } catch (error) {
            console.log(error.code);
            setError(error.message);
            setLoading(false);
        }
    };
    

    const handleOnChange = (name, event) => {
        setDetails({ ...details, [name]: event.target.value });
        setError(null);
    }

    return (
        <div>
            <motion.form 
                autoComplete = 'off' 
                initial = {{ opacity: 0 }} 
                animate = {{ opacity: 1 }} 
                exit = {{ opacity: 0 }} 
                transition={{ delay: 0.2 }} 
            >
                <TextField 
                    fullWidth 
                    size = 'small'
                    margin = 'dense' 
                    variant = 'outlined' 
                    label = 'Full name' 
                    sx = {{ marginTop: 4 }}
                    onChange = { (e) => handleOnChange('fullName', e) }
                />

                <TextField 
                    fullWidth 
                    size = 'small'
                    margin = 'dense' 
                    variant = 'outlined' 
                    label = 'Email' 
                    sx = {{ marginTop: 2 }}
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

                <FormControlLabel 
                    control = {
                        <Checkbox 
                            checked = { details.remember } 
                            onChange={ (e) => setDetails({...details, remember: e.target.checked}) }
                        />
                    } 
                    label="Remember me" 
                />

                { error && <Typography textAlign='center' color = 'error'>{ error }</Typography>}

                <LoadingButton
                    onClick = { handleSubmit }
                    loading = { loading }
                    loadingPosition = "end"
                    variant = "contained"
                    margin = 'dense'
                    fullWidth
                    sx = {{ marginTop: 2 }}
                >
                    { loading ? 'Registering' : 'Register' }
                </LoadingButton>

                <Button 
                    variant='text' 
                    color='primary'
                    fullWidth
                    size='small'
                    onClick={ () => { setStep({ login: true, register: false, forgotPassword: false }) }}
                    sx = {{ marginTop: 2 }}
                >
                    Already registered? Login
                </Button>
                <Divider>Or</Divider>
            <Button color='secondary' variant='outlined' startIcon={<GoogleIcon/>} fullWidth sx = {{ marginTop: 1 }}>
                Sign up with Google
            </Button>
            <Button color='secondary' variant='outlined' startIcon={<FacebookIcon/>} fullWidth sx = {{ marginTop: 2 }} >
                Sign up with Facebook
            </Button>
        </motion.form>
        </div>
    )
}
