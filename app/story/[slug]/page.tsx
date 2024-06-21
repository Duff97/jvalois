import { ShortStory } from '@/app/interface'
import { client, fetchParams } from '@/lib/sanity'
import { formatDate } from '@/lib/utils'
import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const getData = async (slug: string) => {
  const query = `*[_type == 'shortStory' && slug.current == '${slug}'][0] {
    'id': _id,
    name,
    content,
    'slug': slug.current,
    'createdAt': _createdAt,
    'type': _type
  }`

  const data : ShortStory = await client.fetch(query, {}, fetchParams)
  return data
}

const StoryPage = async ({params} : {params: {slug: string}}) => {
  const story = await getData(params.slug)
  return (
    <div className='flex flex-col gap-10 max-w-[1080px] mx-auto px-3'>
      <div>
        <h1 className='text-3xl font-extrabold text-primary'>
          {story.name}
        </h1>
        <div className='tracking-wide py-10 leading-relaxed text-lg portable'>
          <PortableText value={story.content} />
        </div>
        <p className='text-right text-primary tracking-wide pb-5 font-semibold'>
          Publié le {formatDate(story.createdAt)}
        </p>
      </div>
      <div>
        <Link href='/' className='bg-primary flex gap-3 items-center p-3 rounded-xl text-xl hover:opacity-70 w-min mx-auto'><ArrowLeft /> Retour</Link>
      </div>
    </div>
  )
}

export default StoryPage