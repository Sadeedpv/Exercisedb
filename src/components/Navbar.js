import { Stack } from '@mui/material';
import React from 'react';
import Logo from '../assets/images/Logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{
    gap:{
        sm:'122px',
        xs:'40px'
    },
    mt:{
        sm:'25px',
        xs:'20px'
    },
    justifyContent:'none',
    }} px='20px'>
        <Link to='/'>
            <img src={Logo} alt='logo' style={{
                width:'48px',
                height:'48px',
                margin:'0 24px',
            }}/>
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
            <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
            <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }} className='link'>Exercises</a>

        </Stack>
    </Stack>
  )
}

export default Navbar