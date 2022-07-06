import { Box } from '@mui/material'
import React, {useState} from 'react'
import ExerciseList from '../components/ExerciseList'
import Herobanner from '../components/Herobanner'
import Search from '../components/Search'

function Home() {
    const [exercises, setexercises] = useState([]);
    const [bodyPart, setbodyPart] = useState('all');

    console.log(bodyPart)

  return (
    <Box>
        <Herobanner />
        <Search setexercises={setexercises} BodyParts={bodyPart} setBodyParts={setbodyPart}/>
        <ExerciseList setexercises={setexercises} BodyParts={bodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home