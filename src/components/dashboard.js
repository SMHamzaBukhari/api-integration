import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link , Route , Routes ,BrowserRouter } from 'react-router-dom';
import Photos from './photos'
import Users from './users'
import Todos from './todos'
import Comments from './comments'
import Albums from './albums'
import Posts from './posts'





const drawerWidth = 240;

export default function Dashboard() {


    const Navigation = (path) =>{
console.log(path)
    }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
Api Rendering    
      </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Photos','Todos','Albums','Comments','Posts','Users'].map((text, index) => (
            <ListItem key={text} disablePadding component={Link} to={"/" + text}>
              <ListItemButton onClick={()=>{Navigation(text)}}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Routes>
             <Route end={true} path='/' element={<Dashboard />}></Route>
            <Route path="/Photos" element={<Photos />}></Route> 
            <Route path="/Albums" element={<Albums />}></Route>
            <Route path="/Todos" element={<Todos />}></Route>
            <Route path="/Users" element={<Users />}></Route>
            <Route path="/Posts" element={<Posts />}></Route>
            <Route path="/Comments" element={<Comments />}></Route> 
            
            </Routes>
      </Box>
    </BrowserRouter>
    </Box>
  );
}