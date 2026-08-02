import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, schema }) => {
  const siteName = "Sonet Integrated Solutions";
  const defaultTitle = "Sonet Integrated Solutions | Advanced Infrastructure Deployments";
  const defaultDesc = "End-to-end physical and logical infrastructure deployments, from fiber optic backbones to Tier-1 OEM configurations.";
  const defaultImage = "https://sonet.vercel.app/logo.png"; // Placeholder
  const siteUrl = "https://sonet.vercel.app";

  const seo = {
    title: title ? `${title} | ${siteName}` : defaultTitle,
    description: description || defaultDesc,
    url: url ? `${siteUrl}${url}` : siteUrl,
    image: image || defaultImage,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
