import { Box} from '@mui/system'
import { Typography, Button, Stack} from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

function Herobanner() {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="18px" mt="18px">
      Sweat, Work <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises to get started
    </Typography>
    <Button variant="contained" href='#exerciselist' color='error' sx={{mt:'20px', padding:'10px'}}>Explore exercises</Button>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default Herobanner