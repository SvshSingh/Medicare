import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function DoctorInput({ uploadingDetails, setUploadingDetails }) {
  
  const handleChange = (event) => {
    const Prescription = uploadingDetails.Prescription;
    setUploadingDetails({
      ...uploadingDetails,
      Prescription: {
        ...Prescription,
        doctor: event.target.value
      }
    })
  }

  return (
    <Stack spacing={2}>
      <Autocomplete
        freeSolo
        id = "free-solo-2-demo"
        disableClearable
        onSelect = { handleChange }
        // value = {uploadingDetails.Prescription.doctor}
        options = { top100Films.map((option) => option.title)}
        renderInput = { (params) => (
          <TextField
            margin='normal'
            fullWidth
            onChange = { handleChange }
            value = {uploadingDetails.Prescription.doctor}
            {...params}
            label="Docotr's name"
            InputProps={{...params.InputProps, type: 'search' }}
          />
        )}
      />
    </Stack>
  );
}

// Fetching stored doctor's name
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
];
