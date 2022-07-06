import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {fetchdata, fetchOptions, youtubeOptions} from '../utils/fetch'
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Details from '../components/Details';
import Loader from '../components/Loader';

function Exercises() {
  const [exercisedetails, setexercisedetails] = useState({});
  const [videoState, setvideoState] = useState([]);
  const [target, settarget] = useState([]);
  const [equipment, setequipment] = useState([]);
  const {id} = useParams();

  useEffect(() =>{

    //  Fetch data with different urls 
    
    const fetchExercisedetails = async ()=>{
      const exercisedburl = 'https://exercisedb.p.rapidapi.com';
      const youtubeurl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exercisedbdetails = await fetchdata(`${exercisedburl}/exercises/exercise/${id}`, fetchOptions);
      setexercisedetails(exercisedbdetails);

      const videoData = await fetchdata(`${youtubeurl}/search?query=${exercisedbdetails.name}`, youtubeOptions);
      setvideoState(videoData.contents);

      const targetmusclesData = await fetchdata(`${exercisedburl}/exercises/target/${exercisedbdetails.target}`, fetchOptions);
      settarget(targetmusclesData);
      const equipmentData = await fetchdata(`${exercisedburl}/exercises/equipment/${exercisedbdetails.equipment}`, fetchOptions);
      setequipment(equipmentData);
    }

    fetchExercisedetails();

  },[id])
  return (
    <Box>
       <Details exercisedetails={exercisedetails} />
      {videoState.length? <ExerciseVideos videodata={videoState} name={exercisedetails.name}/>:<Loader />}
      <SimilarExercises targetmuscles={target} equipments={equipment}/>
    </Box>
  )
}

export default Exercises