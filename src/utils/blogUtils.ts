interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  featured?: boolean;
}

// Static blog metadata - no need to load full files for listing
const BLOG_POSTS_METADATA: BlogPostMeta[] = [
  {
    slug: 'free-ebook-texas-solar-fraud-guide',
    title: 'FREE EBOOK: Texas Solar Panel Fraud - A Homeowner\'s Complete Guide to Your Rights',
    excerpt: 'Download our comprehensive free guide covering your legal rights, warning signs to watch for, and step-by-step actions to protect yourself from solar panel fraud in Texas.',
    date: '2025-02-25',
    readTime: '8 min read',
    category: 'Free Resources',
    author: 'Charles Bennett, Bennett Legal',
    featured: true
  },
  {
    slug: 'solar-fraud-crisis-2008-parallels',
    title: 'A Shadow Over the Sun: How Predatory Solar Schemes Echo the 2008 Crisis',
    excerpt: 'An in-depth investigation into the solar fraud epidemic affecting 160,000 Americans, revealing disturbing parallels to the 2008 financial crisis and how AI technology is being used to fight back.',
    date: '2025-02-20',
    readTime: '15 min read',
    category: 'Investigation',
    author: 'Charles Bennett, Bennett Legal',
    featured: true
  },
  {
    slug: 'texas-senate-bill-1036-solar-regulations',
    title: 'Texas Senate Bill 1036: New Solar Industry Regulations and Consumer Protections',
    excerpt: 'Comprehensive analysis of Texas\'s groundbreaking legislation to combat solar panel fraud and protect consumers from deceptive practices.',
    date: '2025-02-15',
    readTime: '12 min read',
    category: 'Legal Updates',
    author: 'Charles Bennett, Bennett Legal',
    featured: true
  },
  {
    slug: 'how-to-spot-solar-panel-scams-texas',
    title: 'How to Spot Solar Panel Scams in Texas: Complete Red Flags Guide',
    excerpt: 'Essential guide to identifying solar panel fraud before you become a victim. Learn the warning signs that protect Texas homeowners.',
    date: '2025-02-10',
    readTime: '10 min read',
    category: 'Fraud Prevention',
    author: 'Charles Bennett, Bennett Legal',
    featured: true
  },
  {
    slug: 'texas-homeowners-legal-rights-solar-fraud',
    title: 'Texas Homeowners\' Legal Rights Against Misleading Solar Companies',
    excerpt: 'Comprehensive guide to your legal rights under Texas law when solar companies fail to deliver on their promises.',
    date: '2025-02-08',
    readTime: '9 min read',
    category: 'Legal Guidance',
    author: 'Charles Bennett, Bennett Legal',
    featured: false
  },
  {
    slug: 'texas-solar-panel-boom-fraud-crisis',
    title: 'Why Texas Solar Panel Boom Became a Nightmare for Thousands of Homeowners',
    excerpt: 'Investigation into how Texas\'s solar energy expansion created opportunities for widespread consumer fraud and financial devastation.',
    date: '2025-02-05',
    readTime: '11 min read',
    category: 'Industry Analysis',
    author: 'Charles Bennett, Bennett Legal',
    featured: false
  },
  {
    slug: 'texas-solar-panel-financing-fraud-compensation',
    title: 'Texas Solar Panel Financing Fraud: Are You Owed Compensation?',
    excerpt: 'Detailed analysis of predatory solar financing practices and how Texas homeowners can recover compensation under consumer protection laws.',
    date: '2025-02-03',
    readTime: '8 min read',
    category: 'Legal Guidance',
    author: 'Charles Bennett, Bennett Legal',
    featured: false
  },
  {
    slug: 'understanding-solar-panel-fraud-red-flags',
    title: 'Understanding Solar Panel Fraud: Red Flags to Watch For',
    excerpt: 'Learn to identify the warning signs of solar panel scams and protect yourself from fraudulent solar companies.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Fraud Prevention',
    author: 'Charles Bennett, Bennett Legal',
    featured: false
  },
  {
    slug: 'legal-rights-solar-companies',
    title: 'Your Legal Rights When Dealing with Solar Companies',
    excerpt: 'Know your consumer rights and legal protections when purchasing solar panels in Texas.',
    date: '2025-01-20',
    readTime: '6 min read',
    category: 'Legal Guidance',
    author: 'Charles Bennett, Bennett Legal',
    featured: false
  },
  {
    slug: 'how-to-report-solar-panel-fraud',
    title: 'How to Report Solar Panel Fraud: A Step-by-Step Guide',
    excerpt: 'Complete guide on reporting solar fraud to authorities and taking legal action to recover your losses.',
    date: '2025-02-01',
    readTime: '7 min read',
    category: 'Legal Guidance',
    author: 'Charles Bennett, Bennett Legal',
    featured: false
  }
];

// Fast blog listing - uses static metadata
export async function loadAllBlogPosts(): Promise<BlogPostMeta[]> {
  // Sort by date (newest first) and return immediately
  return BLOG_POSTS_METADATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Load a single blog post content (only when viewing individual posts)
export async function loadBlogPost(slug: string): Promise<{ content: string; metadata: BlogPostMeta } | null> {
  try {
    const response = await fetch(`/blog/${slug}.md`);
    if (!response.ok) {
      return null;
    }

    const content = await response.text();
    // Get metadata from static data, not by parsing content
    const metadata = BLOG_POSTS_METADATA.find(post => post.slug === slug);

    if (!metadata) {
      return null;
    }

    return { content, metadata };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
}

// Get unique categories from all blog posts
export function getUniqueCategories(posts: BlogPostMeta[]): string[] {
  const categories = Array.from(new Set(posts.map(post => post.category)));
  return categories.sort();
}