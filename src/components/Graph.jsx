import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Graph = () => {
  const data = [
    { name: 'Paid', value: 3900, color: '#2dd4bf' },
    { name: 'Unpaid', value: 1300, color: '#dc2626' },
  ];
  const renderCustomLabel = ({ value, x, y }) => {
    return (
      <g>
        <rect
          x={x - 40}
          y={y - 15}
          width={80}
          height={30}
          fill="#71717a"
          rx={5}
        />
        <text
          x={x}
          y={y}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {`${value} AED`}
        </text>
        <text
          x={x + 70}
          y={y + 70}
          fill="#71717a"
          textAnchor="middle"
          dominantBaseline="central"
        >
          80% PAID
        </text>
      </g>
    );
  };
  return (
    <div className="mt-5 h-3/4 w-3/4 rounded-md border border-slate-300 p-2">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width="100%" height="100%">
          <Legend verticalAlign="top" />
          <Pie
            activeIndex={1}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
