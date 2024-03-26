import React from 'react';
import { ArrowUp } from 'lucide-react';
import Chart from './Chart';
import { finesData } from '../utils/utils';

const SalikCharges = () => {
  return (
    <div className="mt-4 min-h-24 min-w-[3/4] rounded-md border border-slate-300 p-2">
      <div className="flex">
        <div className="w-5/6 ">Salik Charges</div>
        <div className=" text-sm text-zinc-500">2023</div>
      </div>
      <div className="flex flex-col md:flex-row  ">
        <div className="w-3/4">
          <div className="text-xl font-bold">AED 1,200</div>
          <div className="flex text-sm">
            <span className="flex  text-red-500">
              <ArrowUp size={16} /> 40%&nbsp;
            </span>
            vs last year
          </div>
        </div>

        <Chart data={finesData} stroke={'#dc2626'} />
      </div>
    </div>
  );
};

export default SalikCharges;
