import React from 'react';
import { tabOptions } from '../utils/utils';

const UserTabs = ({ selectedTab, setSelected }) => {
  return (
    <div className="h-18 w-autoflex  rounded border bg-slate-50 p-2 font-medium text-zinc-500">
      {tabOptions?.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className={`m-1 h-10 w-auto min-w-24 rounded px-2 text-center hover:bg-slate-300 
      ${selectedTab === index ? ' rounded-md bg-white font-semibold text-zinc-600 shadow-lg' : ''} `}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default UserTabs;
