import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageTemplate from '@/components/layout/PageTemplate';
import BlogPost from '@/components/blog/BlogPost';
import { loadBlogPost } from '@/utils/blogUtils';

interface BlogPostData {
  content: string;
  metadata: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    author: string;
    featured?: boolean;
  };
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    const loadPost = async () => {
      try {
        const blogPost = await loadBlogPost(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
        setNotFound(true);
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

  if (notFound || !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.metadata.title} | Bennett Legal Blog</title>
        <meta name="description" content={post.metadata.excerpt} />
        <link rel="canonical" href={`${window.location.origin}/blog/${post.metadata.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.metadata.title} />
        <meta property="og:description" content={post.metadata.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${window.location.origin}/blog/${post.metadata.slug}`} />
        <meta property="article:published_time" content={post.metadata.date} />
        <meta property="article:author" content={post.metadata.author} />
        <meta property="article:section" content={post.metadata.category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metadata.title} />
        <meta name="twitter:description" content={post.metadata.excerpt} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.metadata.title,
            "description": post.metadata.excerpt,
            "datePublished": post.metadata.date,
            "dateModified": post.metadata.date,
            "author": {
              "@type": "Person",
              "name": post.metadata.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bennett Legal",
              "url": window.location.origin
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${window.location.origin}/blog/${post.metadata.slug}`
            },
            "articleSection": post.metadata.category,
            "wordCount": post.content.split(' ').length
          })}
        </script>
      </Helmet>
      
      <PageTemplate
        showReadingProgress={true}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.metadata.title, href: `/blog/${post.metadata.slug}` }
        ]}
        className="py-12"
      >
        <BlogPost post={post} />
      </PageTemplate>
    </>
  );
};

export default BlogPostPage;