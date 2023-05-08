import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Spinner } from 'utils/spinner';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
