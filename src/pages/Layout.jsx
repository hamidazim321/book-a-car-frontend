import React from 'react';
import { Outlet } from 'react-router';
import NavigationPanel from '../components/NavigationPanel';

export default function Layout() {
  return (
    <main className="flex">
      <section className="w-min border-black fixed left-0 top-0 md:static">
        <NavigationPanel />
      </section>
      <section className="flex-grow border-black px-2">
        <Outlet />
      </section>
    </main>
  );
}
