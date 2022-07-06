import React from 'react';
import {Typography, Box, Stack} from '@mui/material';

function ExerciseVideos({name, videodata}) {
  return (
    <Box sx={{
      marginTop:{
        lg:'200px',
        xs:'20px'
      },
      p:'18px',
    }}
    ml={3}
    >
      <Typography variant='h4' mb='35px' ml={1} sx={{
        fontSize:{
          xs:'30px',
        }
      }}>
        Watch <span style={{
          color:'#ff2625',
          fontWeight:'700'
        }}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{
        flexDirection:{
          lg:'row'
        },
        gap:{
          lg:'85px',
          xs:'0px'
        }
      }}>
      {videodata && videodata.slice(0,3).map((video, index) => (
        <a key={index}
        className='exercise-video'
        href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
        target='_blank'
        rel='noreferrer'
        >
          <img loading='lazy' src={video.video.thumbnails[0].url} alt={video.video.title} />
          <Typography variant='h5' color='#000'>
            {video.video.title}
          </Typography>
          <Typography variant='h5' color='#000' style={{opacity:'0.6'}}>
            {video.video.channelName}
          </Typography>

        </a>
      ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos