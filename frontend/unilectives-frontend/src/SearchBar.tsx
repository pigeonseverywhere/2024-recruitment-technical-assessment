import { Dispatch, SetStateAction } from 'react';
import {MagnifyingGlassIcon } from '@heroicons/react/24/outline'


type Props = {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const SearchBar = (props: Props) => {

  return (
    <div className="inline-flex items-center cursor-pointer w-full gap-x-20 rounded-md bg-white px-4 py-2 text-[#9face4] shadow-sm ring-2 ring-inset ring-[#9face4] hover:bg-gray-50" onClick={() => { 
      props.setModalVisible(true);
    }}>
      <MagnifyingGlassIcon className='w-6 h-6'/>
      <p className='text-blue/300'>Search for a course e.g. COMP1511</p>
    </div>
  )
}