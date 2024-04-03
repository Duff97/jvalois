export default {
  name: 'shortStory',
  type: 'document',
  title: 'Petite Histoire',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}],
      title: 'Contenu',
    },
  ]
}