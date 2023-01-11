import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import logo from '../assets/images/fitwork_logo-lg.png';
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' display='flex' justifyContent='center'>
      <Stack gap='40px' alignItems='center' px='40px' pt='20px'>
        <img src={logo} alt='logo' width='250px' height='120px' />
        <Typography variant='h5' pb='20px' textAlign='right' pr='30px'>
          Made with ❤️ by Baruf Kosgei &copy; year {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
