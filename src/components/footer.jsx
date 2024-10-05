import CustomBottomNavigation from './bottom_navigation';
import background from "../images/header.jpg";
import Container from '@mui/material/Container';


export default function Footer() {
  return (
    <Container sx={{marginTop: '20px', height: '20vh',}}>
      <CustomBottomNavigation/>
    </Container>
  );
};