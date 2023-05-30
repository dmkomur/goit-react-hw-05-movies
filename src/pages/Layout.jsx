import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Common/Theme';
export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
