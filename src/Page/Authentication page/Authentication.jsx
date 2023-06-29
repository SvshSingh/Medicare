import React, { useState, useContext, useEffect } from 'react'
import { Typography, Container, Grid } from '@mui/material'
import Register from './Register/Register';
import Login from './Login/Login';
import { AnimatePresence } from 'framer-motion'
import style from './Authentication.module.css';
import { AuthContext } from '../../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';

export default function Authentication() {

    const navigate = useNavigate();
    const [ user ] = useContext(AuthContext);

    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user, navigate])


    const [ step, setStep ] = useState({
        login: true,
        register: false,
        forgotPassword: false
    })
    

    return (
        <Container sx = {{marginTop: 12}} >
            <div className = { style.wrapper }>
                <Typography variant='h5'  textAlign='left' color='primary' sx = {{ marginTop: 6 }} >Welcome to Medicare!</Typography>
                <AnimatePresence>
                    { step.login && <>
                        <Typography color='text.secondary' variant='subtitle1' textAlign='left' sx = {{ fontWeight: 500 }}>Please sign-in to your account and start the adventure</Typography>
                        < Login setStep = { setStep } /> 
                    </>
                    }
                    { step.register && <>
                        <Typography variant='subtitle1' textAlign='center'>Maintain an organized system for keeping track of all your prescriptions and reports by signing up for Medicare</Typography>
                        < Register setStep = { setStep } /> 
                    </>
                    }
                </AnimatePresence>
            </div>
        </Container>
    )
}
