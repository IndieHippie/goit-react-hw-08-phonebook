import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

import ListItem from '@mui/material/ListItem';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '25px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#84ffff'
      }}
    >
      <ListItem
        component={NavLink}
        sx={{
          color: 'white',
          textAlign: 'center',
          minWidth: '100px',
          '&.active': {
            color: '#fff',
             borderBottom: '3px solid #fff',
          },
          '&:hover:not(.active)': {
             borderBottom: '3px solid #fff',
          },
        }}
        to="/register"
      >
        Sign In
      </ListItem>

      <ListItem
        component={NavLink}
        sx={{
          color: 'white',
          textAlign: 'center',

          '&.active': {
            color: '#fff',
             borderBottom: '3px solid #fff',
          },
          '&:hover:not(.active)': {
             borderBottom: '3px solid #fff',
          },
        }}
        to="/login"
      >
        Log In
      </ListItem>
    </Box>
  );
};
