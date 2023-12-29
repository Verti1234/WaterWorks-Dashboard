"use client"
import React from 'react'
import { Droplet,LayoutDashboard,Waypoints } from 'lucide-react';
import { Separator } from '../ui/separator';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SideBar() {
  
  const pathname = usePathname()
  
  
  
  return (
    <div className='w-1/6 h-full shadow-xl rounded-xl border-2  p-4 '>
      <div className='flex justify-center items-center gap-2  '>
        <span>
          <svg width="0" height="0">
            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#8553EE" offset="25%" />
              <stop stopColor="#00FBEC" offset="100%" />
            </linearGradient>
          </svg>
          <Droplet size={48} style={{ stroke: "url(#blue-gradient)" }} />
        </span>
        <h1 className='text-3xl  flex items-center font-semibold'>Aqua Control</h1>
      </div>
      
      <Separator className='my-8'/>
      
      <div className='w-full h-1/5 flex flex-col gap-2 '>
        <Link 
          className={`flex gap-4 items-center hover:bg-neutral-100 rounded-xl p-2 transition-all cursor-pointer ${pathname === '/dashboard' ? 'text-indigo-500': ''}`}  
          href={'/dashboard'}
        >
          <LayoutDashboard size={32}/>
          <span className='text-xl'>Dashboard</span>
        </Link>

        <Link 
        className={`flex gap-4 items-center hover:bg-neutral-100 rounded-xl p-2 transition-all cursor-pointer ${pathname === '/dashboard/infrastructure' ? 'text-indigo-500': ''}`}  
        href={'/dashboard/infrastructure'}
        >
          <Waypoints size={32}/>
          <span className='text-xl'>Stacje</span>
        </Link>

      </div>
    </div>
  )
}
