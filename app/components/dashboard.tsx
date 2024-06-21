import { client, fetchParams } from '@/lib/sanity'
import { Quote, Painting, ShortStory } from '../interface'
import MasonryGrid from './masonryGrid'

const getData = async () => {
  const query = `*[_type in ['painting', 'quote', 'shortStory']] | order(_createdAt desc) {
      _type == 'painting' => {
        'id': _id,
        name,
        image,
        description,
        'slug': slug.current,
        'createdAt': _createdAt,
        'type': _type
      },
      _type == 'quote' => {
        'id': _id,
        quote,
        autor,
        'createdAt': _createdAt,
        'type': _type
      },
      _type == 'shortStory' => {
        'id': _id,
        name,
        content,
        'createdAt': _createdAt,
        'type': _type,
        'slug': slug.current
      }
  }`

  const data : (Painting | Quote | ShortStory)[] = await client.fetch(query, {}, fetchParams)
  return data
}

const Dashboard = async () => {
  const data = await getData()
  return (
    <div className='px-3'>
      <MasonryGrid publications={data} />
    </div>
  )
}

export default Dashboard