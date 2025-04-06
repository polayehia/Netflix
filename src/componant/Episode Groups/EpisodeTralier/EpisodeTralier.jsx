import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { request } from '../../../API/Api';

export default function EpisodeTralier() {
    const { id, season, episode } = useParams();
    console.log('params tralier', { id, season, episode });
    
    const [episodeTrailer, setEpisodeTrailer] = useState(null)
    const episodeTralierFetch = async () => {
        try {
            const { data } = await axios.get(request.tvEpisodeTrailer(id, season, episode))
            setEpisodeTrailer(data.results[0])
            console.log('episodeTrailer', data.results);
        } catch (error) {
            console.log('errorfromepisodeTralierFetch ', error);

        }
    }
    useEffect(() => {
        episodeTralierFetch()
    }, [])

  return (
    <>
    {episodeTrailer ?
            <iframe
            className=" w-[420px] sm:w-[500px] "
            height="315"
            src={`https://www.youtube.com/embed/${episodeTrailer?.key}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={episodeTrailer?.name}
          ></iframe>
        
        
       : <h3 className='text-white font-bold text-3xl'>Trailer Not Found</h3>}
        </>

  )
}
