import { StyledLi } from './Trending.styled';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Trending = () => {
  const [movies, setMovies] = useState();
  const location = useLocation();
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=f140c4b188b236468ca1a6bb203508d7'
      )
      .then(response => {
        setMovies(response.data.results);
      });
    // fetchTrands();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map(el => (
            <StyledLi key={el.id}>
              <NavLink
                to={`movies/${el.id.toString()}`}
                state={{ from: location }}
              >
                {el.title}
              </NavLink>
            </StyledLi>
          ))}
      </ul>
    </div>
  );
};
