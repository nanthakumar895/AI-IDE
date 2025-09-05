import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-facebookGray flex flex-col">
      <Header />
      <div className="flex flex-1 pt-14"> {/* pt-14 to offset fixed header */}
        <Sidebar />
        <main className="flex-1 ml-64 p-4 mt-2"> {/* ml-64 to offset fixed sidebar */}
          <Outlet /> {/* Renders the current route's component */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
