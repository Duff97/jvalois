export default {
  name: 'quote',
  type: 'document',
  title: 'Citation',
  fields: [
    {
      name: 'autor',
      type: 'string',
      title: 'Auteur',
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Texte',
    }
  ],
  preview: {
    select: {
      autor: 'autor',
      quote: 'quote',
    },
    prepare(selection: { autor: string; quote: string; }) {
      const {autor, quote} = selection;
      const title = (autor && quote) ? `${autor} "${quote.slice(0, 10)}..."` : 'Citation'
      return {
        title: title,
      };
    },
  },
}