import { Box } from 'components/Common/Box';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StyledLi } from 'components/Trending/Trending.styled';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const location = useLocation();
  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=f140c4b188b236468ca1a6bb203508d7`
      )
      .then(res => setMovies(res.data.results));
  }, [query]);

  const searchHendler = e => {
    e.preventDefault();
    if (e.target.search.value === '') {
      return;
    }
    setSearchParams({ q: e.target.search.value });

    e.target.reset();
  };
  return (
    <Box pd="16">
      <form onSubmit={searchHendler}>
        <input type="text" name="search" />
        <button type="button">Search</button>
      </form>
      <ul>
        {movies &&
          movies.map(el => (
            <StyledLi key={el.id}>
              <NavLink
                to={`/movies/${el.id.toString()}`}
                state={{ from: location }}
              >
                {el.title}
              </NavLink>
            </StyledLi>
          ))}
      </ul>
    </Box>
  );
};
export default Movies;
