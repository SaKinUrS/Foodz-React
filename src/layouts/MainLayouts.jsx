import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function MainLayout() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
