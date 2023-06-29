import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function DatePicker({ uploadingDetails, setUploadingDetails }) {
  
  const [value, setValue] = React.useState(null);

  const handleChange = (newValue) => {
    const Prescription = uploadingDetails.Prescription
    setValue(newValue);
    setUploadingDetails({
      ...uploadingDetails,
      Prescription: {
        ...Prescription,
        dateOfVisit: newValue
      }
    })
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label = "Date of visit"
          inputFormat="dd/MM/yyyy"
          value = { value }
          onChange = { handleChange }
          renderInput = { (params) => <TextField margin='normal' {...params} /> }
        />
        {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>
  );
}
