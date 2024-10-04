import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SNS from './ssn.jsx';


export default function Result() {
  return (
    <>
      <Container fixed　sx={{ marginTop: '20px'　}}>
        <Box sx={{ bgcolor: 'background.paper', height: '80vh' }}>
          <SNS url = 'https://daiki0721.github.io/illust2picture' 
               title = 'Illust2Picture'
          />
        </Box>
      </Container>
    </>
  );
}
