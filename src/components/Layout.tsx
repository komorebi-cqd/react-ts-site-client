import React from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { Outlet } from 'react-router-dom';
import Header from './Header';


function Layout() {
  return (
    <main className='bg-white dark:bg-black relative min-h-screen'>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <ThemeSwitcher />
          <Header />
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default Layout
