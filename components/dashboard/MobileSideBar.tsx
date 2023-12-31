import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Droplet, LayoutDashboard,  Menu, Waypoints } from 'lucide-react'
import { Separator } from '../ui/separator'
import Link from 'next/link'

export default function MobileSideBar() {

  return (
    <div className='block sm:hidden'>
    <Sheet>
        <SheetTrigger className='mr-4'><Menu/></SheetTrigger>
        <SheetContent >
          <SheetHeader>
            <SheetTitle>
              <div className='flex justify-start items-center gap-2 mb-4'>
                <span>
                  <svg width="0" height="0">
                    <linearGradient id="purple-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop stopColor="#8553EE" offset="25%" />
                      <stop stopColor="#00FBEC" offset="100%" />
                    </linearGradient>
                  </svg>
                  <Droplet size={32} style={{ stroke: "url(#purple-gradient)" }} />
                </span>
                <h1 className='text-xl  flex items-center font-semibold '>Aqua Control</h1>
              </div>
              </SheetTitle>
            <Separator className='mb-8 mt-4'/>

            <div className="h-96 flex flex-col justify-between">
            <div className='w-full h-full flex flex-col gap-8 mt-4'>
              <Link 
                href={'/dashboard'}
                className='flex justify-start items-center gap-4'
              >
                <LayoutDashboard size={32}/>
                <span className='text-xl '>Dashboard</span>
              </Link>
              <Link 
                href={'/dashboard/infrastructure'}
                className='flex justify-start items-center gap-4'
              >
                <Waypoints size={32}/>
                <span className='text-xl'>Infrastruktura</span>
              </Link>
            </div>
              
              
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
