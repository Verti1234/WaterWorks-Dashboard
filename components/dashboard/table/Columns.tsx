"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export type Objects = {
  id: string
  name: string
  kind: 'OCZYSZCZALNIA' | 'ŹRÓDŁO' | 'STACJA'
  date: Date
  status: 'OK' | 'ERROR'
}

function formatDate(date: Date) {
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export const columns: ColumnDef<Objects>[] = [
  {
    accessorKey:"id",
    
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className=""
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center ">{row.getValue('id')}</div>
    }
  },
  {
    accessorKey: "name",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nazwa obiektu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="ml-4 ">{row.getValue('name')}</div>
    }
  },
  {
    accessorKey: "kind",
    size:40,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rodzaj obiektu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="ml-4 ">{row.getValue('kind')}</div>
    }
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data utworzenia
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formattedDate = format(date, 'dd MMMM yyyy', { locale: pl });
      
      return <div className="ml-4 ">{formattedDate}</div>
    }
    
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-m-4"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (
        row.getValue("status") == 'OK' ? 
        <div className="bg-indigo-500 text-white font-bold rounded-xl flex justify-center items-center w-min px-2">OK</div> 
        : 
        <div className="bg-blue-400 text-white font-bold rounded-xl flex justify-center items-center w-min px-2">ERROR</div>
      )
    },
  
  },
]
