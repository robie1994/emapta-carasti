import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../utils/utils';
const SidebarNavs = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <>
      {navLinks?.map((link, index) => (
        <div
          onClick={() => setIsActive(index)}
          className={`flex space-x-3 p-2 font-semibold ${isActive === index ? 'rounded-md bg-slate-100 font-bold text-black' : 'text-zinc-600'}`}
          key={index}
        >
          {<link.icon />}
          <Link to={link.path}>{link.name}</Link>
        </div>
      ))}
    </>
  );
};

export default SidebarNavs;
