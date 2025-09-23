import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Clock, ArrowLeft, User, Phone, MessageCircle } from 'lucide-react';
import { loadBlogPost } from '@/utils/blogUtils';
import CTASection from '@/components/ui/cta-section';
import AudioStory from '@/components/ui/audio-story';

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

// Author information for schema and display
const AUTHOR_INFO = {
  name: "Charles Bennett, Bennett Legal",
  bio: "Experienced consumer protection attorney specializing in solar fraud cases and helping victims recover from scams. Over 15 years helping Texans fight fraudulent solar companies and recover their losses.",
  url: window.location.origin + "/about"
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [postMeta, setPostMeta] = useState<BlogPostMeta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const result = await loadBlogPost(slug);
        if (result) {
          setContent(result.content);
          setPostMeta(result.metadata);
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!postMeta || !content) {
    return <Navigate to="/blog" replace />;
  }

  const articleUrl = `${window.location.origin}/blog/${slug}`;

  // Structured data for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postMeta.title,
    "description": postMeta.excerpt,
    "datePublished": postMeta.date,
    "dateModified": postMeta.date,
    "author": {
      "@type": "Person",
      "name": AUTHOR_INFO.name,
      "description": AUTHOR_INFO.bio,
      "url": AUTHOR_INFO.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bennett Legal",
      "url": window.location.origin
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": postMeta.category,
    "wordCount": content.split(' ').length
  };

  return (
    <>
      <Helmet>
        <title>{postMeta.title} | Bennett Legal Blog</title>
        <meta name="description" content={postMeta.excerpt} />
        <meta name="keywords" content={`solar fraud, ${postMeta.category.toLowerCase()}, Texas solar law, Bennett Legal, ${postMeta.title.split(':')[0]}`} />
        <meta name="author" content={AUTHOR_INFO.name} />
        <meta name="article:published_time" content={postMeta.date} />
        <meta name="article:modified_time" content={postMeta.date} />
        <meta name="article:author" content={postMeta.author} />
        <meta name="article:section" content={postMeta.category} />
        <meta name="article:tag" content="solar fraud, consumer protection, Texas law" />
        
        {/* Open Graph Article Tags */}
        <meta property="og:title" content={`${postMeta.title} | Bennett Legal`} />
        <meta property="og:description" content={postMeta.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={`https://solarpanelfraud.org/blog-images/${postMeta.slug}-og.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={postMeta.date} />
        <meta property="article:author" content={postMeta.author} />
        <meta property="article:section" content={postMeta.category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postMeta.title} />
        <meta name="twitter:description" content={postMeta.excerpt} />
        <meta name="twitter:image" content={`https://solarpanelfraud.org/blog-images/${postMeta.slug}-twitter.jpg`} />
        
        <link rel="canonical" href={articleUrl} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <Badge variant="secondary">{postMeta.category}</Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(postMeta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{postMeta.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-6">
                {postMeta.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                {postMeta.excerpt}
              </p>

              {/* Author Byline */}
              <div className="flex items-start gap-4 py-6 border-y border-border bg-muted/30 rounded-lg px-6">
                <Avatar className="h-12 w-12 flex-shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary border border-primary/20">
                    <User className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                    <h3 className="font-semibold text-foreground text-base">{postMeta.author}</h3>
                    <span className="hidden sm:inline text-sm text-muted-foreground">•</span>
                    <Link to="/about" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                      View Profile
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {AUTHOR_INFO.bio}
                  </p>
                </div>
              </div>
            </header>

            {/* Article Content with Strategic CTAs */}
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground prose-blockquote:border-l-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              <ArticleContentWithCTAs content={content} />
            </div>
          </article>

          {/* Enhanced CTA Section */}
          <CTASection />

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/understanding-solar-panel-fraud-red-flags" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Fraud Prevention</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Understanding Solar Panel Fraud: Red Flags to Watch For
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Learn to identify the warning signs of solar panel scams and protect yourself from fraudulent solar companies.
                  </p>
                </div>
              </Link>
              <Link to="/blog/legal-rights-solar-companies" className="block group">
                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <Badge variant="outline" className="mb-3">Legal Guidance</Badge>
                  <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    Your Legal Rights When Dealing with Solar Companies
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Know your consumer rights and legal protections when purchasing solar panels in Texas.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Component to inject CTAs strategically within article content
const ArticleContentWithCTAs = ({ content }: { content: string }) => {
  const sections = content.split(/\n## /); // Split by main headings

  // Function to process content and replace audio-story tags
  const processContent = (text: string) => {
    const audioStoryRegex = /<audio-story\s+audioUrl="([^"]+)"\s+title="([^"]+)"\s+description="([^"]+)"\s*\/>/g;
    
    const parts = text.split(audioStoryRegex);
    const elements = [];
    
    for (let i = 0; i < parts.length; i += 4) {
      // Add text content
      if (parts[i]) {
        elements.push(
          <ReactMarkdown key={`text-${i}`} remarkPlugins={[remarkGfm]}>
            {parts[i]}
          </ReactMarkdown>
        );
      }
      
      // Add audio story component if we have the required parts
      if (parts[i + 1] && parts[i + 2] && parts[i + 3]) {
        elements.push(
          <div key={`audio-${i}`} className="not-prose my-8">
            <AudioStory 
              audioUrl={parts[i + 1]}
              title={parts[i + 2]}
              description={parts[i + 3]}
            />
          </div>
        );
      }
    }
    
    return elements;
  };

  return (
    <>
      {processContent(sections[0])}

      {sections.slice(1).map((section, index) => {
        const shouldShowCTA = index === Math.floor((sections.length - 1) * 0.3) ||
                             index === Math.floor((sections.length - 1) * 0.7);

        return (
          <div key={index}>
            {processContent('## ' + section)}

            {shouldShowCTA && (
              <div className="not-prose">
                <CTASection
                  variant="compact"
                  title="Been Scammed by Solar Companies?"
                  description="Our attorneys specialize in solar fraud cases and can help you recover your losses. Get personalized legal advice for your situation."
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default BlogPost;