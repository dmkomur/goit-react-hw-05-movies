import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US &api_key=f140c4b188b236468ca1a6bb203508d7`
      )
      .then(res => setReviews(res.data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(el => (
          <li key={el.id}>
            <b>{el.author_details.name}</b>
            <p>{el.content}</p>
            <hr />
          </li>
        ))}
    </ul>
  );
};
