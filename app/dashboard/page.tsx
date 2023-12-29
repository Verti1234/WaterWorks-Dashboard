"use client"
import { columns } from "@/components/dashboard/table/Columns";
import { DataTable } from "@/components/dashboard/table/ObjectTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { COLORS, ChartData, PieData, getDataTable } from "@/config";
import { Building2,Sun  } from 'lucide-react';
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



export default async function page() {

  const data = await getDataTable()

  return (
    <div className='w-full h-full '>
      <div className="h-[10%] flex justify-between items-center">
      <h1 className='p-2 text-5xl font-bold  flex items-center'>Dashboard</h1>
      <Button variant="outline" size="icon"><Sun className="h-5 w-5" /></Button>
      </div>

      <div className="w-full h-[90%]  grid gap-4 grid-cols-4 grid-rows-6">
          <Card className="shadow-xl">
            <CardHeader className="px-4 pt-4 pb-2 text-xl font-medium  ">
              <CardTitle>Aktywne</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between gap-4 items-center px-4">
              <div className="flex justify-between gap-4 items-center">
                <span className="text-3xl text-indigo-500">3</span>
                <span className="text-xl">Obiekty</span>
              </div>
              <Building2 className="text-indigo-500 flex items-center  h-1/6 w-1/6"  />
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader className="px-4 pt-4 pb-2 text-xl font-medium  ">
                <CardTitle>Nieaktywne</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between gap-4 items-center px-4">
                <div className="flex justify-between gap-4 items-center">
                  <span className="text-3xl text-blue-400">2</span>
                  <span className="text-xl">Obiekty</span>
                </div>
                <Building2 className="text-blue-400  flex items-center  h-1/6 w-1/6" />
              </CardContent>
          </Card>

          <Card className="shadow-xl col-span-2 row-span-3  p-4 flex flex-col">
            <h1 className="text-2xl font-semibold leading-none tracking-tight w-full">Ilość obiektów</h1>
            <div className="flex justify-center items-center w-full h-full ">
              <div className="flex flex-col justify-center gap-4 h-full">
                <div className="flex items-center  gap-4">
                  <div className="w-8 h-4 rounded-lg bg-indigo-500 "></div>
                  <span className="text-2xl font-medium">Oczyszczalnie</span>
                </div>
                <div className="flex items-center  gap-4">
                  <div className="w-8 h-4 rounded-lg bg-blue-500 "></div>
                  <span className="text-2xl font-medium">Źródła</span>
                </div>
                <div className="flex items-center  gap-4">
                  <div className="w-8 h-4 rounded-lg bg-cyan-300 "></div>
                  <span className="text-2xl font-medium">Stacje</span>
                </div>
              </div>
              <ResponsiveContainer  width="50%" height="100%" >
                <PieChart width={900} height={900}>
                  <Pie
                    data={PieData}
                    cx='50%'
                    cy='50%'
                    innerRadius={90}
                    outerRadius={120}
                    paddingAngle={2}
                    label={true}
                    dataKey="value"
                  >
                    {PieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="shadow-xl col-span-2 row-span-2 p-4 flex flex-col">
            <h1 className="text-2xl font-semibold leading-none tracking-tight">Jakość wody</h1>
            <ResponsiveContainer width="100%" height="100%" className='pb-4 -ml-6'>
            <AreaChart width={800} height={200} data={ChartData}
              margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name"  className="pt-4" />
              <YAxis   />
              <CartesianGrid  vertical={false}   />
              <Tooltip offset={16}  />
              <Area type="monotone" dataKey="ph" stroke="#6366f1" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className=" shadow-xl col-span-4 row-span-3 p-4">
            <DataTable columns={columns} data={data} />
          </Card>
          
      </div>
    </div>
  )
}
