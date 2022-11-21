import * as React from 'react';
import AppBar from "../Nav_Bar_cmp/AppBar"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Stack from '@mui/material/Stack';
// import Toolbar from '@mui/material/Toolbar';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import"../Dashboard/Dashboard.css";

const theme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
    <AppBar></AppBar>
      <main>
        <Container sx={{ py: 8 ,mt: 7}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Card
                  sx={{height: '100%',marginLeft:"50px" ,display: 'flex', flexDirection: 'column',alignContent:"center" }}
                >
                  <CardActions>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Report
                    </Typography>
                    <Typography>
                      Here you add your daily report .
                    </Typography>
                  </CardContent>
                    <div className='link'>
                      <Link to='/Report'>Click</Link>
                    </div> 
                  </CardActions>
                </Card>
          </Grid>
        {/* </Container> */}
        {/* <Container sx={{ py: 8}} maxWidth="md"> */}
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Card
                  sx={{height: '100%',marginTop:"50px",marginLeft:"50px" ,display: 'flex', flexDirection: 'column',alignContent:"center" }}
                >
                  <CardActions>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Leave
                    </Typography>
                    <Typography>
                      Here you add your daily report .
                    </Typography>
                  </CardContent>
                    <div className='link'>
                      <Link to='/Leave'>Click</Link>
                    </div>
                  </CardActions>
                </Card>
          </Grid>
        {/* </Container> */}
        {/* <Container sx={{ py: 8 }} maxWidth="md"> */}
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Card
                  sx={{height: '100%',marginTop:"50px",marginLeft:"50px" ,display: 'flex', flexDirection: 'column',alignContent:"center" }}
                >
                  <CardActions>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Status
                    </Typography>
                    <Typography>
                      Here you add your daily report .
                    </Typography>
                  </CardContent>
                    <div className='link'>
                     <Link to='/Status'>Click</Link>
                    </div>
                  </CardActions>
                </Card>
          </Grid>
        </Container>

      </main>
    </ThemeProvider>
  );
}