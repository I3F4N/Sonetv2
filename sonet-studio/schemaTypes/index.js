import { service } from './service';
import { siteSettings } from './siteSettings';
import { partnerCategory } from './partnerCategory';

export const schemaTypes = [
  {
    name: 'hero',
    type: 'document',
    title: 'Hero Section',
    fields: [
      { name: 'title', type: 'string', title: 'Top Title Text' },
      { name: 'titleHighlight', type: 'string', title: 'Highlighted Gradient Text' },
      { name: 'titleEnd', type: 'string', title: 'Bottom Title Text' },
      { name: 'subtitle', type: 'text', title: 'Subtitle Description' },
    ]
  },
  service,
  siteSettings,
  partnerCategory
]