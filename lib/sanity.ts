import ImageUrlBuilder from "@sanity/image-url";
import { FilteredResponseQueryOptions, createClient } from "next-sanity";

export const client = createClient({
  projectId: '8spqd46f',
  dataset: 'production',
  apiVersion: '2024-03-18',
  useCdn: true
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}

export const fetchParams : FilteredResponseQueryOptions = {cache: 'no-store'}