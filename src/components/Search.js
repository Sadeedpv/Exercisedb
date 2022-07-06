import React, { useEffect, useState } from 'react';
import { Typography, Button, Stack, TextField} from '@mui/material'
import { Box } from '@mui/system';
import {fetchOptions, fetchdata} from '../utils/fetch'
import HorizontalData from './HorizontalData';


function Search({setexercises, BodyParts, setBodyParts}) {
    const [Input, setInput] = useState('');
    const [bodyPart, setbodyPart] = useState([]);

    useEffect(() =>{
        const fetchBodyPartexercises = async() =>{
            const response = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, fetchOptions);
            setbodyPart(['all', ...response]);
        }

        fetchBodyPartexercises();
    }, [])

    const handleClick = async () => {
        //  fetchdata is comiing from the utils file
        if (Input){
            const exercisedata = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises`, fetchOptions);

            const filterdExercises = exercisedata.filter(exercise => 
                exercise.name.toLowerCase().includes(Input.toLowerCase())
                || exercise.target.toLowerCase().includes(Input.toLowerCase())
                || exercise.equipment.toLowerCase().includes(Input.toLowerCase())
                || exercise.bodyPart.toLowerCase().includes(Input.toLowerCase())
                );
                
            setInput('');
            setexercises(filterdExercises);

            
        }
    }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography  fontWeight='700' textAlign='center' mb='50px' sx={{
            fontSize: { lg: '44px', xs: '30px' },
        }}>
            Awesome exercises you <br /> should know!
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField sx={{
                input:{
                    fontWeight:'700',
                    borderRadius:'4px',
                    border:'none'
                },
                width:{
                    lg:'1170px', xs:'350px'
                },
                backgroundColor:'#FFF',
            }}
            height='76px'
            placeholder='Search for exercises'
            type='text'
            value={Input}
            onChange={(e)=>setInput(e.target.value.toLowerCase())}

            >
            </TextField>
            <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleClick}>Search</Button>
        </Box>
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
            <HorizontalData data={bodyPart} BodyParts={BodyParts} setBodyParts={setBodyParts} isBodyPart/>
        </Box>
    </Stack>
  )
}

export default Search