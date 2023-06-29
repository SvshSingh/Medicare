import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  let navigate = useNavigate();

  const handleAddReport = () => {
    navigate("/New");
  }
  
  const handleAllFiles = () => {
    navigate("/");
  }

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
          <BottomNavigationAction onClick = { handleAllFiles } label="All files" icon={<ArticleIcon />} />
          <BottomNavigationAction onClick = { handleAddReport } label="New Report" icon={<AddCircleOutlineIcon />} />
          <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}