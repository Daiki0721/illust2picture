import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ForwardIcon from '@mui/icons-material/Forward';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Link } from "react-scroll";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload(props) {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  

  return (
  <Container fixed id={props.id}>
    <Box sx={{ bgcolor: 'background.paper',
               borderRadius: '10% / 50%', 
               height: '80vh',
               display: 'flex',
               justifyContent: 'space-evenly',
               alignItems: 'center'}}>
      <Grid 
      container spacing={2}　
      columns={{ xs: 12, sm: 12, md: 12, xl: 4,}}
      justifyContent="space-evenly"
      alignItems="center" >  
        <Grid container item justifyContent="center" xs={12} sm={12} md={4} xl={4} xxl={4} >
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleChange} />
          </Button>
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={12} md={4} xl={4} xxl={4}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '35vh', width: '35vh',}}>
            <img src={file} alt=""  oblectFit='cover' height='100%' width='100%' />
          </Box>
        </Grid>
        <Grid container item justifyContent="center"  xs={12} sm={12} md={4} xl={4} xxl={4}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<ForwardIcon />}>
              <Link
                to="submit"
                spy={true}
                smooth={true}
                duration={500}
              >
                Submit
                <VisuallyHiddenInput type="submit" />
              </Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Container>
  );
}
