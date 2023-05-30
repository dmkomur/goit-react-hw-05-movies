import { Box } from 'components/Common/Box';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=f140c4b188b236468ca1a6bb203508d7`
      )
      .then(res => setFilm(res.data));
  }, [movieId]);
  return (
    <Box pd="16" dp="flex" gap="16">
      <img href={film?.poster_path} alt="poster" />
      <Box>
        <p>title</p>
        <b>{film?.title}</b>
        <p>overview</p>
        <b>{film?.overview}</b>
      </Box>
    </Box>
  );
};
