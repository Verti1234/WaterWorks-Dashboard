"use client"
import { columns } from "@/components/dashboard/table/Columns";
import { DataTable } from "@/components/dashboard/table/ObjectTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getDataTable } from "@/config";
import { Building2 } from 'lucide-react';
import { useEffect, useState } from "react";
import MobileSideBar from "@/components/dashboard/MobileSideBar";
import ThemeBtn from "@/components/ThemeBtn";
import ChartPie from "@/components/dashboard/ChartPie";
import ChartArea from "@/components/dashboard/ChartArea";


export default function page() {

  const [data, setData] = useState<Object[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataTable()
      setData(data);
    };
    fetchData();
    
  }, [])
  
  return (
    <div className='w-full h-full  flex flex-col'>
      <div className="h-[10%] flex justify-between items-center">
      <h1 className='p-2 text-5xl font-bold  flex items-center max-[750px]:text-3xl'>Dashboard</h1>
      <MobileSideBar />
      <ThemeBtn />
      </div>
      <div className="w-full 2xl:h-[90%]  sm:pb-0 grid gap-4 grid-cols-1 grid-rows-8 sm:grid-cols-4 sm:grid-rows-6">
          <Card className="shadow-xl  ">
            <CardHeader className="px-4 pt-4 pb-2 text-xl font-medium  ">
              <CardTitle className="text-lg lg:text-2xl">Aktywne</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between gap-4 items-center px-4">
              <div className="flex justify-between gap-4 items-center">
                <span className="text-3xl text-indigo-500">3</span>
                <span className="text-xl">Obiekty</span>
              </div>
              <Building2 className="text-indigo-500 flex items-center  h-1/6 w-1/6"  />
            </CardContent>
          </Card>

          <Card className="shadow-xl ">
            <CardHeader className="px-4 pt-4 pb-2 text-xl font-medium  ">
                <CardTitle className="text-lg lg:text-2xl">Nieaktywne</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between gap-4 items-center px-4">
                <div className="flex justify-between gap-4 items-center">
                  <span className="text-3xl text-blue-400">2</span>
                  <span className="text-xl">Obiekty</span>
                </div>
                <Building2 className="text-blue-400  flex items-center  h-1/6 w-1/6" />
              </CardContent>
          </Card>

          <Card className="shadow-xl sm:col-span-2 sm:row-span-3 row-span-4  p-4 flex flex-col">
            <h1 className="text-2xl font-semibold leading-none tracking-tight w-full">Ilość obiektów</h1>
            <div className="flex lg:flex-row   flex-col justify-center items-center w-full h-full ">
              <div className="flex flex-col  justify-start pt-4 gap-4  w-full ">
                <div className="flex items-center  gap-4">
                  <div className="w-8 h-4 rounded-lg bg-indigo-500 "></div>
                  <span className="lg:text-xl font-medium">Oczyszczalnie</span>
                </div>
                <div className="flex items-center  gap-4">
                  <div className="w-8 h-4 rounded-lg bg-blue-500 "></div>
                  <span className="lg:text-xl font-medium">Źródła</span>
                </div>
                <div className="flex items-center  gap-4">
                  <div className="w-8 h-4 rounded-lg bg-cyan-300 "></div>
                  <span className="lg:text-xl font-medium">Stacje</span>
                </div>
              </div>
              <ChartPie />
            </div>
          </Card>

          <Card className="shadow-xl sm:col-span-2 sm:row-span-2 row-span-2 p-4 flex flex-col ">
            <h1 className="text-2xl font-semibold leading-none tracking-tight">Jakość wody</h1>
            <ChartArea />
          </Card>

          <Card className=" shadow-xl sm:col-span-4 row-span-2 sm:row-span-3 p-4 h-min">
            <DataTable columns={columns} data={data} />
          </Card>
          
      </div>
    </div>
    
  )
}
