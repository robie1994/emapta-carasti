import React from 'react';

import SidebarNavs from './SidebarNavs';
import SidebarFooter from './SidebarFooter';
const Sidebar = () => {
  return (
    <div className="border-r-1 relative mx-2 mb-4 h-[95%] min-w-[20%] overflow-x-hidden rounded-md border bg-white p-5">
      <SidebarNavs />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
