import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Notiflix from 'notiflix';

import { register } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth.js';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  if (error) {
    Notiflix.Notify.failure('Something is going wrong. Please try again.');
  }

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        pt: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        m: 5,
      }}
    >
      <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        variant="standard"
        label="Name"
        type="text"
        name="name"
        required
      />

      <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        variant="standard"
        label="Email"
        type="email"
        name="email"
        required
      />

      <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        variant="standard"
        label="Password"
        type="password"
        name="password"
        required
      />

      <Button
        sx={{
          height: 45,
          width: 140,
          mt: '20px',
          color: '#212121',
          backgroundColor: '#f5f4fa',
          borderRadius: '5px',

          '&:hover:not(.active)': {
            color: '#fff',
            backgroundColor: '#188ce8',
          },
        }}
        type="submit"
        variant="contained"
      >
        Sign In
      </Button>
    </Box>
  );
};
