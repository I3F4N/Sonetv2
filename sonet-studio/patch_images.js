import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '0qpxcddl', // Assuming this is correct from earlier setup or studio config
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN // Need to pass token or use a CLI command
});

async function main() {
  await client.patch('eJ7skWqptDvdh6OpbPA6ow').set({ heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000' }).commit();
  await client.patch('eJ7skWqptDvdh6OpbPA7J5').set({ heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000' }).commit();
  await client.patch('eJ7skWqptDvdh6OpbPA7Rh').set({ heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000' }).commit();
  console.log("Patched successfully.");
}

main().catch(console.error);
