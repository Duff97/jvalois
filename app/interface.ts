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