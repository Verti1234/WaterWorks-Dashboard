"use client"
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <div className="w-full h-full flex flex-col ">
      <Skeleton className="h-[10%] w-1/5 " />
      <div className="w-full h-[90%]  grid gap-4 grid-cols-4 grid-rows-6 py-4">
        <Skeleton className="" />
        <Skeleton className="" />
        <Skeleton className="col-span-2 row-span-3" />
        <Skeleton className="col-span-2 row-span-2" />
        <Skeleton className="col-span-4 row-span-3" />
      </div>
    </div>

  )
}
