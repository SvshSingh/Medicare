import React, {useState, useContext } from 'react';
import { DatasetContext } from '../../../Context/DatasetContext';
import { AuthContext } from '../../../Context/AuthenticationContext';
import { Stack, Button, Typography, TextField, Grid, Card, Box } from '@mui/material';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import AddIcon from '@mui/icons-material/Add';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import UploadIcon from '@mui/icons-material/Upload';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';


export default function PrescriptionAndMedicine() {
  
  const [Medicine, setMedicine ] = useState([]);
  const [ dataset, setDataset, formStepper ,setFormStepper] = useContext(DatasetContext);
  const [ user ] = useContext(AuthContext);


  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    MedName: "",
    Morning: "",
    Afternoon: "",
    Night: ""
  });


  const onAdd = (data) => {
    setMedicine([...Medicine, data]);
    reset();
  }
  
  const onSubmit = () => {
    setDataset({...dataset, userId: user.uid ,Prescription: {...dataset.Prescription, Medicine}});
  }

  return (
    <div>

      <Typography sx={{ textAlign: "center", margin: 2 }}>
        Tell us about your medical details
      </Typography>

      <Button variant="contained" component="label" fullWidth>
        Upload Your Prescription
        <input hidden accept="image/*" multiple type="file" />
      </Button>

      <Typography variant="h5" align="center" sx={{ marginTop: 3 }}>
        Add Medicines
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onAdd)}>
        <Grid container spacing={1} sx={{ marginTop: 2, marginBottom: 2 }}>
          <Grid item xs={12} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              label="Medicine's name"
              {...register("MedName", {
                required: "Please Enter the name of the medicine",
              })}
              error = { errors.MedName ? true : false }
            //  value = "qwerty" // hardcoded
            ></TextField>
          </Grid>
          <Grid item xs={4} lg={2}>
            <TextField
              {...register("Morning", {
                required: "Please enter no. of Doses",
              })}
              variant="outlined"
              size="small"
              label="Day"
              error = { errors.Morning ? true : false }
             // value = "1"  // hardcoded value
            ></TextField>
          </Grid>
          <Grid item xs={4} lg={2}>
            <TextField
              {...register("Afternoon", {
                required: "Please enter no. of Doses",
              })}
              variant="outlined"
              size="small"
              label="Afternoon"
              error = { errors.Afternoon ? true : false }
             // value = "1"  // hardcoded value
            ></TextField>
          </Grid>
          <Grid item xs={4} lg={2}>
            <TextField
              {...register("Night", { required: "Please enter no. of Doses" })}
              variant="outlined"
              size="small"
              label="Night"
              error = { errors.Night ? true : false }
             // value = "1"  // hardcoded value
            ></TextField>
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          endIcon={<AddIcon />}
          sx={{ mt: 1.5 }}
        >
          Add Medicines
        </Button>
      </Box>

      {Medicine.map((meds, index) => {
        return (
          <motion.div layout initial = {{ opacity: 0}} animate = {{ opacity: 1 }} key = { index }>
            <Card variant='outlined' sx={{ marginTop: 2, marginBottom: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={10}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.primary"
                      gutterBottom
                    >
                      {meds.MedName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Morning: {meds.Morning} - Afternoon: {meds.Afternoon} -
                      Night: {meds.Night}
                    </Typography>
                  </CardContent>
                </Grid>

                <Grid item xs={2}>
                  <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
          </motion.div>
        );
      })}

      <Stack spacing={2} direction="row" sx={{ marginTop: 1 }}>
        <Button
          onClick={() => setFormStepper(formStepper-1)}
          fullWidth
          variant="outlined"
          color="secondary"
          startIcon={<NavigateBeforeRoundedIcon />}
        >
          {" "}
          Back{" "}
        </Button>
        <Button
          onClick={ onSubmit }
          fullWidth
          variant="contained"
          color="primary"
          endIcon={<UploadIcon />}
        >
          Upload
        </Button>
      </Stack>
    </div>
  );
}
