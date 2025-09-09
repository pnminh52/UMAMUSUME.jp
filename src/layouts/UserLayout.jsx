import React from "react";
import { Outlet } from "react-router-dom";
import Footer from './../components/etc/Footer';
import Header from './../components/etc/Header';

const UserLayout = () => {
  return (
    <div className="">
    

   <Header />
        <Outlet />
      <Footer />

    
    </div>
  );
};

export default UserLayout;
