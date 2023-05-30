import { theme } from './Common/Theme';
import { ThemeProvider } from 'styled-components';
import { Trending } from './Trending/Trending';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Trending />} />
            <Route path="movies" element={<Movies />}>
              <Route path=":movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Layout />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
