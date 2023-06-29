import { useState, useEffect, useContext } from 'react';
import { Authentication, Home, AddReport, Settings } from './Page';
import { Navbar, BottomNav } from './Component';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './Context/AuthenticationContext';
import { DatasetProvider } from './Context/DatasetContext';
import { ColorPalette } from './Context/ThemeContext';


function App() {
  const [ mode, setMode ] = useState(true);
  const [ user ] = useContext(AuthContext);
  const [colorPalette, setColorPalette] = useContext(ColorPalette);

  useEffect( () => {
    const theme = localStorage.getItem('theme');
    if(theme === 'light'){
      setMode(true);
    } else {
      setMode(false);
    }
  }, [])

  const theme = createTheme({
    palette: {
      mode:  mode ? 'light' : 'dark' ,
      primary: colorPalette.primary,
      secondary: colorPalette.secondary,
      background: {
        paper: mode ? '#fff' : '#242526',
        default: mode ? '#fff' : '#18191a'
      }
    },
    typography: {
      fontFamily: [
    //     // 'Josefin Sans', 'sans-serif',
    //     // 'Manrope', 'sans-serif',
    //     // 'Barlow', 'sans-serif'
        'Mulish', 'sans-serif'
            ].join(','),
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

        <BrowserRouter>
          <Navbar setMode = { setMode } mode = { mode } />
          {/* <Sidebar /> */}
          <Routes>
            <Route path = '/' element = { <Home />  } />
            <Route path = '/login' element = { <Authentication /> } />
            <Route path = '/Settings' element = { <Settings /> } />
            
            <Route path = '/New' element = { <DatasetProvider> <AddReport /> </DatasetProvider>} />
            
          </Routes>
          { user ? <BottomNav /> : <> </> }
        </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
