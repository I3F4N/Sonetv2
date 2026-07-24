export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'showFeaturedProjects',
      title: 'Show Featured Projects Section',
      type: 'boolean',
      description: 'Toggle the Featured Deployments section on the homepage on or off.',
      initialValue: false,
    },
    {
      name: 'whatsappNumber',
      type: 'string',
      title: 'WhatsApp Contact Number',
      description: 'The phone number to link the Consult/Deploy buttons to (e.g. 1234567890).'
    },
    {
      name: 'whatsappMessage',
      type: 'string',
      title: 'WhatsApp Default Message',
      description: 'The pre-filled message when a user clicks the button.'
    }
  ]
};
