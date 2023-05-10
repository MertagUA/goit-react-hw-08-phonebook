import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from 'utils/spinner';
import { Header } from 'components/Header/Header';
import { Container, Main } from './SharedLayout.styled';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </Container>
  );
};
