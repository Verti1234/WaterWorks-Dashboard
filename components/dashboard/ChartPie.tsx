import { COLORS, PieData } from '@/config';
import React from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
export default function ChartPie() {
  return (
    <ResponsiveContainer  width="100%" height="100%" >
                <PieChart width={900} height={900}>
                  <Pie
                    data={PieData}
                    cx='50%'
                    cy='50%'
                    //90
                    //120  
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    label={true}
                    dataKey="value"
                  >
                    {PieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  
                </PieChart>
              </ResponsiveContainer>
  )
}
