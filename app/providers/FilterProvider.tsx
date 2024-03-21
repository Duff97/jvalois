'use client'

import React, { createContext, SetStateAction, useContext, useState } from 'react'

interface IContextType {
  contentFilters: string[]
  setContentFilters: React.Dispatch<SetStateAction<string[]>>
}

export const INITIAL_FILTER_DATA = {
  contentFilters: [],
  setContentFilters: () => [],
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [contentFilters, setContentFilters] = useState([] as string[])
  return (
    <FilterContext.Provider
      value={{
        contentFilters,
        setContentFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const FilterWrapper = ({publicationType, children} : {publicationType : string, children: React.ReactNode}) => {
  const {contentFilters} = useFilter()
  const hidden = contentFilters.includes(publicationType)

  if (hidden) {
    return (
      <div className='hidden' />
    )
  }
  else {
    return (
      <>
        {children}
      </>
    )
  }
  
}

export const useFilter = () => useContext(FilterContext)