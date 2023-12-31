import { AreaData } from '@/config'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function ChartArea() {
  return (
    <ResponsiveContainer width="100%" height="100%" className='pb-4 -ml-6'>
      <AreaChart width={800} height={200} data={AreaData}
        margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name"  className="pt-4" />
        <YAxis   />
        <CartesianGrid  vertical={false} fillOpacity={0.6} />
        <Tooltip 
        labelStyle={{ color: 'black'}} 
          contentStyle={{ backgroundColor: 'white' ,borderRadius:5 }} />
        <Area type="monotone" dataKey="ph" stroke="#6366f1" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
