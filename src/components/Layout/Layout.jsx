import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Mains } from './Layout.styled';
import Spiner from '../Spinner/Spiner';
import { Header } from 'components/Header/Header';

const Layout = () => {
  return (
    <>
      {' '}
      <Header />
      <Mains>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </Mains>
    </>
  );
};
export default Layout;
