import React from 'react';
import { ArrowDown } from 'lucide-react';
import Chart from './Chart';
import { salikCharges } from '../utils/utils';
const Fines = () => {
  return (
    <div className="min-h-24 min-w-[3/4] rounded-md border border-slate-300 p-2">
      <div className="flex">
        <div className="w-5/6 ">Fines</div>
        <div className=" text-sm text-zinc-500">2023</div>
      </div>
      <div className="flex flex-col md:flex-row  ">
        <div className="w-3/4">
          <div className="text-xl font-bold">AED 3,000</div>
          <div className="flex text-sm">
            <span className="flex  text-green-700">
              <ArrowDown size={16} />
              10%&nbsp;
            </span>
            vs last year
          </div>
        </div>

        <div>
          <Chart data={salikCharges} stroke={'#2dd4bf'} />
        </div>
      </div>
    </div>
  );
};

export default Fines;
