import { PortableTextBlock } from "next-sanity"

export interface Painting {
  id: string
  name: string
  description: string
  image: any
  slug: string
  createdAt: Date
  type: string
}

export interface Quote {
  id: string
  quote: string
  autor: string
  createdAt: Date
  type: string
}

export interface ShortStory {
  id: string
  name: string
  content: PortableTextBlock[]
  createdAt: Date
  type: string
}