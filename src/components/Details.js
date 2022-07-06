import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

function Details({exercisedetails}) {
  const {bodyPart, gifUrl, name, target, equipment} = exercisedetails;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt='Exercise gif' className='detail-image' loading='lazy'/>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '55px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" variant='h3'>
          {name}
        </Typography>
        <Typography sx={{fontSize:{
            lg:'24px', xs:'18px'
        }}} color='#4F4C4C' variant='h6'>
          Exercises keep you healthy. {name}{' '}is a great exercise to target your {target}. It will help you build up your {bodyPart} muscles.
        </Typography>
        {extraDetail.map((detail, index) => (
          <Stack key={index} direction='row' gap='24px' alignItems='center'>
            <Button sx={{background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px'}}>
              <img src={detail.icon} alt='icon' className='icon'/>
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {detail.name}
            </Typography>
          </Stack>
        ))}
      </Stack>

    </Stack>
  )
}

export default Details