export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'isActive',
      title: 'Active (Show on Website)',
      type: 'boolean',
      description: 'Turn this off to instantly hide this service from the Navbar, Homepage Grid, and public routing.',
      initialValue: true,
    },
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'The URL path (e.g., audio-visual)',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Description',
      type: 'text',
      description: 'Used on the homepage grid and at the top of the service page.',
    },
    {
      name: 'heroImage',
      title: 'Hero / Grid Image URL',
      type: 'url',
      description: 'URL from Unsplash (temporary until asset pipeline is built)',
    },
    {
      name: 'gridIcon',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'Exact name of the Lucide icon to use (e.g., Shield, Network, MonitorPlay)',
    },
    {
      name: 'gridSpan',
      title: 'Homepage Grid Span',
      type: 'string',
      options: {
        list: [
          { title: 'Small (1x1)', value: 'lg:col-span-1 lg:row-span-1' },
          { title: 'Wide (2x1)', value: 'lg:col-span-2 lg:row-span-1' },
          { title: 'Tall (1x2)', value: 'lg:col-span-1 lg:row-span-2' },
          { title: 'Large (2x2)', value: 'lg:col-span-2 lg:row-span-2' },
        ],
      },
      initialValue: 'lg:col-span-1 lg:row-span-1',
      description: 'Controls how much space this service takes up on the Homepage Bento Grid.',
    },
    {
      name: 'gridColor',
      title: 'Grid Icon Color',
      type: 'string',
      description: 'Tailwind color class for the icon (e.g., text-primary, text-emerald-400)',
      initialValue: 'text-primary',
    },
    {
      name: 'features',
      title: 'Feature Bullet Points',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of specific features/capabilities offered under this service.',
    }
  ]
};
