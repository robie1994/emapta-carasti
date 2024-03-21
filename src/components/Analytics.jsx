import React from 'react';
import Fines from './Fines';
import SalikCharges from './SalikCharges';
import Damages from './Damages';
import Graph from './Graph';
import LifetimeTotal from './LifetimeTotal';

const Analytics = () => {
  return (
    <div className="h-full ">
      <div>
        <p className=" mt-2 text-xl font-semibold">Tolls & Fines</p>
        <p className=" text-sm text-zinc-500">View your analytics here.</p>
      </div>
      <div className="mt-5 flex h-full border-t-2 p-5">
        <div className="h-5/6 w-1/2">
          <LifetimeTotal />
          <Graph />
        </div>

        <div className="h-5/6 w-1/2">
          <Fines />
          <SalikCharges />
          <Damages />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
