'use client'
import React from 'react'
import { useFilter } from '../providers/FilterProvider'

const Filters = () => {
  const {contentFilters, setContentFilters} = useFilter()

  const handleFilterEvent = (publicationType: string) => {
    setContentFilters(currentFilters => {
      if (currentFilters.includes(publicationType)) {
        return currentFilters.filter(filter => filter !== publicationType);
      } else {
        return [...currentFilters, publicationType];
      }
    });
  }

  return (
    <div className='flex justify-evenly overflow-hidden rounded-2xl w-max font-semibold lg:text-xl shadow-md text-base mb-5 sm:mb-0 cursor-pointer '>
      <div 
        onClick={() => handleFilterEvent('painting')} 
        className='hover:opacity-75 p-3 sm:p-5'
        style={contentFilters.includes('painting') ? {backgroundColor: 'white'} : {backgroundColor: '#5baaf1'}}
      >
        Peintures
      </div>
      <div 
        onClick={() => handleFilterEvent('quote')} 
        className='hover:opacity-75 p-3 sm:p-5 border-r border-sky-200 border-dashed border-l'
        style={{backgroundColor: contentFilters.includes('quote') ? 'white' : '#5baaf1'}}
      >
        Citations
      </div>
      <div 
        onClick={() => handleFilterEvent('shortStory')} 
        className='hover:opacity-75 p-3 sm:p-5'
        style={{backgroundColor: contentFilters.includes('shortStory') ? 'white' : '#5baaf1'}}
      >
        Histoires
      </div>
    </div>
  )
}

export default Filters