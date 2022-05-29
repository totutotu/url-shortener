import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>Url Shortener</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar;