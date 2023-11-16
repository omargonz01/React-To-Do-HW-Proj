import React, { useState } from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, Snackbar } from '@mui/material';
import '../components/Form/Home.css';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';



const HomePage: React.FC = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Container className="styled-container">
      <Typography variant="h2" className="title">
        Welcome to DoDiligence 
      </Typography>
      <Typography variant="h5">
        Organize your tasks, increase productivity, and achieve more.
      </Typography>

      <Box mt={4}>
        
        <Link to="/create-todo" className="text-decoration-none">
          <Button className="get-started-button" variant="contained" color="primary" size="large" onClick={handleOpenSnackbar}>
            Get Started
          </Button>
        </Link>
      </Box>

      <Box className="card-container">
        <Card style={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random"
            alt="Random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Enjoy \(￣︶￣*\)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Thank you for using the app. Please enjoy some random photos.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity="success">
          Task completed successfully!
        </MuiAlert>
      </Snackbar>
      {/* will place additional MUI components here */}
    </Container>
  );
};

export default HomePage;
