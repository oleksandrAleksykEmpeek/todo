import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import './Layout.scss';

const Layout = ({ children }) => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <div className="layout">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="layout-body">
        <Sidebar isSidebarExpanded={isSidebarExpanded} pathname={pathname} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
