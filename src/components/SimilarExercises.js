import React from 'react';
import {Typography, Box, Stack} from '@mui/material';
import HorizontalData from './HorizontalData';
import Loader from './Loader';

function SimilarExercises({equipments, targetmuscles}) {
  return (
    <>
    <Box sx={{ mt: { lg: '100px', xs: '40px' } }} ml={2}>
      <Typography variant='h4' mb='35px' ml={4} sx={{
        fontSize:{
          xs:'30px',
        }
      }}>Exercises targeting the same <span style={{color:'#ff2625', fontWeight:'700'}}>Muscle group</span></Typography>
      <Stack direction='row' sx={{
        p:'2',
        position:'relative'
      }}>
        {targetmuscles.length? <HorizontalData data={targetmuscles} />:<Loader />}

      </Stack>
    </Box>
    <Box sx={{ mt: { lg: '100px', xs: '40px' } }} ml={2}>
      <Typography variant='h4' mb='35px' ml={4} sx={{
        fontSize:{
          xs:'30px',
        }
      }}>Exercises using the same <span style={{color:'#ff2625', fontWeight:'700'}}>Equipments</span></Typography>
      <Stack direction='row' sx={{
        p:'2',
        position:'relative'
      }}>
        {equipments.length? <HorizontalData data={equipments} />:<Loader />}

      </Stack>
    </Box>
    </>
  )
}

export default SimilarExercises