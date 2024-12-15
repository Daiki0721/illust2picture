import React, { useState, useEffect} from "react";


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ForwardIcon from '@mui/icons-material/Forward';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Link } from "react-scroll";

import axios from 'axios';

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
  const [formData, setFormData] = useState();
  const [createdImage, setCreatedImage] = useState();


  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));

    const files = e.target.files;
    if (!files) return;
    console.log(files)
    setFormData(...files);
    console.log(formData)
  };

  const handleUploadClick = (e) => {
    alert('Clicked!');
    console.log('Button clicked');
    let data = new FormData();
    data.append('contents_image', formData);
    data.append('style_num', 1);
    

    axios.post('http://127.0.0.1:8000/black_and_white_api/uploadimage/', data,
        {headers: {'content-type': 'multipart/form-data',},}
    )
      .then(res => {setCreatedImage(res.data)})
      .catch((err) => console.log(err))

      // 親のコンポートメントにdataを渡す。
      props.handleValueChange(createdImage);
  };
  
  console.log(createdImage);

  
  const [style, setStyles] = useState();

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/black_and_white_api/styles/2/')
        .then(res => {setStyles(res.data)});
  }, []);
  
  console.log(style);
  
  

  return (
  <Container fixed id={props.id}>
      <Grid 
      sx={{ bgcolor: 'background.paper',
      borderRadius: '10% / 50%', 
      height: '80vh',}}
      container spacing={2}　
      columns={{ xs: 12, sm: 12, md: 12, xl: 12, xxl: 4,}}
      justifyContent="space-evenly"
      alignItems="center" 
      >  
        <Grid container item justifyContent="center"  >
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
        <Grid container item justifyContent="center" >
          <Box sx={{ bgcolor: '#cfe8fc', height: '35vh', width: '35vh',}}>
            <img src={file} alt=""  oblectFit='cover' height='100%' width='100%' />
          </Box>
        </Grid>
        <Grid container item justifyContent="center"  >
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={0}
            startIcon={<ForwardIcon />}
            >
            　{/*
  　　　　　　　<Link
                to="submit"
                spy={true}
                smooth={true}
                duration={500}
              > */}
         　　　
              Submit
                <VisuallyHiddenInput type="submit" onClick={(e) => handleUploadClick(e)} />
              {/* </Link> */}
          </Button>
        </Grid>
      </Grid>
    {/* <p><img src={style?.style_image} alt="" height='50px' width='50px'/></p> */}
  </Container>
  );
}
