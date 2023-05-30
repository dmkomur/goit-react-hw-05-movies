import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [stars, setStars] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US &api_key=f140c4b188b236468ca1a6bb203508d7`
      )
      .then(res => setStars(res.data.cast));
  }, [movieId]);

  return (
    <ul>
      {stars &&
        stars.map(el => (
          <li key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${el.profile_path}`}
              alt="poster"
              width="100"
            />
            <p>{el.character}</p>
            <b>{el.name}</b>
            <hr />
          </li>
        ))}
    </ul>
  );
};
