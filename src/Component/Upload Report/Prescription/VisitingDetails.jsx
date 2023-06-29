import React, {useState, useContext } from 'react'
import { DatasetContext } from '../../../Context/DatasetContext';
// import { DatePicker, DoctorInput, DepartmentInput } from '../../../Utiliti';
import { Typography, Box, Button, Stack, Autocomplete, TextField } from '@mui/material'; 
import { motion } from 'framer-motion';
import NavigateNext from '@mui/icons-material/NavigateNext';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useForm } from 'react-hook-form';

export default function VisitingDetails() {
    
    const { register, handleSubmit, formState: {errors} } = useForm({ doctor: "", department: "", date: null});
    const [ dataset, setDataset, formStepper, setFormStepper ] = useContext(DatasetContext);

    const onSubmit = (data) => {
        setDataset({
            ...dataset,
            Prescription: {
                ...dataset.Prescription,
                doctor: data.doctor,
                department: data.department,
                date: data.date
            }
        })

        setFormStepper(formStepper+1);
    }

    const [value, setValue] = useState(null);

    const handleChangeDate = (newValue) => {
        setValue(newValue);
      };

    return (
        <motion.div initial = {{ opacity: 0 }} animate = {{ opacity: 1 }}>
            <Box component="form" onSubmit = {handleSubmit(onSubmit)} className = "step2" sx = {{ marginTop: 4 }}>
                <Typography sx = {{ textAlign: 'center'}}>Tell us about your doctor's visit</Typography>
                
            <Stack spacing={2}>
                <Autocomplete
                    freeSolo
                    id = "free-solo-2-demo"
                    disableClearable
                    options = { top100Films.map((option) => option.title)}
                    renderInput = { (params) => (
                        <TextField
                            {...params}
                            {...register("doctor", {required: "Please enter doctor's name"})}
                            margin='normal'
                            fullWidth
                            error = {errors.doctor ? true : false}
                            // value = {uploadingDetails.Prescription.doctor ? uploadingDetails.Prescription.doctor : null}
                            label="Docotr's name"
                            InputProps={{...params.InputProps, type: 'search' }}
                        />
                    )}
                />
            </Stack>
                {errors.doctor ? <Typography variant='caption' color="error" sx = {{ margin: 0, padding: 0 }}>{errors.doctor.message}</Typography> : ""}

            <Stack spacing={2}>
                <Autocomplete 
                    freeSolo 
                    id = "free-solo-2-demo" 
                    disableClearable
                    options = { department.map((option) => option.name)}
                    renderInput = { (params) => (
                    <TextField margin='normal' fullWidth
                        {...params}
                        {...register("department" ,{required: "Please Enter doctor's department"})}
                        label = "Department"
                        error = { errors.department ? true : false }
                        InputProps = {{...params.InputProps, type: 'search' }}
                        // value = {uploadingDetails.Prescription.department}
                    />
                    )}
                />
            </Stack>
            {errors.department ? <Typography variant='caption' color="error" sx = {{ margin: 0, padding: 0 }}>{errors.department.message}</Typography> : ""}


            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                    label = "Date of Appoinment"
                    inputFormat="dd/MM/yyyy"
                    value = { value }
                    onChange = { handleChangeDate }
                    renderInput = { (params) => 
                        <TextField 
                            margin='normal' 
                            {...params} 
                            {...register("date", {required: "Please select a date"})}
                            error = {errors.date ? true : false}
                        /> }
                    />
                </Stack>
                {errors.date ? <Typography variant='caption' color="error" sx = {{ margin: 0, padding: 0 }}>{errors.date.message}</Typography> : ""}
        </LocalizationProvider>


                <Stack spacing = { 2 } direction = 'row' sx = {{ marginTop: 1 }}>
                    <Button 
                        onClick = { () => setFormStepper(formStepper-1) } 
                        fullWidth 
                        variant = 'outlined' 
                        color = 'secondary' 
                        startIcon = { <NavigateBeforeRoundedIcon />} 
                    >
                        Back
                    </Button>
                    <Button 
                        type = "submit"
                        fullWidth 
                        variant = 'contained' 
                        color = 'primary' 
                        endIcon = { <NavigateNext />} 
                    >
                        Next
                    </Button>
                </Stack>
            </Box>
        </motion.div>
    )
}


// Fetching stored doctor's name
const top100Films = [
    { title: 'Dr. Roberto Borgella'},
    { title: 'Dr. Jaden Langbehn' },
    { title: 'Dr. Xander Slyton' },
    { title: 'Dr. Roman Verdone' }
  ];


  // Fetching stored doctor's name
const department = [
    { name: 'General' },
    { name: 'Dermatology' },
    { name: 'Microbiology' },
    { name: 'Cardiology ' },
  ];
  