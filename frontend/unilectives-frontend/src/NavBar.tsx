import React from 'react'
import unilectivelogo from '/unilectives.svg'
import { 
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowUpIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon
 } from '@heroicons/react/24/outline'

export const NavBar = () => {
  return (
  <div className='flex flex-col justify-between items-center py-5 fixed left-0 top-0 h-screen w-20 bg-slate-50 p-3'>
    <div className='flex flex-col gap-3'>
      <a href="https://unilectives.devsoc.app" target="_blank">
        <img src={unilectivelogo} className="w-8 h-8" alt="Unilectives logo" />
      </a>
      <hr className='h-1 bg-gray-200 my-2'/>
      <BookOpenIcon className="h-12 w-12 hover:bg-slate-200 rounded-lg p-3" />
      <ShieldCheckIcon className="h-12 w-12 hover:bg-slate-200 rounded-lg p-3" />
    </div>
    <div className='align-self-end flex flex-col gap-3'>
      <BarsArrowUpIcon className="h-12 w-12 rotate-90 hover:bg-slate-200 rounded-lg p-3" />
      <UserCircleIcon className="h-12 w-12 hover:bg-slate-200 rounded-lg p-3" />
      <MoonIcon className="h-12 w-12 hover:bg-slate-200 rounded-lg p-3" />
      <ArrowRightEndOnRectangleIcon className="h-12 w-12 hover:bg-slate-200 rounded-lg p-3" />
    </div>
  </div>
  )
}