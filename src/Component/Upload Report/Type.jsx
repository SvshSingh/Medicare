import React, { useState, useContext } from 'react';
import { DatasetContext } from '../../Context/DatasetContext';
import { Typography, FormControl, InputLabel, Select, MenuItem, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import NavigateNext from '@mui/icons-material/NavigateNext';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import uniqid from 'uniqid';


export default function Type() {
  
  const [ error, setError ] = useState({
      state: false,
      msg: null
    }
  );
  const [ dataset, setDataset, formStepper, setFormStepper ] = useContext(DatasetContext);

  var date = new Date();

  const handleSubmit = (event) => {
    if ( dataset.Type === ''){
      setError({
        state: true,
        msg: 'Please select an option'
      })
    }
    else {
      setFormStepper(formStepper+1);
    }
  }

  const handleChange = (e) => {
    setError({ state: false, msg: null })
    setDataset({...dataset, Type: e.target.value, docId: uniqid(),
      dateofCreation: date.getTime(),});
  }

  return (
    <motion.div initial = {{ opacity: 0 }} animate = {{ opacity: 1 }} className = "step1">
      <Typography variant='subtitle1' color = '' sx = {{ marginTop: 5, textAlign: 'center' }}>
        Start by Selecting the type of report you want to create
      </Typography>
      <FormControl 
        error = { error.state ? true : false }
        fullWidth 
        sx = {{ marginTop: 2, marginBottom: 0 }}
      >
          <InputLabel id="demo-simple-select-label">Type</InputLabel>

          <Select
              labelId = "demo-simple-select-label"
              id = "demo-simple-select"
              value = { dataset.Type }
              label = "Type"
              onChange = { handleChange }
          >
              <MenuItem value = 'Prescription'>Prescription</MenuItem>
              <MenuItem value = 'Lab report' disabled>Lab report</MenuItem>
          </Select>

      </FormControl>
      { error.state ? <Typography variant = 'caption' color = 'error' >{error.msg}</Typography> : <></> }

      <Stack spacing = { 2 } direction = 'row' sx = {{ marginTop: 2 }}>
        <Button fullWidth variant = 'outlined' color = 'secondary' endIcon = { <CloseRoundedIcon />} >
            Cancel
        </Button>
        <Button onClick = { handleSubmit } fullWidth variant = 'contained' color = 'primary' endIcon = { <NavigateNext />} >
            Next
        </Button>
      </Stack>
    </motion.div>
    );
}
