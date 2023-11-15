import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import '../components/Form/Home.css';



const HomePage: React.FC = () => {
  return (
    <Container className="styled-container">
      <Typography variant="h2" className="title">
        Welcome to DoDiligence 
      </Typography>
      <Typography variant="h5">
        Organize your tasks, increase productivity, and achieve more.
      </Typography>
      <Box>
        <Button className="get-started-button" variant="contained" color="primary" size="large">
          Get Started
        </Button>
        
      </Box>
    </Container>
  );
};

export default HomePage;
