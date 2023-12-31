"use client"
import React from 'react'
import { Droplet,LayoutDashboard,Waypoints } from 'lucide-react';
import { Separator } from '../ui/separator';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function SideBar() {
  
  const pathname = usePathname()
  
  console.log(pathname);
  
  
  return (
    <div className='sm:w-1/6   hidden sm:block h-full shadow-xl rounded-xl border-[1px]  p-4 '>
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
        <h1 className='text-3xl  items-center font-semibold hidden lg:flex'>Aqua Control</h1>
      </div>
      
      <Separator className='my-8'/>
      
      <div className='w-full h-1/5 flex flex-col  gap-2 '>
        <Link 
          className={`flex gap-4 max-lg:justify-center items-center dark:hover:bg-indigo-950 dark:text-neutral-400 dark:hover:text-indigo-500 hover:bg-neutral-100 rounded-xl p-2 transition-all cursor-pointer ${pathname === '/dashboard' ? 'dark:!text-indigo-500 text-indigo-500 ': ''}`}  
          href={'/dashboard'}
        >
          <LayoutDashboard  className='w-8 h-8'/>
          <span className='text-lg hidden lg:block '>Dashboard</span>
        </Link>

        <Link 
        className={`flex gap-4 max-lg:justify-center items-center dark:hover:bg-indigo-950 dark:text-neutral-400 dark:hover:text-indigo-500 hover:bg-neutral-100 rounded-xl p-2 transition-all cursor-pointer ${pathname === '/dashboard/infrastructure' ? 'dark:!text-indigo-500 text-indigo-500 ': ''}`}  
        href={'/dashboard/infrastructure'}
        >
          <Waypoints className='w-8 h-8'/>
          <span className='text-lg hidden lg:block'>Infrastruktura</span>
        </Link>

      </div>
    </div>
  )
}
