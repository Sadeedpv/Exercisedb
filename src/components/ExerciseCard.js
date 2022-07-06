import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Typography, Stack, Button} from '@mui/material'

function ExerciseCard({exercise}) {
  return (
    <Link to={`/exercises/${exercise.id}`} className='exercise-card'>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction='row'>
            <Button sx={{
                ml:'21px',
                color:'#fff',
                textTransform:'capitalize',
                fontSize:'14px',
                borderRadius:'20px',
                background:'#ffa9a9',
            }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{
                ml:'21px',
                color:'#fff',
                textTransform:'capitalize',
                fontSize:'14px',
                borderRadius:'20px',
                background:'#fcc757',
            }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml='21px' mt='11px' textTransform='capitalize' fontWeight='bold' fontSize='24px' pb='10px'>{exercise.name}</Typography>
    </Link>
  )
}

export default ExerciseCard