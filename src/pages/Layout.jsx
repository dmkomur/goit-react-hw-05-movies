import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/Common/Theme';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
