import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import React, { useEffect } from 'react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF0000'];

export default function PieDiagram() {
    const data = [];

    useEffect(() => {
        const saves = localStorage.getItem('saved');
        const rent = localStorage.getItem('rent');
        const household = localStorage.getItem('household');
        const living = localStorage.getItem('living');
        const primary = household + living;
        const extras = localStorage.getItem('extras');

        const data = [
            { name: 'Saves', value: saves},
            { name: 'Rent', value: rent },
            { name: 'Primary expenses', value: primary },
            { name: 'Leisure expenses', value: extras },
        ];
    });

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        label
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}