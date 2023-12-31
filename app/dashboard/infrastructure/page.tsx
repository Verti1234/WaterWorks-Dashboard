"use client"
import ThemeBtn from '@/components/ThemeBtn';
import MobileSideBar from '@/components/dashboard/MobileSideBar';
import { Flow } from '@/components/infrastructure/Flow';
import { ReactFlowProvider } from 'reactflow';



export default function page() {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className="h-[10%] flex  justify-between items-center">
      <h1 className='p-2 text-5xl font-bold  flex items-center max-[750px]:text-3xl'>Infrastruktura</h1>
        <MobileSideBar />
        <ThemeBtn />
      </div>
      <div className="w-full h-4/5 sm:h-full  border-[1px] rounded-lg shadow-xl">
        <ReactFlowProvider>
            <Flow />
        </ReactFlowProvider>
      </div>
    </div>
  )
}
