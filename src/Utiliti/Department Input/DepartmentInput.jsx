import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function DepartmentInput({ uploadingDetails, setUploadingDetails }) {

  const handleChange = (event) => {
    const Prescription = uploadingDetails.Prescription
    setUploadingDetails({
      ...uploadingDetails,
      Prescription: {
        ...Prescription,
        department: event.target.value
      }
    })
  }

  return (
    <Stack spacing={2}>
      <Autocomplete
        freeSolo
        id = "free-solo-2-demo"
        disableClearable
        options = { top100Films.map((option) => option.name)}
        onSelect = { handleChange }
        // value = { uploadingDetails.Prescription.department }
        renderInput = { (params) => (
          <TextField
            margin='normal'
            fullWidth
            {...params}
            label="Department"
            onChange = { handleChange }
            InputProps={{...params.InputProps, type: 'search' }}
          />
        )}
      />
    </Stack>
  );
}

// Fetching stored doctor's name
const top100Films = [
  { name: 'General' },
  { name: 'Dermatology' },
  { name: 'Microbiology' },
  { name: 'Cardiology ' },
];
