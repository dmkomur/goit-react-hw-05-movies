import { theme, Container } from './Common/Theme';
import { ThemeProvider } from 'styled-components';
import { Header } from './Header/Header';
import { Trending } from './Trending/Trending';
import { MovieCard } from './MovieCard/MovieCard';
import { Review } from './Review/Reviev';
import { Cast } from './Cast/Cast';
import { Search } from './Search/Search';
export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Trending />
          <MovieCard />
          <Review />
          <Cast />
          <Search />
        </Container>
      </ThemeProvider>
    </div>
  );
};
