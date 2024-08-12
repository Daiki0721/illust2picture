import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import background from '../images/header.jpg';

console.log(background);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function BoxSystemProps() {
  return (
    <Box>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item  xs={11}>
          <Item>
            <div style={{backgroundImage: `url('${background}')`,
                       backgroundSize: "cover",
                       height: "80vh",
                        }}>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>

  );
}
