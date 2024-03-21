import React from 'react'
import { Quote } from '../interface'
import { formatDate } from '@/lib/utils'

interface QuoteCardProps {
  quote: Quote
}

const QuoteCard = ({quote} : QuoteCardProps) => {
  return (
    <div className='bg-primary rounded-2xl pt-10 px-10 self-start relative sm:max-w-[45%] lg:max-w-[35%] pb-12 shadow-md'>
      <div className='font-bold text-5xl'>
        <span className='absolute top-3 left-3'>"</span>
        <span className='absolute top-3 right-3'>"</span>
      </div>
      <p className='text-wrap text-center text-xl font-semibold'>
        {quote.quote}
      </p>
      <p className='text-right pt-3'>
        - {quote.autor}
      </p>
      <p className='absolute bottom-3 right-3 text-right text-sm  text-sky-200'>
        {formatDate(quote.createdAt)}
      </p>
    </div>
  )
}

export default QuoteCard