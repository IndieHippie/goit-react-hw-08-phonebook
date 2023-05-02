import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/material';
import { AiOutlineHome } from 'react-icons/ai';
import { RiContactsBookLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/useAuth.js';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        gap: '25px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ListItem
        component={NavLink}
        sx={{
          color: 'white',

          '&.active': {
            color: 'solid#84ffff',
            borderBottom: '3px solid #fff',
          },
          '&:hover:not(.active)': {
            borderBottom: '3px solid #fff',
          },
        }}
        to="/"
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <AiOutlineHome />
          <span>Home</span>
        </Box>
      </ListItem>

      {isLoggedIn && (
        <ListItem
          component={NavLink}
          sx={{
            color: 'white',

            '&.active': {
              color: 'solid#84ffff',
              borderBottom: '3px solid #fff',
            },
            '&:hover:not(.active)': {
              borderBottom: '3px solid #fff',
            },
          }}
          to="/contacts"
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <RiContactsBookLine />
            <span>Contacts</span>
          </Box>
        </ListItem>
      )}
    </Box>
  );
};
