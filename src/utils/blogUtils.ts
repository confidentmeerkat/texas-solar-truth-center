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
    slug: 'understanding-solar-panel-fraud-red-flags',
    title: 'Understanding Solar Panel Fraud: Red Flags to Watch For',
    excerpt: 'Learn to identify the warning signs of solar panel scams and protect yourself from fraudulent solar companies.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Fraud Prevention',
    author: 'Sarah Bennett',
    featured: true
  },
  {
    slug: 'legal-rights-solar-companies',
    title: 'Your Legal Rights When Dealing with Solar Companies',
    excerpt: 'Know your consumer rights and legal protections when purchasing solar panels in Texas.',
    date: '2024-01-20',
    readTime: '6 min read',
    category: 'Legal Guidance',
    author: 'Michael Chen',
    featured: false
  },
  {
    slug: 'how-to-report-solar-panel-fraud',
    title: 'How to Report Solar Panel Fraud: A Step-by-Step Guide',
    excerpt: 'Complete guide on reporting solar fraud to authorities and taking legal action to recover your losses.',
    date: '2024-02-01',
    readTime: '7 min read',
    category: 'Legal Guidance',
    author: 'Jennifer Rodriguez',
    featured: true
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