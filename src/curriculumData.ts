import { Tutorial, ModuleCollection } from './types';

// MODULE 0: GETTING STARTED (MVP BUNDLE)
const gettingStartedTutorials: Tutorial[] = [
  {
    id: 'workers-101',
    title: 'Workers 101: Full Course',
    author: 'Cloudflare Developer Relations',
    videoUrl: 'https://www.youtube.com/watch?v=WORKERS_VIDEO_ID', // YouTube source
    videoPoster: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    description: 'Master Cloudflare Workers fundamentals including Wrangler CLI, Hono framework, and deployment workflows.',
    totalTime: '45 minutes',
    difficulty: 'Beginner',
    overview: 'Cloudflare Workers provides a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure. This comprehensive course guides you through Workers fundamentals, from local development with Wrangler to production deployment.',
    moduleId: 'getting-started',
    featured: true,
    updatedDate: 'Jan. 16, 2026',
    ingredients: [
      { id: 'w101-1', name: 'Cloudflare Account', description: 'Free account with Workers enabled', required: true },
      { id: 'w101-2', name: 'Node.js', description: 'Version 16.13.0 or later', required: true },
      { id: 'w101-3', name: 'Wrangler CLI', description: 'Latest version installed globally', required: true },
      { id: 'w101-4', name: 'Code Editor', description: 'VS Code or preferred editor', required: false },
    ],
    steps: [
      { id: 'w101-s1', number: 1, title: 'Install Wrangler CLI', description: 'Install the Wrangler command-line tool using npm: `npm install -g wrangler`. Verify installation with `wrangler --version`. Authenticate with `wrangler login` to connect to your Cloudflare account.' },
      { id: 'w101-s2', number: 2, title: 'Create Your First Worker', description: 'Run `wrangler init my-worker` to scaffold a new Worker project. This creates the necessary configuration files including wrangler.toml and a basic Worker script. Explore the project structure and understand each file\'s purpose.' },
      { id: 'w101-s3', number: 3, title: 'Develop with Hono Framework', description: 'Install Hono for streamlined routing: `npm install hono`. Build a simple API with GET/POST endpoints. Hono provides an Express-like experience optimized for Workers, making routing and middleware straightforward.' },
      { id: 'w101-s4', number: 4, title: 'Test Locally', description: 'Use `wrangler dev` to start a local development server. Test your Worker endpoints using curl or Postman. The dev server provides hot reload, making iteration quick. Debug using console.log statements visible in your terminal.' },
      { id: 'w101-s5', number: 5, title: 'Deploy to Production', description: 'Deploy your Worker with `wrangler deploy`. Your Worker is instantly available at your-worker.your-subdomain.workers.dev. Configure custom domains in the dashboard. Monitor performance and errors using Workers Analytics.' },
    ],
    rating: 4.9,
    ratingCount: 5234,
    comments: [
      { id: 'w101-c1', author: 'Alex Rivera', date: '2026-01-15', rating: 5, text: 'Best Workers tutorial I\'ve found! The Hono integration examples were particularly helpful.', helpful: 234 },
      { id: 'w101-c2', author: 'Priya Sharma', date: '2026-01-14', rating: 5, text: 'Clear, concise, and practical. Had my first Worker deployed in under 30 minutes.', helpful: 187 },
    ],
  },
  {
    id: 'ssl-tls-hardening',
    title: 'SSL/TLS Hardening Walkthrough',
    author: 'Cloudflare Security Team',
    videoUrl: 'https://customer-education.cloudflare.com/ssl-hardening', // Docs Stream source
    videoPoster: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    description: 'Configure SSL/TLS settings for maximum security and avoid common pitfalls like redirect loops.',
    totalTime: '20 minutes',
    difficulty: 'Intermediate',
    overview: 'SSL/TLS encryption protects data in transit between your visitors and your origin server. This tutorial covers how to properly configure Full (Strict) mode, manage certificates, and troubleshoot common SSL errors that can break your site.',
    moduleId: 'getting-started',
    ingredients: [
      { id: 'ssl-1', name: 'Active Domain', description: 'Proxied through Cloudflare', required: true },
      { id: 'ssl-2', name: 'Valid SSL Certificate', description: 'On your origin server', required: true },
      { id: 'ssl-3', name: 'Admin Access', description: 'To Cloudflare dashboard', required: true },
    ],
    steps: [
      { id: 'ssl-s1', number: 1, title: 'Understand SSL/TLS Modes', description: 'Review the four encryption modes: Off (not recommended), Flexible (Cloudflare to visitor only), Full (Cloudflare to visitor and origin, but origin cert can be self-signed), and Full (Strict) - the most secure option requiring a valid certificate.' },
      { id: 'ssl-s2', number: 2, title: 'Enable Full (Strict) Mode', description: 'Navigate to SSL/TLS > Overview. Select "Full (strict)" mode. This ensures end-to-end encryption with certificate validation. Your origin must have a valid SSL certificate from a trusted CA or Cloudflare Origin CA.' },
      { id: 'ssl-s3', number: 3, title: 'Install Origin CA Certificate', description: 'If you don\'t have an SSL certificate, create a free Cloudflare Origin CA certificate in SSL/TLS > Origin Server. Install it on your origin server. This certificate is trusted by Cloudflare but not by browsers (only used between Cloudflare and your origin).' },
      { id: 'ssl-s4', number: 4, title: 'Troubleshoot Redirect Loops', description: 'If you experience redirect loops after enabling Full (Strict), check your origin server configuration. Ensure it\'s not redirecting HTTPS to HTTP. Disable any "Force HTTPS" rules at the origin level - let Cloudflare handle redirects.' },
      { id: 'ssl-s5', number: 5, title: 'Enable Additional Security', description: 'Enable Always Use HTTPS, Automatic HTTPS Rewrites, and Opportunistic Encryption. Set minimum TLS version to 1.2 or higher. Enable TLS 1.3 for improved performance and security.' },
    ],
    rating: 4.8,
    ratingCount: 3891,
    comments: [
      { id: 'ssl-c1', author: 'Mike Thompson', date: '2026-01-13', rating: 5, text: 'The redirect loop troubleshooting section saved me hours! Finally understand the SSL modes.', helpful: 298 },
    ],
  },
  {
    id: 'api-tokens',
    title: 'API Scoping & Tokens Best Practices',
    author: 'Cloudflare Security Team',
    videoUrl: 'https://customer-education.cloudflare.com/api-tokens', // Docs Stream
    videoPoster: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
    description: 'Create secure, least-privilege API tokens for automation and integrations.',
    totalTime: '15 minutes',
    difficulty: 'Intermediate',
    overview: 'API tokens provide programmatic access to Cloudflare services. Following least-privilege principles and proper scoping protects your account from security breaches while enabling powerful automation.',
    moduleId: 'getting-started',
    ingredients: [
      { id: 'api-1', name: 'Cloudflare Account', description: 'With appropriate permissions', required: true },
      { id: 'api-2', name: 'Use Case Definition', description: 'Know what permissions you need', required: true },
    ],
    steps: [
      { id: 'api-s1', number: 1, title: 'Navigate to API Tokens', description: 'Go to My Profile > API Tokens. Review existing tokens and their permissions. Never share or commit tokens to version control.' },
      { id: 'api-s2', number: 2, title: 'Create Scoped Token', description: 'Click "Create Token". Choose a template or create custom. Select only the permissions required for your use case. Scope to specific zones if possible, not all zones.' },
      { id: 'api-s3', number: 3, title: 'Add IP Restrictions', description: 'Under "IP Address Filtering", allowlist only the IPs that will use this token. This adds an extra layer of security if the token is compromised.' },
      { id: 'api-s4', number: 4, title: 'Set TTL', description: 'Configure a time-to-live for temporary tokens. For CI/CD or scripts, set tokens to expire after a reasonable period and rotate them regularly.' },
      { id: 'api-s5', number: 5, title: 'Test and Monitor', description: 'Test your token with a simple API call. Monitor usage in the audit log. Revoke immediately if suspicious activity is detected.' },
    ],
    rating: 4.7,
    ratingCount: 2341,
    comments: [],
  },
  {
    id: 'email-routing-nav',
    title: 'Account Navigation: Finding Email Routing',
    author: 'Cloudflare Product Team',
    videoUrl: 'https://customer-education.cloudflare.com/email-routing-nav', // Docs Stream
    videoPoster: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=600&fit=crop',
    description: 'Quick tour of dashboard navigation with focus on Email Routing and member management.',
    totalTime: '8 minutes',
    difficulty: 'Easy',
    overview: 'Navigate the Cloudflare dashboard efficiently and find key features like Email Routing and team member management.',
    moduleId: 'getting-started',
    ingredients: [
      { id: 'nav-1', name: 'Cloudflare Account', description: 'Any plan level', required: true },
    ],
    steps: [
      { id: 'nav-s1', number: 1, title: 'Access Email Routing', description: 'From your domain dashboard, navigate to Email > Email Routing. Set up custom email addresses that forward to your inbox without needing a mail server.' },
      { id: 'nav-s2', number: 2, title: 'Manage Team Members', description: 'At the account level, go to Manage Account > Members. Invite team members with specific roles: Administrator, Read-only, or custom roles with granular permissions.' },
      { id: 'nav-s3', number: 3, title: 'Find Other Key Features', description: 'Explore the sidebar: Analytics for traffic insights, Security for WAF and DDoS, Performance for caching, and Traffic for load balancing.' },
    ],
    rating: 4.6,
    ratingCount: 1823,
    comments: [],
  },
  {
    id: 'load-balancing-basics',
    title: 'Load Balancing & WAF Basics',
    author: 'Cloudflare Infrastructure Team',
    videoUrl: 'https://www.youtube.com/watch?v=LOAD_BALANCING_ID', // YouTube
    videoPoster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    description: 'Introduction to global traffic management and web application firewall fundamentals.',
    totalTime: '25 minutes',
    difficulty: 'Intermediate',
    overview: 'Load balancing distributes traffic across multiple servers for high availability. Combined with WAF, you get both performance and security.',
    moduleId: 'getting-started',
    ingredients: [
      { id: 'lb-1', name: 'Multiple Origin Servers', description: 'At least 2 servers in different locations', required: true },
      { id: 'lb-2', name: 'Traffic or Business Plan', description: 'Required for Load Balancing', required: true },
    ],
    steps: [
      { id: 'lb-s1', number: 1, title: 'Create Health Checks', description: 'Define how Cloudflare monitors your origin servers. Configure HTTP/HTTPS endpoints, intervals, and failure thresholds.' },
      { id: 'lb-s2', number: 2, title: 'Configure Load Balancer', description: 'Set up pools of origin servers. Define steering policies: random, weighted, geo-based, or proximity. Enable session affinity if needed.' },
      { id: 'lb-s3', number: 3, title: 'Add WAF Protection', description: 'Enable WAF managed rules to protect your origins. Configure rate limiting to prevent abuse. Create custom rules for specific threats.' },
      { id: 'lb-s4', number: 4, title: 'Test Failover', description: 'Simulate origin failure to verify automatic failover works. Monitor traffic distribution in Analytics. Adjust health check sensitivity as needed.' },
    ],
    rating: 4.8,
    ratingCount: 4127,
    comments: [
      { id: 'lb-c1', author: 'James Lee', date: '2026-01-12', rating: 5, text: 'Excellent overview of both Load Balancing and WAF. The GTM strategy section was gold.', helpful: 156 },
    ],
  },
];

// MODULE 1: ZERO TRUST SECURITY
const zeroTrustTutorials: Tutorial[] = [
  {
    id: 'vpn-replacement',
    title: 'SASE: Replacing VPNs with Zero Trust',
    author: 'Cloudflare Zero Trust Team',
    videoUrl: 'https://cloudflare.tv/vpn-replacement', // CFTV
    videoPoster: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    description: 'Migrate from legacy VPNs to a modern Zero Trust Network Access (ZTNA) architecture.',
    totalTime: '35 minutes',
    difficulty: 'Advanced',
    overview: 'Traditional VPNs create security risks by granting broad network access. Zero Trust provides granular, identity-based access to specific applications without exposing your entire network.',
    moduleId: 'zero-trust',
    featured: true,
    updatedDate: 'Jan. 16, 2026',
    ingredients: [
      { id: 'zt-1', name: 'Cloudflare Zero Trust Plan', description: 'Free up to 50 users', required: true },
      { id: 'zt-2', name: 'Identity Provider', description: 'Okta, Azure AD, Google Workspace, etc.', required: true },
      { id: 'zt-3', name: 'Internal Applications', description: 'To secure behind Zero Trust', required: true },
    ],
    steps: [
      { id: 'zt-s1', number: 1, title: 'Set Up Zero Trust Dashboard', description: 'Navigate to Zero Trust dashboard. Connect your identity provider (IdP) for SSO. Configure user groups and attributes that will be used for access policies.' },
      { id: 'zt-s2', number: 2, title: 'Create Application Tunnels', description: 'Install cloudflared connector on your origin server. Create a tunnel to expose your internal application. No need to open inbound firewall ports.' },
      { id: 'zt-s3', number: 3, title: 'Define Access Policies', description: 'Create policies that define who can access each application. Use identity, device posture, location, and time-based rules. Start with read-only access, then expand permissions.' },
      { id: 'zt-s4', number: 4, title: 'Deploy WARP Client', description: 'Distribute WARP client to users. Configure device posture checks (OS version, disk encryption, firewall status). Users connect through WARP instead of VPN.' },
      { id: 'zt-s5', number: 5, title: 'Migrate and Monitor', description: 'Gradually migrate users from VPN to Zero Trust. Monitor access logs for anomalies. Create alerts for failed authentication attempts. Decommission VPN once migration complete.' },
    ],
    rating: 4.9,
    ratingCount: 3567,
    comments: [
      { id: 'zt-c1', author: 'Rachel Green', date: '2026-01-14', rating: 5, text: 'We eliminated our VPN completely using this approach. Security improved and users love it.', helpful: 412 },
      { id: 'zt-c2', author: 'Tom Anderson', date: '2026-01-13', rating: 5, text: 'The migration checklist was invaluable for our enterprise rollout.', helpful: 287 },
    ],
  },
  {
    id: 'browser-isolation',
    title: 'Browser Isolation Demo',
    author: 'Cloudflare Zero Trust Team',
    videoUrl: 'https://cloudflare.tv/browser-isolation', // CFTV
    videoPoster: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=600&fit=crop',
    description: 'Protect against browser-based threats by isolating web content in the cloud.',
    totalTime: '18 minutes',
    difficulty: 'Intermediate',
    overview: 'Browser Isolation executes web code in a remote browser, streaming only safe rendered content to users. This protects against zero-day exploits, malware, and phishing.',
    moduleId: 'zero-trust',
    ingredients: [
      { id: 'bi-1', name: 'Zero Trust Plan', description: 'With Browser Isolation enabled', required: true },
      { id: 'bi-2', name: 'Gateway Policies', description: 'Configured for traffic filtering', required: true },
    ],
    steps: [
      { id: 'bi-s1', number: 1, title: 'Enable Browser Isolation', description: 'In Zero Trust dashboard, enable Remote Browser Isolation. Choose isolation mode: Full isolation for maximum security, or clientless for compatibility.' },
      { id: 'bi-s2', number: 2, title: 'Configure Isolation Policies', description: 'Define which sites require isolation: all external sites, unknown sites, or specific categories (social media, personal email). Balance security with user experience.' },
      { id: 'bi-s3', number: 3, title: 'Set Permissions', description: 'Configure user permissions within isolated browsers: allow/block copy-paste, downloads, uploads, and printing. Stricter controls for high-risk sites.' },
      { id: 'bi-s4', number: 4, title: 'Test User Experience', description: 'Access isolated sites through WARP. Verify acceptable performance and functionality. Adjust isolation policies based on user feedback.' },
    ],
    rating: 4.7,
    ratingCount: 2134,
    comments: [],
  },
  {
    id: 'warp-fundamentals',
    title: 'WARP Client Fundamentals',
    author: 'Cloudflare Zero Trust Team',
    videoUrl: 'https://customer-education.cloudflare.com/warp-fundamentals', // Docs Stream
    videoPoster: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    description: 'Deploy and manage the WARP client for consumer and corporate use cases.',
    totalTime: '22 minutes',
    difficulty: 'Intermediate',
    overview: 'WARP is a modern VPN alternative that routes device traffic through Cloudflare\'s network for speed and security. Learn the differences between consumer and corporate WARP deployments.',
    moduleId: 'zero-trust',
    ingredients: [
      { id: 'warp-1', name: 'Cloudflare Account', description: 'Consumer WARP is free', required: true },
      { id: 'warp-2', name: 'Zero Trust Plan', description: 'For corporate WARP features', required: false },
      { id: 'warp-3', name: 'MDM Solution', description: 'Optional for managed deployments', required: false },
    ],
    steps: [
      { id: 'warp-s1', number: 1, title: 'Understand WARP Modes', description: 'WARP: Basic mode encrypts traffic to Cloudflare. WARP+: Enhanced routing for faster performance. Gateway with WARP: Enterprise mode with full Zero Trust integration for policy enforcement.' },
      { id: 'warp-s2', number: 2, title: 'Deploy to Devices', description: 'Download WARP from 1.1.1.1 or deploy via MDM. For corporate: Configure organization name and device enrollment settings in Zero Trust dashboard. Users authenticate via SSO.' },
      { id: 'warp-s3', number: 3, title: 'Configure Split Tunneling', description: 'Define which traffic goes through WARP and which uses local network. Exclude local IP ranges, video conferencing apps, or trusted corporate networks to optimize performance.' },
      { id: 'warp-s4', number: 4, title: 'Set Device Posture', description: 'Configure device posture checks: OS version, disk encryption status, firewall enabled, and specific software installed. Enforce posture before granting access to protected applications.' },
    ],
    rating: 4.8,
    ratingCount: 4521,
    comments: [
      { id: 'warp-c1', author: 'Lisa Wang', date: '2026-01-15', rating: 5, text: 'The consumer vs corporate comparison clarified our deployment strategy perfectly.', helpful: 223 },
    ],
  },
];

// MODULE 2: AI ENGINEERING
const aiEngineeringTutorials: Tutorial[] = [
  {
    id: 'ai-agents-101',
    title: 'Agents 101: Building Your First AI Agent',
    author: 'Cloudflare AI Team',
    videoUrl: 'https://www.youtube.com/watch?v=AI_AGENTS_ID', // YouTube
    videoPoster: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    description: 'Create autonomous AI agents that can use tools and make decisions.',
    totalTime: '30 minutes',
    difficulty: 'Intermediate',
    overview: 'AI Agents go beyond simple chat by using tools, accessing data, and making multi-step decisions. Learn to build agents that can actually accomplish tasks autonomously.',
    moduleId: 'ai-engineering',
    featured: true,
    updatedDate: 'Jan. 16, 2026',
    ingredients: [
      { id: 'agent-1', name: 'Workers AI Access', description: 'Available on Workers Paid plan', required: true },
      { id: 'agent-2', name: 'Basic LLM Knowledge', description: 'Understanding of prompts and completions', required: true },
      { id: 'agent-3', name: 'JavaScript/TypeScript', description: 'For agent logic', required: true },
    ],
    steps: [
      { id: 'agent-s1', number: 1, title: 'Define Agent Purpose', description: 'Start with a clear task: "Answer customer questions using documentation" or "Analyze data and generate reports". Define what tools the agent needs: search, calculator, API calls, etc.' },
      { id: 'agent-s2', number: 2, title: 'Create Tool Definitions', description: 'Define each tool with a clear schema: name, description, and parameters. The LLM uses these definitions to decide when to call each tool. Be specific - vague descriptions lead to incorrect tool usage.' },
      { id: 'agent-s3', number: 3, title: 'Implement Agent Loop', description: 'Create the reasoning loop: LLM analyzes task → decides to use tool → executes tool → receives result → continues reasoning. Implement safeguards: maximum iterations, timeout, and error handling.' },
      { id: 'agent-s4', number: 4, title: 'Test Edge Cases', description: 'Test with unclear requests, missing data, and tool failures. Agents should gracefully handle errors and ask clarifying questions rather than guessing.' },
      { id: 'agent-s5', number: 5, title: 'Monitor Performance', description: 'Log agent decisions and tool usage. Track success rate, response time, and cost per request. Refine tool descriptions and prompts based on real usage patterns.' },
    ],
    rating: 4.9,
    ratingCount: 2876,
    comments: [
      { id: 'agent-c1', author: 'Carlos Mendez', date: '2026-01-14', rating: 5, text: 'The tool definition best practices section was exactly what I needed. Built a working agent in one afternoon!', helpful: 189 },
    ],
  },
  {
    id: 'workers-ai-multimodal',
    title: 'Workers AI: Multimodal Models',
    author: 'Cloudflare AI Team',
    videoUrl: 'https://cloudflare.tv/workers-ai-multimodal', // CFTV
    videoPoster: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200&h=600&fit=crop',
    description: 'Work with text, images, and audio in a single AI workflow using Workers AI.',
    totalTime: '28 minutes',
    difficulty: 'Advanced',
    overview: 'Multimodal AI models can process and generate different types of content: text, images, and audio. Build applications that combine these capabilities for powerful user experiences.',
    moduleId: 'ai-engineering',
    ingredients: [
      { id: 'mm-1', name: 'Workers AI', description: 'With multimodal model access', required: true },
      { id: 'mm-2', name: 'Object Storage', description: 'R2 for storing media files', required: true },
    ],
    steps: [
      { id: 'mm-s1', number: 1, title: 'Choose the Right Model', description: 'Review available multimodal models. Some handle vision + text, others do audio. Consider model size, latency requirements, and accuracy for your use case. Start with smaller models for testing.' },
      { id: 'mm-s2', number: 2, title: 'Process Images with Text', description: 'Use vision models to analyze images: extract text (OCR), identify objects, answer questions about image content. Combine with text generation for detailed descriptions.' },
      { id: 'mm-s3', number: 3, title: 'Handle Audio Input', description: 'Transcribe audio to text using Whisper model. Process transcription with LLMs for summarization, sentiment analysis, or Q&A. Maintain speaker attribution if needed.' },
      { id: 'mm-s4', number: 4, title: 'Optimize Performance', description: 'Resize images before processing to reduce latency. Stream audio processing for real-time applications. Cache expensive model outputs. Consider chunking large files.' },
    ],
    rating: 4.8,
    ratingCount: 1943,
    comments: [],
  },
  {
    id: 'ai-gateway-observability',
    title: 'AI Gateway: Observability & Rate Limiting',
    author: 'Cloudflare AI Team',
    videoUrl: 'https://cloudflare.tv/ai-gateway', // CFTV
    videoPoster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    description: 'Monitor, control, and optimize your AI API usage with AI Gateway.',
    totalTime: '20 minutes',
    difficulty: 'Intermediate',
    overview: 'AI Gateway sits between your application and AI providers, giving you visibility, caching, and rate limiting for any AI API including OpenAI, Anthropic, and Workers AI.',
    moduleId: 'ai-engineering',
    ingredients: [
      { id: 'gw-1', name: 'AI Gateway Access', description: 'Free to use with any Cloudflare account', required: true },
      { id: 'gw-2', name: 'AI API Provider', description: 'OpenAI, Workers AI, or others', required: true },
    ],
    steps: [
      { id: 'gw-s1', number: 1, title: 'Create AI Gateway', description: 'Navigate to AI > AI Gateway in dashboard. Create a new gateway with a unique ID. Configure upstream provider (OpenAI, Workers AI, etc.). Copy the gateway URL.' },
      { id: 'gw-s2', number: 2, title: 'Route Traffic Through Gateway', description: 'Update your application to use gateway URL instead of provider\'s direct URL. Pass your API key in requests. Gateway transparently proxies to provider while logging analytics.' },
      { id: 'gw-s3', number: 3, title: 'Configure Rate Limiting', description: 'Set rate limits per user, per API key, or globally. Define limits by tokens, requests, or cost. Gateway rejects excess requests before hitting provider, saving money and avoiding overages.' },
      { id: 'gw-s4', number: 4, title: 'Enable Caching', description: 'Cache common requests to reduce latency and cost. Set cache TTL based on how fresh responses need to be. Cache works particularly well for embeddings and classification tasks with repeated inputs.' },
      { id: 'gw-s5', number: 5, title: 'Monitor Analytics', description: 'View request volume, token usage, cost, latency, and error rates. Break down by user, model, and application. Use insights to optimize model selection and prompt efficiency.' },
    ],
    rating: 4.7,
    ratingCount: 2654,
    comments: [
      { id: 'gw-c1', author: 'Jennifer Park', date: '2026-01-13', rating: 5, text: 'Saved us 40% on AI costs just by enabling caching. The analytics are fantastic.', helpful: 276 },
    ],
  },
];

// MODULE 3: FULL-STACK DEVELOPMENT
const fullStackTutorials: Tutorial[] = [
  {
    id: 'durable-objects',
    title: 'Durable Objects: Stateful Patterns',
    author: 'Cloudflare Developer Relations',
    videoUrl: 'https://www.youtube.com/watch?v=DURABLE_OBJECTS_ID', // YouTube
    videoPoster: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&h=600&fit=crop',
    description: 'Build stateful, real-time applications using Durable Objects for coordinated state management.',
    totalTime: '40 minutes',
    difficulty: 'Advanced',
    overview: 'Durable Objects provide low-latency coordination and consistent state for distributed applications. Perfect for real-time collaboration, game servers, and IoT device management.',
    moduleId: 'full-stack',
    featured: true,
    updatedDate: 'Jan. 16, 2026',
    ingredients: [
      { id: 'do-1', name: 'Workers Paid Plan', description: 'Durable Objects require Workers Paid', required: true },
      { id: 'do-2', name: 'TypeScript Knowledge', description: 'Recommended for complex state', required: true },
      { id: 'do-3', name: 'WebSocket Understanding', description: 'For real-time features', required: false },
    ],
    steps: [
      { id: 'do-s1', number: 1, title: 'Understand the Actor Model', description: 'Each Durable Object is an "actor" with single-threaded execution and private state. Objects are identified by unique IDs. Requests to the same ID are routed to the same instance globally.' },
      { id: 'do-s2', number: 2, title: 'Create Durable Object Class', description: 'Define your Durable Object class with state, fetch handler, and methods. Initialize state in constructor. Use this.state.storage for persistent data that survives restarts.' },
      { id: 'do-s3', number: 3, title: 'Implement Storage Patterns', description: 'Use storage.get/put for key-value operations. List keys with storage.list. Use transactions for atomic updates. Understand storage consistency guarantees and limits.' },
      { id: 'do-s4', number: 4, title: 'Add WebSocket Support', description: 'Accept WebSocket connections in fetch handler. Broadcast messages to all connected clients. Maintain connection state. Handle disconnections gracefully.' },
      { id: 'do-s5', number: 5, title: 'Handle Object Lifecycle', description: 'Objects are created on first request and evicted after inactivity. Implement alarm() for scheduled tasks. Use blockConcurrencyWhile() for initialization. Monitor object count and requests in dashboard.' },
    ],
    rating: 4.9,
    ratingCount: 3201,
    comments: [
      { id: 'do-c1', author: 'Nathan Chen', date: '2026-01-14', rating: 5, text: 'The actor model explanation with diagrams finally made it click. Built a collaborative editor!', helpful: 334 },
      { id: 'do-c2', author: 'Sophie Martin', date: '2026-01-12', rating: 5, text: 'Best Durable Objects tutorial available. The storage patterns section is gold.', helpful: 298 },
    ],
  },
  {
    id: 'd1-advanced',
    title: 'Advanced Data Patterns with D1',
    author: 'Cloudflare Developer Relations',
    videoUrl: 'https://www.youtube.com/watch?v=D1_ADVANCED_ID', // YouTube
    videoPoster: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=600&fit=crop',
    description: 'Master D1 SQLite database with migrations, queries, and architectural patterns.',
    totalTime: '35 minutes',
    difficulty: 'Advanced',
    overview: 'D1 is Cloudflare\'s serverless SQL database built on SQLite. Learn when to use D1 vs KV, how to structure schemas, and optimize queries for edge performance.',
    moduleId: 'full-stack',
    ingredients: [
      { id: 'd1-1', name: 'Workers Account', description: 'D1 available on all plans', required: true },
      { id: 'd1-2', name: 'SQL Knowledge', description: 'Basic SQL understanding', required: true },
      { id: 'd1-3', name: 'Wrangler CLI', description: 'For database management', required: true },
    ],
    steps: [
      { id: 'd1-s1', number: 1, title: 'Create D1 Database', description: 'Run `wrangler d1 create my-database` to create database. Update wrangler.toml with binding. D1 is SQLite, so you get full relational database capabilities at the edge.' },
      { id: 'd1-s2', number: 2, title: 'Design Schema', description: 'Create migration files for schema changes. Use proper indexes for query performance. Consider edge replication delays - design for eventual consistency. Use foreign keys for data integrity.' },
      { id: 'd1-s3', number: 3, title: 'Understand D1 vs KV', description: 'Use D1 for: relational data, complex queries, and when you need SQL. Use KV for: simple key-value, extremely low latency, and large binary values. Often best to use both together.' },
      { id: 'd1-s4', number: 4, title: 'Optimize Queries', description: 'Use prepared statements for security and performance. Batch operations when possible. Be mindful of read vs write latency - reads are fast at edge, writes replicate globally. Index frequently queried columns.' },
      { id: 'd1-s5', number: 5, title: 'Implement Connection Patterns', description: 'Use query binding in Workers for efficient connections. Handle errors gracefully. Implement retry logic for transient failures. Monitor query performance in dashboard.' },
    ],
    rating: 4.8,
    ratingCount: 2765,
    comments: [
      { id: 'd1-c1', author: 'Kevin Liu', date: '2026-01-13', rating: 5, text: 'The D1 vs KV decision guide saved us from a costly architectural mistake.', helpful: 245 },
    ],
  },
  {
    id: 'workflows-intro',
    title: 'Durable Execution with Workflows',
    author: 'Cloudflare Developer Relations',
    videoUrl: 'https://customer-education.cloudflare.com/workflows-intro', // Docs Stream (3 parts bundled)
    videoPoster: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=600&fit=crop',
    description: 'Build reliable, long-running workflows that automatically retry and recover from failures.',
    totalTime: '45 minutes',
    difficulty: 'Advanced',
    overview: 'Workflows (also called Durable Execution) let you write long-running processes that survive Worker restarts and failures. Perfect for orchestrating multi-step business processes.',
    moduleId: 'full-stack',
    ingredients: [
      { id: 'wf-1', name: 'Workers Paid Plan', description: 'Workflows in beta', required: true },
      { id: 'wf-2', name: 'Understanding of Async', description: 'Promise-based programming', required: true },
    ],
    steps: [
      { id: 'wf-s1', number: 1, title: 'Understand Durable Execution', description: 'Regular Workers timeout after 30s-50s. Workflows can run for hours or days. If a Worker restarts, Workflows automatically resume from the last checkpoint. State is preserved across retries.' },
      { id: 'wf-s2', number: 2, title: 'Define Workflow Steps', description: 'Break your process into logical steps. Each step is automatically checkpointed. If a step fails, only that step retries, not the entire workflow. Steps can be synchronous or asynchronous.' },
      { id: 'wf-s3', number: 3, title: 'Implement Error Handling', description: 'Configure retry policies per step: exponential backoff, max attempts, timeout. Implement compensating transactions for rollback. Use try-catch for graceful degradation.' },
      { id: 'wf-s4', number: 4, title: 'Add External Integrations', description: 'Call external APIs within workflow steps. Workflows persist state even if API is temporarily down. Implement idempotency keys for safe retries of non-idempotent operations.' },
      { id: 'wf-s5', number: 5, title: 'Monitor Workflow Execution', description: 'View workflow status, duration, and error rates in dashboard. Implement logging for debugging. Set up alerts for failed workflows. Query workflow state programmatically.' },
    ],
    rating: 4.7,
    ratingCount: 1876,
    comments: [],
  },
  {
    id: 'realtimekit-learnly',
    title: 'Building Real-Time Apps with RealtimeKit',
    author: 'Cloudflare Developer Relations',
    videoUrl: 'https://www.youtube.com/watch?v=REALTIMEKIT_ID', // YouTube - Learnly demo app
    videoPoster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
    description: 'Build the Learnly collaborative learning app using RealtimeKit for WebRTC connections.',
    totalTime: '50 minutes',
    difficulty: 'Advanced',
    overview: 'RealtimeKit simplifies WebRTC for real-time audio, video, and data channels. Build collaborative applications without managing complex WebRTC signaling.',
    moduleId: 'full-stack',
    ingredients: [
      { id: 'rtk-1', name: 'Cloudflare Account', description: 'RealtimeKit in beta', required: true },
      { id: 'rtk-2', name: 'Frontend Framework', description: 'React, Vue, or vanilla JS', required: true },
      { id: 'rtk-3', name: 'WebRTC Basics', description: 'Helpful but not required', required: false },
    ],
    steps: [
      { id: 'rtk-s1', number: 1, title: 'Initialize RealtimeKit Session', description: 'Create a room for participants to join. Generate join tokens with appropriate permissions. Users connect to room using client SDK. RealtimeKit handles WebRTC negotiation automatically.' },
      { id: 'rtk-s2', number: 2, title: 'Implement Audio/Video', description: 'Access user\'s media devices. Publish local audio/video tracks to room. Subscribe to remote participant tracks. RealtimeKit optimizes routing for lowest latency.' },
      { id: 'rtk-s3', number: 3, title: 'Add Data Channels', description: 'Send real-time data between participants: chat messages, cursor positions, or application state. Data channels are faster than HTTP for frequent updates. Choose reliable or unreliable delivery.' },
      { id: 'rtk-s4', number: 4, title: 'Handle Connection State', description: 'Manage participant join/leave events. Handle network disconnections gracefully. Implement reconnection logic. Show connection quality indicators to users.' },
      { id: 'rtk-s5', number: 5, title: 'Compare with WebRTC', description: 'RealtimeKit abstracts: signaling, STUN/TURN servers, and ICE negotiation. Use raw WebRTC when you need fine-grained control. RealtimeKit when you want simplicity and Cloudflare-optimized routing.' },
    ],
    rating: 4.8,
    ratingCount: 2341,
    comments: [
      { id: 'rtk-c1', author: 'Emily Rodriguez', date: '2026-01-15', rating: 5, text: 'The Learnly demo app was a perfect example. Built our own collab tool in 3 days!', helpful: 198 },
    ],
  },
];

// MODULE 4: INFRASTRUCTURE & SECURITY
const infraSecurityTutorials: Tutorial[] = [
  {
    id: 'security-analytics',
    title: 'Security Analytics Walkthrough',
    author: 'Cloudflare Security Team',
    videoUrl: 'https://customer-education.cloudflare.com/security-analytics', // Docs Stream
    videoPoster: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
    description: 'Identify DDoS patterns, threats, and anomalies using Security Analytics dashboards.',
    totalTime: '25 minutes',
    difficulty: 'Intermediate',
    overview: 'Security Analytics provides real-time visibility into attacks, bot traffic, and security events. Learn to quickly identify threats and respond to incidents.',
    moduleId: 'infra-security',
    featured: true,
    updatedDate: 'Jan. 16, 2026',
    ingredients: [
      { id: 'sa-1', name: 'Cloudflare Account', description: 'Pro plan or higher recommended', required: true },
      { id: 'sa-2', name: 'Active Traffic', description: 'To see meaningful analytics', required: true },
    ],
    steps: [
      { id: 'sa-s1', number: 1, title: 'Navigate Security Analytics', description: 'Go to Security > Analytics. View overview of threats: DDoS attacks, WAF events, rate limiting, and bot traffic. Use date range selector for historical analysis.' },
      { id: 'sa-s2', number: 2, title: 'Identify DDoS Patterns', description: 'Check "Traffic" tab for volumetric attacks. Look for spikes in requests, bandwidth, or specific protocols. Note source countries and ASNs. Cloudflare automatically mitigates most attacks.' },
      { id: 'sa-s3', number: 3, title: 'Analyze WAF Events', description: 'Review blocked vs challenged requests. Filter by rule ID to find common triggers. Check for false positives. Drill down into specific Ray IDs for detailed request information.' },
      { id: 'sa-s4', number: 4, title: 'Monitor Bot Traffic', description: 'View bot score distribution. Identify verified bots (good) vs likely bots (bad). Use Bot Management to create policies. Watch for automation attacks like credential stuffing.' },
      { id: 'sa-s5', number: 5, title: 'Create Incident Response', description: 'When attack detected: Document Ray IDs and patterns. Create targeted firewall rules to block attack vectors. Set up notifications for future similar patterns. Export logs for post-mortem analysis.' },
    ],
    rating: 4.8,
    ratingCount: 3456,
    comments: [
      { id: 'sa-c1', author: 'Robert Chang', date: '2026-01-14', rating: 5, text: 'Caught a low-and-slow attack that we would have missed otherwise. The DDoS pattern section was invaluable.', helpful: 267 },
    ],
  },
  {
    id: 'waf-api-shield',
    title: 'WAF & API Shield Deep Dive',
    author: 'Cloudflare Security Team',
    videoUrl: 'https://www.youtube.com/watch?v=WAF_API_SHIELD_ID', // YouTube
    videoPoster: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop',
    description: 'Advanced WAF configuration and API protection strategies using Schema Validation and mTLS.',
    totalTime: '40 minutes',
    difficulty: 'Advanced',
    overview: 'Protect web applications and APIs with Cloudflare\'s WAF and API Shield. Learn advanced rule building, false positive handling, and API-specific security controls.',
    moduleId: 'infra-security',
    ingredients: [
      { id: 'waf-1', name: 'Pro Plan or Higher', description: 'For WAF access', required: true },
      { id: 'waf-2', name: 'Enterprise Plan', description: 'For full API Shield features', required: false },
      { id: 'waf-3', name: 'API Endpoints', description: 'To protect with API Shield', required: false },
    ],
    steps: [
      { id: 'waf-s1', number: 1, title: 'Configure Managed Rules', description: 'Enable OWASP Core Ruleset and Cloudflare Managed Ruleset. Set paranoia level based on risk tolerance. Review rule descriptions to understand what each blocks. Start with lower sensitivity, increase gradually.' },
      { id: 'waf-s2', number: 2, title: 'Build Custom Rules', description: 'Use Rule Builder for complex logic: combine fields with AND/OR operators. Match on IP, country, URI, headers, body, and more. Test rules in Log mode before enforcing. Order matters - allow rules first, then blocks.' },
      { id: 'waf-s3', number: 3, title: 'Handle False Positives', description: 'Use Security Events to find false positives. Create WAF exceptions for specific rules on specific paths. Use Skip action strategically. Document all exceptions for security audits.' },
      { id: 'waf-s4', number: 4, title: 'Enable API Shield', description: 'Upload OpenAPI schema for validation. Enable Schema Validation to block requests that don\'t match spec. Configure mTLS for client certificate authentication. Use JWT Validation for token-based APIs.' },
      { id: 'waf-s5', number: 5, title: 'Create Interactive False Positive Quiz', description: 'Test your understanding: Given a blocked request, determine if it\'s legitimate or malicious. Practice tuning rules without compromising security. Learn from common false positive scenarios.' },
    ],
    rating: 4.9,
    ratingCount: 4123,
    comments: [
      { id: 'waf-c2', author: 'Diana Foster', date: '2026-01-13', rating: 5, text: 'The Rule Builder section with actual examples was perfect. Finally understand WAF expression language!', helpful: 312 },
      { id: 'waf-c3', author: 'Ahmed Hassan', date: '2026-01-11', rating: 5, text: 'API Schema Validation caught malformed requests we didn\'t know existed. Great tutorial.', helpful: 289 },
    ],
  },
];

// MODULE 5: SPECIALIZED OPERATIONS
const specializedOpsTutorials: Tutorial[] = [
  {
    id: 'china-network',
    title: 'China Network Acceleration',
    author: 'Cloudflare Network Team',
    videoUrl: 'https://customer-education.cloudflare.com/china-network', // Docs Stream
    videoPoster: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=1200&h=600&fit=crop',
    description: 'Optimize content delivery to China with Cloudflare\'s China Network and understand compliance requirements.',
    totalTime: '30 minutes',
    difficulty: 'Advanced',
    overview: 'Delivering content to China requires special infrastructure and compliance. Learn how Cloudflare\'s China Network partnerships accelerate delivery while meeting regulatory requirements.',
    moduleId: 'specialized-ops',
    featured: true,
    updatedDate: 'Jan. 16, 2026',
    ingredients: [
      { id: 'cn-1', name: 'Enterprise Plan', description: 'China Network is Enterprise-only', required: true },
      { id: 'cn-2', name: 'ICP License', description: 'Required for China Network', required: true },
      { id: 'cn-3', name: 'Local Presence', description: 'Entity in China or partner', required: true },
    ],
    steps: [
      { id: 'cn-s1', number: 1, title: 'Understand Compliance', description: 'China requires ICP (Internet Content Provider) license for websites. Certain content categories require additional licenses. Work with legal team to ensure compliance. Cloudflare partners with JD Cloud for local data center presence.' },
      { id: 'cn-s2', number: 2, title: 'Enable China Network', description: 'Contact Cloudflare Enterprise team to enable China Network. Provide ICP license information. Configure split routing: China traffic goes through JD Cloud partnership, rest of world uses standard Cloudflare.' },
      { id: 'cn-s3', number: 3, title: 'Optimize for Latency', description: 'Test latency from different Chinese cities. Consider placing cache in Hong Kong as fallback. Use Argo Smart Routing for optimal path selection. Monitor cross-border latency to origin.' },
      { id: 'cn-s4', number: 4, title: 'Configure Content Policies', description: 'Implement geo-blocking if needed for compliance. Consider different content for China vs global audience. Use Workers for intelligent routing based on location and compliance rules.' },
    ],
    rating: 4.6,
    ratingCount: 1234,
    comments: [
      { id: 'cn-c1', author: 'Li Wei', date: '2026-01-12', rating: 5, text: 'The compliance overlay made understanding requirements much easier. Reduced our China latency by 60%.', helpful: 98 },
    ],
  },
  {
    id: 'ssl-only-origin',
    title: 'SSL Only Origin Pull Configuration',
    author: 'Cloudflare Security Team',
    videoUrl: 'https://customer-education.cloudflare.com/ssl-origin-pull', // Docs Stream
    videoPoster: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=600&fit=crop',
    description: 'Secure the connection between Cloudflare and your origin with authenticated origin pulls.',
    totalTime: '18 minutes',
    difficulty: 'Intermediate',
    overview: 'Authenticated Origin Pull ensures that ONLY Cloudflare can connect to your origin server, blocking direct attacks that bypass Cloudflare\'s protection.',
    moduleId: 'specialized-ops',
    ingredients: [
      { id: 'aop-1', name: 'Origin Server Access', description: 'To install certificates', required: true },
      { id: 'aop-2', name: 'Valid SSL Certificate', description: 'On origin server', required: true },
    ],
    steps: [
      { id: 'aop-s1', number: 1, title: 'Understand Origin Pull', description: 'Standard setup: Cloudflare connects to your origin, but anyone who knows your origin IP can too. Authenticated Origin Pull: Origin only accepts connections with Cloudflare\'s client certificate.' },
      { id: 'aop-s2', number: 2, title: 'Enable Authenticated Origin Pull', description: 'Go to SSL/TLS > Origin Server > Authenticated Origin Pulls. Enable the feature. Download Cloudflare\'s client certificate. This certificate proves requests come from Cloudflare.' },
      { id: 'aop-s3', number: 3, title: 'Configure Origin Server', description: 'Install Cloudflare client certificate on your origin. Configure web server to require client certificate for all HTTPS requests. Test that direct connections (without certificate) are rejected.' },
      { id: 'aop-s4', number: 4, title: 'Verify Connection Security', description: 'Test your site loads normally through Cloudflare. Attempt direct connection to origin IP - should be rejected. Monitor origin access logs to ensure no unauthorized connections. Use with IP allowlist for defense in depth.' },
    ],
    rating: 4.7,
    ratingCount: 2156,
    comments: [],
  },
];

// Create Module Collections
export const allModuleCollections: ModuleCollection[] = [
  {
    id: 'getting-started',
    title: 'Module 0: Getting Started (MVP Bundle)',
    description: 'Essential foundations for using Cloudflare: Workers, SSL/TLS, API tokens, and dashboard navigation.',
    tutorials: gettingStartedTutorials,
  },
  {
    id: 'zero-trust',
    title: 'Module 1: Zero Trust Security',
    description: 'Replace VPNs with modern Zero Trust architecture using WARP, Browser Isolation, and identity-based access controls.',
    tutorials: zeroTrustTutorials,
  },
  {
    id: 'ai-engineering',
    title: 'Module 2: AI Engineering',
    description: 'Build intelligent applications with AI Agents, Workers AI multimodal models, and AI Gateway for observability.',
    tutorials: aiEngineeringTutorials,
  },
  {
    id: 'full-stack',
    title: 'Module 3: Full-Stack Development',
    description: 'Master stateful patterns with Durable Objects, D1 database, Workflows, and RealtimeKit for real-time applications.',
    tutorials: fullStackTutorials,
  },
  {
    id: 'infra-security',
    title: 'Module 4: Infrastructure & Security',
    description: 'Deep dive into Security Analytics, WAF configuration, API Shield, and advanced threat detection.',
    tutorials: infraSecurityTutorials,
  },
  {
    id: 'specialized-ops',
    title: 'Module 5: Specialized Operations',
    description: 'Advanced topics: China Network acceleration and Authenticated Origin Pull for maximum security.',
    tutorials: specializedOpsTutorials,
  },
];

// Featured tutorial for homepage
export const featuredTutorial: Tutorial = gettingStartedTutorials[0]; // Workers 101

// All tutorials flattened for search/filtering
export const allTutorials: Tutorial[] = allModuleCollections.flatMap(module => module.tutorials);
