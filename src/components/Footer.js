import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#faf0f4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="28px">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '30px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="24px" textAlign="center" pb="40px">Made with ❤️ by <a href='https://Github.com/Sadeedpv' style={{
      textDecoration: 'none',
    }}>Sadeedpv</a></Typography>
  </Box>
);

export default Footer;