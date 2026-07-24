import { useState, useEffect } from 'react';
import { client } from '../lib/sanityClient';
import { siteContent } from '../data/content';

/**
 * Custom hook to fetch CMS content with a safe fallback to local data.
 * Initializes synchronously with fallback data to eliminate layout shift (popping).
 */
export const useContent = (documentType, slug = null) => {
  // Synchronous initialization prevents UI popping
  const getInitialData = () => {
    if (documentType === 'service') {
      if (slug) return siteContent.services.find(s => s.slug.current === slug) || null;
      return siteContent.services.filter(s => s.isActive);
    }
    return siteContent[documentType] || null;
  };

  const [data, setData] = useState(getInitialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        if (client.config().projectId === 'your-project-id') {
          console.log('Sanity not configured. Using synchronous fallback data.');
          setIsLoading(false);
          return;
        }

        let query = `*[_type == "${documentType}"]`;
        if (documentType === 'service' && slug) {
           query = `*[_type == "service" && slug.current == "${slug}"]`;
        } else if (documentType === 'service') {
           query = `*[_type == "service" && isActive == true] | order(_createdAt asc)`;
        } else if (documentType === 'partnerCategory') {
           query = `*[_type == "partnerCategory"] | order(order asc)`;
        }

        const result = await client.fetch(query);

        if (result && result.length > 0) {
          if (slug || documentType === 'hero' || documentType === 'siteSettings') {
             setData(result[0]); // Overwrite fallback with real CMS data
          } else {
             setData(result);
          }
        }
        // If result is empty, keep the synchronous fallback data
      } catch (err) {
        console.error('Error fetching from CMS:', err);
        setError(err);
        // Keep fallback data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [documentType, slug]);

  return { data, isLoading, error };
};
