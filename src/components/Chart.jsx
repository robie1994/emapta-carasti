import React from 'react';
import { Line, LineChart } from 'recharts';

const Chart = ({ data, stroke }) => {
  return (
    <div className="">
      <LineChart width={90} height={50} data={data}>
        <Line
          type="monotone"
          dataKey="amount"
          stroke={stroke}
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
