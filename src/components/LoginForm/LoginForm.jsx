import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

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
        label="Email"
        type="email"
        name="email"
      />

      <TextField
        sx={{ width: 400 }}
        id="standard-basic"
        variant="standard"
        label="Password"
        type="password"
        name="password"
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
        Log In
      </Button>
    </Box>
  );
};
