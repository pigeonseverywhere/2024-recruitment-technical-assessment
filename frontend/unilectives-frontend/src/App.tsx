import courses from './assets/courses.json'
import './App.css'
import {Course, CourseCard} from './CourseCard'
import { NavBar } from './NavBar'
import { SearchBar } from './SearchBar'
import { SortBy } from './SortBy'
import { useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { title } from 'process'

function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [titleClicked, setTitleClicked] = useState<boolean>(false)

  

  return (
  <>
   <NavBar/>
    <div className='flex flex-col flex-wrap ml-20 w-full justify-center'>
      <div className='flex flex-col'>
        <div className='text-left'>
          <p className='font-light'>
            DevSoc Presents
            </p>
          <div className='text-6xl font-black my-2 tracking-wide'>
            <h1 className={titleClicked ? 'text-[#da4f7a]' : 'text-[#3877ea]'
              } onClick={() => setTitleClicked(!titleClicked)}>
                unilectives
            </h1>
          </div>
          <p className='font-extrabold'>
            Your one-stop shop for UNSW course and elective reviews.
            </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-5 mt-10'>
        <SearchBar setModalVisible={setModalVisible}/>
        <SortBy/>
        <div className='grid grid-flow-row grid-cols-3 gap-8 w-full'>
          {
            courses.map((c: Course) => {
              // const course: Course = JSON.parse(c) as Course;
              return <CourseCard 
                course_code={c.course_code}
                course_prefix={c.course_prefix}
                course_title={c.course_title}
                average_stars={c.average_stars}
                total_reviews={c.total_reviews}
                offered_terms={c.offered_terms}
              />
            })
          }
        </div>
      </div>
      {modalVisible && 
      <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-white ring-1 ring-black'>
        <XMarkIcon className='top-10 left-10 w-6 h-6 text-slate-600 cursor-pointer' onClick={() => setModalVisible(false)}/>
      </div>
      }
    </div>
    </>
  )
}

export default App
