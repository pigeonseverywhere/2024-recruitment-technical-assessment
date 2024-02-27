import React from 'react';


export type Course = {
  course_prefix: string;
  course_code: number;
  course_title: string;
  average_stars: number;
  total_reviews: number;
  offered_terms: Array<'Term 1' | 'Term 2' | 'Term 3' | 'Summer'>;
};

export const CourseCard = (props: Course) => {
  return (
  <div className="flex flex-col text-left h-64 rounded-lg bg-[#fafafa] shadow-md shadow-slate-400 font-light p-5 justify-between hover:bg-[#f3f4f6]">
    <div className='flex justify-between'>
      <h1 className='font-extrabold text-2xl'>{props.course_prefix + props.course_code}</h1>
      <span className='text-slate-400'>
        <p className='text-2xl'>★★★★★</p>
        <p>{props.total_reviews} reviews</p>
      </span>
    </div>

    <div className='-mt-20'>
      {props.course_title}
    </div>

    <div className='flex'>
      {props.offered_terms.map(term => {
        return <div className='bg-[#d2eaf5] rounded-full px-3 py-1 mx-1 text-nowrap'>{term}</div>
      })}
    </div>
  </div>
  )

  


}