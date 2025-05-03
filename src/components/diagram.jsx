import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import React, { useEffect, useState } from 'react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF0000'];

export default function PieDiagram() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saves = Number(localStorage.getItem('saved') || 0);
    const rent = Number(localStorage.getItem('rent') || 0);
    const household = Number(localStorage.getItem('household') || 0);
    const living = Number(localStorage.getItem('living') || 0);
    const extras = Number(localStorage.getItem('extras') || 0);
    const primary = household + living;

    setData([
      { name: 'Saves', value: saves },
      { name: 'Rent', value: rent },
      { name: 'Primary expenses', value: primary },
      { name: 'Leisure expenses', value: extras },
    ]);
  }, []);

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