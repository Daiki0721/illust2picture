import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SNS from './ssn.jsx';


export default function Result(props) {
  return (
    <>
      <Container fixed　sx={{ marginTop: '20px',}} id={props.id}>
        <Box sx={{ bgcolor: 'background.paper',
                   height: '80vh', 
                   display: 'flex', 
                   flexDirection: 'column', 
                   justifyContent: 'space-around',　
                   alignItems: 'center',
                   borderRadius: '10% / 50%', }}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '35vh', width: '35vh',}}>
          </Box>
          <SNS url = 'https://daiki0721.github.io/illust2picture' 
                 title = 'Illust2Picture'/>
        </Box>
      </Container>
    </>
  );
}
