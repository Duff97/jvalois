import React from 'react'
import { Quote } from '../interface'
import PublicationDate from './publicationDate'

interface QuoteCardProps {
  quote: Quote
}

const QuoteCard = ({quote} : QuoteCardProps) => {
  return (
    <div className='bg-primary rounded-2xl pt-10 px-10 self-start relative pb-12 shadow-md'>
      <div className='font-bold text-5xl'>
        <span className='absolute top-3 left-3'>&quot;</span>
        <span className='absolute top-3 right-3'>&quot;</span>
      </div>
      <p className='text-wrap text-center text-xl font-bold'>
        {quote.quote}
      </p>
      <p className='text-right pt-3 italic font-semibold'>
        - {quote.autor}
      </p>
      <PublicationDate createdAt={quote.createdAt} />
    </div>
  )
}

export default QuoteCard