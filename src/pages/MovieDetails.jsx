import { Box } from 'components/Common/Box';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state.from ?? '/';
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=f140c4b188b236468ca1a6bb203508d7`
      )
      .then(res => setFilm(res.data));
  }, [movieId]);
  return (
    <>
      <button type="button" onClick={() => navigate(backLink)}>
        Go home
      </button>
      <Box pd="16" dp="flex" gap="16">
        <img
          src={`https://image.tmdb.org/t/p/original${film?.poster_path}`}
          alt="poster"
          width="240"
        />
        <Box>
          <p>title</p>
          <b>{film?.title}</b>
          <p>overview</p>
          <b>{film?.overview}</b>
          <p>rating</p>
          <b>{film?.vote_average}</b>
        </Box>
      </Box>
      <p>Additional information</p>
      <Box dp="flex" gap="16" color="lightgrey">
        <Link to="cast" state={{ from: location.state.from }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state.from }}>
          Reviews
        </Link>
      </Box>
      <Outlet />
    </>
  );
};
export default MovieDetails;
