import React, {useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {fetchdata, fetchOptions} from '../utils/fetch'
import { Box } from '@mui/system'
import {Typography, Stack} from '@mui/material'
import ExerciseCard from './ExerciseCard'

function ExerciseList({exercises, BodyParts, setexercises}) {

    const [CurrentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(9);

    const indexOfLastExercise = CurrentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) =>{
        setCurrentPage(value);
        window.scrollTo({top: 1800, behavior: 'smooth'});

    }

    useEffect(() =>{

        const fethcExercisedata = async ()=>{
            let exerciseData = [];
            if (BodyParts === 'all'){
                exerciseData = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises`, fetchOptions);
            }else{
                exerciseData = await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${BodyParts}`, fetchOptions);

            }

            setexercises(exerciseData);
        }

        fethcExercisedata();

    },[BodyParts])


  return (
    <Box id='exercises'
    mt='50px'
    p='20px'
    sx={{mt:{lg:'110px'}}}
    >
        <Typography variant='h3' fontWeight='700' mb='45px'>
            Showing resutls
        </Typography>
        <Stack direction='row' sx={{gap:{
            lg:'110px', xs:'45px'
        }}} flexWrap='wrap' justifyContent='center'>
            {currentExercises && currentExercises.map((exercise,index) =>(
                <ExerciseCard key={index} exercise={exercise} />
            ))}

        </Stack>
        <Stack mt='100px' alignItems='center'>
            {exercises.length > 9 && <Pagination color='standard' shape='rounded' count={Math.ceil(exercises.length/9)}
            size='large'
            page={CurrentPage}
            onChange={paginate}
            defaultPage={1}
            />}

        </Stack>

    </Box>
  )
}

export default ExerciseList