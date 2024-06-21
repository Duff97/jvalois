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
    {
      name: 'slug',
      type: 'slug',
      title: 'Lien url (clique sur "generate")',
      options: {
        source: 'name'
      }
    },
  ]
}