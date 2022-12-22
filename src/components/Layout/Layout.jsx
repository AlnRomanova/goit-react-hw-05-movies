import React from 'react';
import { Suspense } from 'react';
import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Navigation/>
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Layout;
