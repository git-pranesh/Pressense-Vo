import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pressense.co'

  return [
    // Core
    { url: baseUrl,                                                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/how-it-works`,                                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`,                                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,                                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pricing`,                                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Services
    { url: `${baseUrl}/custom-software-internal-tools`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/workflow-automation`,                                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/custom-crm`,                                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ai-integration`,                                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/fractional-cmo`,                                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // Case studies
    { url: `${baseUrl}/case-studies`,                                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies/two-location-clinic`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/commercial-contractor`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/ontario-distributor`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/interior-design-crm`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/interiors-quotation-platform`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/zoho-creator`,                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/onemagnify`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Industries
    { url: `${baseUrl}/industries`,                                          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/construction`,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/manufacturing`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/professional-services`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/real-estate`,                              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/healthcare`,                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // Playbooks
    { url: `${baseUrl}/playbooks`,                                           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Tools
    { url: `${baseUrl}/tools`,                                               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools/workflow-automation-roi-calculator`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // Blog
    { url: `${baseUrl}/blog`,                                                lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },

    // Legal
    { url: `${baseUrl}/privacy`,                                             lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/terms`,                                               lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
  ]
}
