import React from 'react';
import { tabOptions } from '../utils/utils';

const UserTabs = ({ selectedTab, setSelected }) => {
  return (
    <div className=" flex min-h-[65px] flex-col overflow-x-auto rounded border bg-slate-50 p-2 font-medium text-zinc-500 md:flex-row">
      {tabOptions?.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className={`m-1 h-8 w-auto min-w-24 rounded px-2 text-center font-semibold hover:bg-slate-300 
      ${selectedTab === index ? ' rounded-md bg-white  text-zinc-800 shadow-lg' : ''} `}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default UserTabs;
