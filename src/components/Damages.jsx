import React from 'react';
import { ArrowDown } from 'lucide-react';
import { damagesData } from '../utils/utils';
import Chart from './Chart';

const Damages = () => {
  return (
    <div className="mt-4 h-24 w-3/4 rounded-md border border-slate-300 p-2">
      <div className="flex">
        <div className="w-5/6 ">Damages</div>
        <div className=" text-sm text-zinc-500">2023</div>
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div className="text-xl font-bold">AED 1,000</div>
          <div className="flex text-sm">
            <span className="flex  text-green-700">
              <ArrowDown size={16} /> 10%&nbsp;
            </span>
            vs last year
          </div>
        </div>
        <Chart data={damagesData} stroke={'#2dd4bf'} />
      </div>
    </div>
  );
};

export default Damages;
