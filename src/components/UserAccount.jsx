import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const UserAccount = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex h-screen w-full flex-col justify-center bg-slate-50 px-4 pt-6 md:flex-row">
        <Sidebar />
        {<Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;
