export const partnerCategory = {
  name: 'partnerCategory',
  title: 'Partner Categories',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'e.g., Core Networking & Infrastructure'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first on the page.'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of what this category of partners provides.'
    },
    {
      name: 'logos',
      title: 'Partner Logos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text (Company Name)',
            }
          ]
        }
      ],
      description: 'Upload the logos for the partners in this category.'
    }
  ]
};
