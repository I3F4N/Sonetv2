import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'i11lc3es', // User will replace this or use .env
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source || !source.asset) return { url: () => '' };
  try {
    return builder.image(source);
  } catch (e) {
    console.warn("Image builder failed:", e);
    return { url: () => '' };
  }
}
