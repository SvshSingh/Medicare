import React, { useContext} from 'react'
import { Typography, Button, Paper, Grid, Box } from '@mui/material/';
import { ColorPalette } from '../../Context/ThemeContext';
import { teal,cyan, blueGrey, deepPurple, lightGreen, amber, lime, pink, blue } from '@mui/material/colors';
import { AuthContext } from '../../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import { query, where, collection, updateDoc } from 'firebase/firestore';
import { firestore } from '../../Firebase/config';
import { CgProfile} from 'react-icons/cg'
import { IoIosSettings } from "react-icons/io"
import { MdOutlineModeEditOutline } from "react-icons/md"

export default function Settings() {

  const [ colorPalette, setColorPalette ] = useContext(ColorPalette);
  const themes = [
    { name: 'Amber', color: amber },
    { name: 'Teal', color: teal },
    { name: 'Cyan', color: cyan },
    { name: 'Deep Purple', color: deepPurple },
    { name: 'Light Green', color: lightGreen },
    { name: 'Blue', color: blue },
    { name: 'Lime', color: lime },
    { name: 'Pink', color: pink },
    { name: 'Blue Grey', color: blueGrey },
  ];


  const [ user ] = useContext(AuthContext);
 
    const handleChangeTheme = (theme) => {
      setColorPalette({...colorPalette, primary: theme.color});
      console.log(theme.color[400])
      const q = query(collection(firestore, 'Theme'), where('uid', '==', user.uid));

        const updateData = {
          primary: theme.color
        };
        // Update the documents that match the query
        updateDoc(q, {
          primary: theme.color
        })
          .then(() => {
            console.log('Theme updated successfully');
          })
          .catch((error) => {
            console.error('Error updating Theme: ', error);
          });
    }
  

  return (
    <Box sx={{maxHeight: '100vh'}}>
    <Box sx={{ width: "80%", margin: 'auto', marginTop: 6}}>
      <Grid container>
        <Grid item xs={4}>
          <Button fullWidth variant='text' startIcon={<CgProfile />}>Profile</Button> <br />
          <Button sx = {{}} fullWidth variant='text' startIcon={<MdOutlineModeEditOutline />}>Theme</Button> <br />
          <Button fullWidth variant='text' startIcon={<IoIosSettings/>}>Account</Button><br />

        </Grid>
        <Grid item xs={8}>
        <Paper sx={{padding: 3}} variant='outlined'>
          <Typography variant='h6'>Themes</Typography>
          {themes.map(theme => (
            <Button
              key={theme.name}
              sx={{ margin: 1, backgroundColor: theme.color[500]} }
              variant='contained'
              onClick={() => handleChangeTheme(theme)}
            >
              {theme.name}
            </Button>
          ))}

      </Paper>
        </Grid>
      </Grid>


        
    </Box>
    </Box>
  )
}
