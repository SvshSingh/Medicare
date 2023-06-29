import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { authentication } from '../../Firebase/config';
import { AuthContext } from '../../Context/AuthenticationContext';



export default function Drawer({ drawerStatus, changeDrawerState, handleToggle, mode }) {

  const [ user] = React.useContext(AuthContext);

  const handleLogout = () => {
    authentication.signOut();
  }
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={changeDrawerState}
      onKeyDown={changeDrawerState}
    >

      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar 
              src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
              alt = "User's profile photo"
            />
          </ListItemAvatar>
          <ListItemText>{user? user.displayName: "Please Login"}</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email'].map((text, index) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        <ListItem>
            <ListItemButton onClick={handleToggle}>
              <ListItemIcon>
                {mode ? <DarkModeIcon fontSize='small' /> : <LightModeIcon fontSize='small' />}
              </ListItemIcon>
              <ListItemText>
                {mode ? 'Dark Mode' : 'Light Mode'}
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      {user && <>
      <Divider />
      <List>
        <ListItem>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText fontSize='small'>
                Logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
      </List> </>
      }
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <SwipeableDrawer
            anchor='left'
            open={drawerStatus}
            onClose={changeDrawerState}
            onOpen={changeDrawerState}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
