import { Container } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Container
        sx={{
          pt: '40px',
          textAlign: 'center',
          // backgroundColor: '#ecf0f3'
        }}
      >
        <h1>Please sign in or log in to use phonebook</h1>
      </Container>
    </main>
  );
}