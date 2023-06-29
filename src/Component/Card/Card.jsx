import React from 'react'
import { Paper, Grid, Typography } from '@mui/material';

export default function Card({data, handleVD}) {
  return (
    <Paper onClick = { () => { handleVD(data) }} key={data[1].docId}  variant='outlined' elevation={0} sx = {{ marginTop: 4, padding: 2 }} >
    <Grid container spacing={2}>
        <Grid item lg = {3}>
            <Typography variant="caption" color='primary' display="block" gutterBottom>
                Doctor's name
            </Typography>
            <Typography variant="h5" color='' display="block" gutterBottom>
                {data[1].Prescription.doctor}
            </Typography>
        </Grid>

        <Grid item lg = {3}>
            <Typography variant="caption" color='primary' display="block" gutterBottom>
                Type
            </Typography>
            <Typography variant="body1" color='text.primary' display="block" gutterBottom>
                { data[1].Type }
            </Typography>
        </Grid>

        <Grid item lg = {3}>
            <Typography variant="caption" color='primary' display="block" gutterBottom>
                Department
            </Typography>
            <Typography variant="body1" color='text.primary' display="block" gutterBottom>
                { data[1].Prescription.department }
            </Typography>
        </Grid>

        <Grid item lg = {2}>
            <Typography variant="caption" color='primary' display="block" gutterBottom>
                Date of test
            </Typography>
            <Typography variant="body1" color='text.primary' display="block" gutterBottom>
            { data[1].Prescription.date }
            </Typography>
        </Grid>
    </Grid>
</Paper>
  )
}


