import { Objects, columns } from "@/components/dashboard/table/Columns";
import { DataTable } from "@/components/dashboard/table/DataTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getDataTable } from "@/config";
import { Building2,Sun  } from 'lucide-react';


export default async function page() {

  const data = await getDataTable()

  return (
    <div className='w-full h-full '>
      <div className="h-[10%] flex justify-between items-center">
      <h1 className='p-2 text-5xl font-medium  flex items-center'>Dashboard</h1>
      <Button variant="outline" size="icon"><Sun className="h-5 w-5" /></Button>
      </div>

      <div className="w-full h-[90%]  grid gap-4 grid-cols-4 grid-rows-6">
          <Card className="shadow-xl">
            <CardHeader className="px-4 pt-4 pb-2 text-xl font-medium  ">
              <CardTitle>Aktywne</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between gap-4 items-center">
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
              <CardContent className="flex justify-between gap-4 items-center">
                <div className="flex justify-between gap-4 items-center">
                  <span className="text-3xl text-blue-400">2</span>
                  <span className="text-xl">Obiekty</span>
                </div>
                <Building2 className="text-blue-400  flex items-center  h-1/6 w-1/6" />
              </CardContent>
          </Card>

          <Card className="shadow-xl col-span-2 row-span-3 flex justify-center items-center text-3xl font-bold ">
            03
          </Card>

          <Card className="shadow-xl col-span-2 row-span-2 flex justify-center items-center text-3xl font-bold ">
            04
          </Card>

          <Card className=" shadow-xl col-span-4 row-span-3 p-4">
            <DataTable columns={columns} data={data} />
          </Card>
          
      </div>
    </div>
  )
}
