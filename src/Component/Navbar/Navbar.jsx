import React, { useState, useEffect, useContext } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, MenuItem, ListItemIcon, Divider, Menu, MenuList } from '@mui/material'
import { MenuRounded, Brightness4, Brightness7, Logout } from '@mui/icons-material';
import { authentication } from '../../Firebase/config';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import { AuthContext } from '../../Context/AuthenticationContext';
import { useNavigate, useLocation } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// import Drawer from '../Drawer/Drawer';

// export default function Navbar({ mode, setMode }) {
//     const location = useLocation();
//     const [ user ] = useContext(AuthContext);
//     const [themeMode, setThemeMode] = useState(false);
//     const [drawerStatus, setDrawerStatus] = React.useState(false);
//     const handleLogout = () => {
//         authentication.signOut();
//     }

//     const navigate = useNavigate();

//     const settingNav = () => {
//         navigate('/Settings');
//     }

//     const changeDrawerState = () => {
//       setDrawerStatus(!drawerStatus);
//     }

//     useEffect(() => {
//         console.log("Current Location: ",location.pathname);
//     }, [location])

//     useEffect(() => {
//         const theme = localStorage.getItem('theme');
//         if (theme === 'dark') {
//             setThemeMode(true);
//         }
//         else {
//             setThemeMode(false);
//         }
//     }, [])

//     const handleToggle = () => {
//         setThemeMode(!themeMode);
//         setMode(!mode);
//         const theme = localStorage.getItem('theme');
//         if (theme === 'light') {
//             localStorage.setItem('theme', 'dark');
//         }
//         else localStorage.setItem('theme', 'light');
//     }

//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="fixed" size='small'>
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         onClick={changeDrawerState}
//                         sx={{ mr: 2 }}
//                         >
//                         <MenuRounded />
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         Medicare
//                     </Typography>
//                     {/* <IconButton sx={{ marginLeft: 4}} color="inherit">
//                         <Search sx={{fontSize: 20}} />
//                     </IconButton> */}
//                     <IconButton sx={{ marginLeft: 4}} onClick={handleToggle} color="inherit">
//                        {!themeMode ? <Brightness4 sx={{fontSize: 20}} /> : <Brightness7 sx={{fontSize: 20}} />}
//                     </IconButton>
//                     {user ? <>
//                     <IconButton sx={{ marginLeft: 4}} color="inherit" onClick={handleClick}>
//                         <Avatar sx={{ width: 24, height: 24, fontSize: 16 }}>G</Avatar>
//                     </IconButton>
//                         <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} PaperProps={{
//                             elevation: 0,
//                             sx: {
//                                 overflow: 'visible',
//                                 filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                                 mt: 1.5,
//                                 '& .MuiAvatar-root': {
//                                 width: 28,
//                                 height: 28,
//                                 ml: -0.5,
//                                 mr: 1,
//                                 },
//                                 '&:before': {
//                                 content: '""',
//                                 display: 'block',
//                                 position: 'absolute',
//                                 top: 0,
//                                 right: 14,
//                                 width: 10,
//                                 height: 10,
//                                 bgcolor: 'background.paper',
//                                 transform: 'translateY(-50%) rotate(45deg)',
//                                 zIndex: 0,
//                                 },
//                             },
//                             }}
//                             transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//                             anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//                         >
//                             <MenuList dense>

                            
//                         <MenuItem sx={{margin: 1, borderRadius: 2 }} onClick={handleClose}>
//                             <Avatar sizes='24'/> Rama Chatterjee
//                         </MenuItem>
//                         <MenuItem sx={{margin: 1, borderRadius: 2 }} onClick={handleClose}>
//                             <Avatar sizes='24'/> Sweta Chatterjee
//                         </MenuItem>
//                         <MenuItem sx={{margin:1 ,borderRadius: 2 }} selected onClick={handleClose}>
//                             <Avatar>G</Avatar > Gourav Chatterjee
//                         </MenuItem>
//                         <Divider />
//                         <MenuItem sx={{margin: 1, borderRadius: 2 }} onClick={handleClose}>
//                         <ListItemIcon>
//                             <PersonAdd fontSize="small" />
//                         </ListItemIcon>
//                         Add another account
//                         </MenuItem>
//                         <MenuItem selected = {location.pathname === '/Settings' ? true : false }  sx={{margin: 1, borderRadius: 2 }} onClick={ settingNav }>
//                         <ListItemIcon>
//                             <Settings fontSize="small" />
//                         </ListItemIcon>
//                         Settings
//                         </MenuItem>
//                             <Divider />
//                         <MenuItem sx={{margin: 1, marginBottom: 0, borderRadius: 2 }} onClick={handleLogout}>
//                         <ListItemIcon >
//                             <Logout fontSize="small" />
//                         </ListItemIcon>
//                         Logout
//                         </MenuItem>
//                         </MenuList>
//                     </Menu>
//                     </> : "" }
//                 </Toolbar>
//             </AppBar>
//             <Drawer drawerStatus={drawerStatus} changeDrawerState={changeDrawerState} handleToggle={handleToggle} mode={mode} />
//         </Box>
//     )
// }


import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '45ch',
    },
  },
}));

export default function PrimarySearchAppBar({ mode, setMode }) {

    const [themeMode, setThemeMode] = useState(false);

    const handleToggle = () => {
        setThemeMode(!themeMode);
        setMode(!mode);
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
        }
        else localStorage.setItem('theme', 'light');
    }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MediCare
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => console.log(e.target.value)}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{marginRight: "30px"}}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{marginRight: "30px"}} onClick={handleToggle} color="inherit" size='small'>
                {/* {!themeMode ? <Brightness4 sx={{fontSize: 20}} /> : <Brightness7 sx={{fontSize: 20}} />} */}
                {!themeMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
            // sx={{marginRight: "20px"}}
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}