import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthenticationContext';
import { DatasetContext } from '../../Context/DatasetContext';
import { useNavigate } from 'react-router-dom';
import { Type, VisitingDetails, PrescriptionAndMedicine } from '../../Component';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import style  from './AddReportStyle.module.css'
import { motion } from 'framer-motion';
import { Masonry } from '@mui/lab';

export default function AddReport() {

    const [ user ] = useContext(AuthContext);
    const [ dataset, setDataset, formStepper, setFormStepper ] = useContext(DatasetContext);

    let navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <Grid container alignItems="center" className = { style.body }>
            <Grid alignItems = "center" justifyContent = "center" item lg = {6} md = {12} xs = {12} className = { style.formSection }>
                <motion.div className = { style.wrapper } >
                    <Typography variant = "h4" sx = {{ marginTop: 8, textAlign: 'center'}}>
                        Add new report to your archive
                    </Typography>

                    { formStepper === 1 && <Type /> }

                    { dataset.Type === 'Prescription' &&
                        <React.Fragment>
                            { formStepper === 2 && <VisitingDetails /> }
                            { formStepper ===  3 && <PrescriptionAndMedicine /> }
                        </React.Fragment>
                    }

                    { dataset.Type === 'Lab report' && 
                        <React.Fragment>
                            <Typography>Lab Report</Typography>
                        </React.Fragment>
                    }
                </motion.div>
            </Grid>

            <Grid className = { style.cardSection } item lg = {6} sx ={{ marginTop: "64px", display: {xs: "none", md: "none", lg: "block"}}}>
                <Masonry columns={3} spacing={3}>
                    <Card variant="outlined">
                        <Grid container justifyContent="flex-start" alignItems = "center" sx = {{minHeight: "100%"}}>
                            <CardContent sx = {{ marginTop: "30px", marginBottom: "30px"}}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Document type
                                </Typography>
                                <Typography variant="h5" component="div">
                                {dataset.Type}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Card>

                    <Card variant="outlined">
                        <Grid container justifyContent="flex-start" alignItems = "center" sx = {{minHeight: "100%"}}>
                            <CardContent sx = {{ marginTop: "30px", marginBottom: "30px"}}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Doctor's Name
                                </Typography>
                                <Typography variant="h5" component="div">
                                Shaun
                                </Typography>
                                <Typography variant="h5" component="div">
                                Murphy
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Card>

                    <Card variant="outlined">
                        <Grid container justifyContent="flex-start" alignItems = "center" sx = {{minHeight: "100%"}}>
                            <CardContent sx = {{ marginTop: "30px", marginBottom: "30px"}}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Department
                                </Typography>
                                <Typography variant="h5" component="div">
                                {dataset.Prescription.department}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Card>

                    <Card variant="outlined">
                        <Grid container justifyContent="flex-start" alignItems = "center" sx = {{minHeight: "100%"}}>
                            <CardContent sx = {{ marginTop: "30px", marginBottom: "30px"}}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Date of Visiting
                                </Typography>
                                <Typography variant="h5" component="div">
                                26th
                                </Typography>

                                <Typography variant="h5" component="div">
                                September
                                </Typography>

                                <Typography variant="h5" component="div">
                                2022
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Card>

                    <Card variant="outlined">
                        <Grid container justifyContent="flex-start" alignItems = "center" sx = {{minHeight: "100%"}}>
                            <CardContent sx = {{ marginTop: "30px", marginBottom: "30px"}}>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Document type
                                </Typography>
                                <Typography variant="h5" component="div">
                                {dataset.Type}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Card>

                    <Card variant="outlined">
                        <Grid container justifyContent="flex-start" alignItems = "center" sx = {{minHeight: "100%"}}>
                            <CardContent sx = {{ marginTop: "30px", marginBottom: "30px"}}>
                                <Typography variant='caption' color="text.secondary" gutterBottom>
                                    Document type
                                </Typography>
                                <Typography variant="h6" component="div">
                                {dataset.Type}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Card>
                </Masonry>
            </Grid>

        </Grid>
    )
}