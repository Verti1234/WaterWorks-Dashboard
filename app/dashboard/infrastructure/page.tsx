"use client"
import { Flow } from '@/components/infrastructure/Flow';
import { Button } from '@/components/ui/button'
import { Sun } from 'lucide-react'
import React from 'react'
import { ReactFlowProvider } from 'reactflow';



export default function page() {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className="h-[10%] flex  justify-between items-center">
      <h1 className='p-2 text-5xl font-bold  flex items-center'>Infrastruktura</h1>
      <Button variant="outline" size="icon"><Sun className="h-5 w-5" /></Button>
      </div>
      <div className="w-full h-full  border-[1px] rounded-lg shadow-xl">
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </div>
    </div>
  )
}
