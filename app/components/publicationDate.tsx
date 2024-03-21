import { formatDate } from '@/lib/utils'
import React from 'react'

interface PublicationDateProps {
  createdAt: Date
}

const PublicationDate = ({createdAt} : PublicationDateProps) => {
  return (
    <p className='absolute bottom-3 right-3 text-right text-sm  text-sky-200'>
      {formatDate(createdAt)}
    </p>
  )
}

export default PublicationDate