import React from 'react';
import NoUser from '../images/NoUser.jpg';
import { LogOut } from 'lucide-react';
import { useSelector } from 'react-redux';
const SidebarFooter = () => {
  let { image, fname, lname, email } = useSelector((state) => state.user);

  image = image ? image : NoUser;
  return (
    <div className="absolute bottom-0 w-full border-t-2 ">
      <div className="flex w-full p-5">
        <div>
          <div
            className="h-14 w-14 rounded-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        <div className="text-md flex w-11/12 flex-col p-2">
          <div className="w-full">
            <p>
              {fname} {lname}
            </p>
          </div>
          <div className="w-full">
            <p>{email}</p>
          </div>
        </div>
        <div className="text-md flex w-11/12 flex-col p-2">
          <button>
            <LogOut size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
