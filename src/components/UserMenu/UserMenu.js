import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { AiOutlineUser } from 'react-icons/ai';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <AiOutlineUser />
        <p
          sx={{
            color: '#18ffff',
            display: 'inline-Block',
          }}
        >
          {user.name}
        </p>
      </Box>

      <ListItem
        component={NavLink}
        sx={{
          marginLeft: '40px',
          color: 'white',
          textAlign: 'center',
          width: 'auto',
          '&:hover:not(.active)': {
            borderBottom: '3px solid #fff',
          },
        }}
        onClick={() => dispatch(logOut())}
        to="/"
      >
        Log Out
      </ListItem>
    </Box>
  );
};
