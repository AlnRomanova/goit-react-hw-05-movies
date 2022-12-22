import React from 'react';
import { Suspense } from 'react';
import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import css from 'components/Layout/Layout.module.css'


const Layout = () => {
  return (
    <>
    <Navigation/>
    <Suspense className={css.container} fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Layout;
