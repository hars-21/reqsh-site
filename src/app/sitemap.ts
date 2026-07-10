import type { MetadataRoute } from 'next';
import { docs } from '@/lib/docs-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reqsh.dev';

  const docPages = docs.map((doc) => ({
    url: doc.slug ? `${baseUrl}/docs/${doc.slug}` : `${baseUrl}/docs`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: doc.slug === '' ? 0.9 : 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...docPages,
    {
      url: `${baseUrl}/docs/changelog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
