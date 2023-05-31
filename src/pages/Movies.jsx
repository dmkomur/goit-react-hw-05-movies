import { Box } from 'components/Common/Box';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useSearchParams.length('q');
  const searchHendler = e => {
    e.preventDefault();
  };
  return (
    <Box pd="16">
      <form>
        <input type="text" name="search" />
        <button type="button">Search</button>
      </form>
      <ul></ul>
    </Box>
  );
};
