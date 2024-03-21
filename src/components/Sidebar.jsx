import React from 'react';

import SidebarNavs from './SidebarNavs';
import SidebarFooter from './SidebarFooter';
const Sidebar = () => {
  return (
    <div className="relative h-5/6 w-1/4 px-5 pb-2 pt-6">
      <div className="border-r-1 relative h-full overflow-x-hidden rounded-md border bg-white p-5">
        <SidebarNavs />
        <SidebarFooter />
      </div>
    </div>
  );
};

export default Sidebar;
