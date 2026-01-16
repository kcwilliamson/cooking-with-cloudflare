export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  headshot: string;
  expertise: string[];
  classes: string[];
}

export const instructors: Instructor[] = [
  {
    id: 'sarah-martinez',
    name: 'Sarah Martinez',
    title: 'Senior Security Engineer',
    bio: 'Sarah has over 10 years of experience in web application security and has been with Cloudflare for 5 years. She specializes in WAF configuration, DDoS mitigation, and security best practices. Sarah has helped hundreds of enterprises secure their applications and loves teaching others how to leverage Cloudflare\'s security tools effectively.',
    headshot: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    expertise: ['WAF Configuration', 'DDoS Protection', 'Security Best Practices', 'Bot Management'],
    classes: ['waf-fundamentals', 'advanced-security', 'ddos-mitigation'],
  },
  {
    id: 'james-chen',
    name: 'James Chen',
    title: 'Developer Advocate',
    bio: 'James is a full-stack developer turned educator with a passion for serverless computing and edge development. He has built numerous applications on Cloudflare Workers and loves sharing his knowledge through live coding sessions. James makes complex concepts accessible and fun, with a focus on practical, real-world applications.',
    headshot: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    expertise: ['Cloudflare Workers', 'Full-Stack Development', 'API Design', 'Edge Computing'],
    classes: ['workers-fundamentals', 'fullstack-edge', 'api-development'],
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    title: 'AI/ML Solutions Architect',
    bio: 'Priya leads AI initiatives at Cloudflare and has a PhD in Machine Learning from Stanford. She specializes in deploying AI models at the edge and has worked on some of the largest AI implementations on Cloudflare\'s platform. Priya is passionate about making AI accessible to developers of all skill levels.',
    headshot: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    expertise: ['Workers AI', 'Machine Learning', 'AI Gateway', 'Vector Databases'],
    classes: ['ai-fundamentals', 'workers-ai-advanced', 'ai-gateway-masterclass'],
  },
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    title: 'Zero Trust Architect',
    bio: 'Marcus has been at the forefront of Zero Trust security for over 8 years. He helps organizations transition from traditional VPNs to modern Zero Trust architectures. With experience implementing Zero Trust for Fortune 500 companies, Marcus brings real-world insights and practical strategies to every class.',
    headshot: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    expertise: ['Zero Trust Security', 'Access Control', 'Identity Management', 'Network Security'],
    classes: ['zero-trust-fundamentals', 'access-policies', 'zt-migration'],
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    title: 'Performance Engineer',
    bio: 'Emily is obsessed with making the web faster. She specializes in CDN optimization, caching strategies, and performance monitoring. With a background in site reliability engineering, Emily teaches developers how to leverage Cloudflare\'s global network to deliver lightning-fast experiences to users worldwide.',
    headshot: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    expertise: ['CDN Optimization', 'Caching Strategies', 'Performance Monitoring', 'Load Balancing'],
    classes: ['performance-optimization', 'caching-strategies', 'cdn-masterclass'],
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    title: 'Database Solutions Lead',
    bio: 'David specializes in distributed databases and edge storage solutions. He has extensive experience with D1, Workers KV, Durable Objects, and R2. David helps developers choose the right storage solution for their use case and optimize their data architecture for global scale.',
    headshot: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    expertise: ['D1 Database', 'Workers KV', 'Durable Objects', 'R2 Storage'],
    classes: ['database-fundamentals', 'd1-deep-dive', 'storage-solutions'],
  },
];
