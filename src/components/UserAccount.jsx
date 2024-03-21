import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const UserAccount = () => {
  return (
    <div>
      <Header />
      <div className="flex h-screen bg-slate-50 p-10 ">
        <Sidebar />
        {<Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default UserAccount;
