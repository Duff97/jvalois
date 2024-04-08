export default {
  name: 'painting',
  type: 'document',
  title: 'Peinture',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'description',
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