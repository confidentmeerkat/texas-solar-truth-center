import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '@/types/blog';
import { formatDate, getRelatedPosts, blogCategories } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import BlogCard from './BlogCard';
import AuthorInfo from './AuthorInfo';
import ShareButtons from './ShareButtons';
import TableOfContents from './TableOfContents';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const category = blogCategories.find(cat => cat.slug === post.category);
  const relatedPosts = getRelatedPosts(post);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Link to="/blog">
          <Button variant="ghost" className="hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          {category && (
            <Badge className={category.color}>
              {category.name}
            </Badge>
          )}
          <div className="flex items-center text-sm text-bennett-slate">
            <Clock className="w-4 h-4 mr-1" />
            {post.readingTime} min read
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-bennett-navy leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-xl text-bennett-slate leading-relaxed mb-8">
          {post.excerpt}
        </p>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-6 text-sm text-bennett-slate">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author.name}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(post.publishedAt)}
            </div>
            {post.updatedAt && (
              <div className="text-xs">
                Updated: {formatDate(post.updatedAt)}
              </div>
            )}
          </div>
          
          <ShareButtons post={post} />
        </div>
      </header>

      {/* Article Content and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-3">
          <div className="prose prose-lg max-w-none prose-headings:text-bennett-navy prose-a:text-bennett-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-bennett-navy prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-bennett-navy mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link key={tag} to={`/blog?tag=${tag}`}>
                    <Badge 
                      variant="outline" 
                      className="hover:bg-bennett-gold hover:text-white hover:border-bennett-gold transition-colors cursor-pointer"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag.replace('-', ' ')}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="mt-12">
            <AuthorInfo author={post.author} />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            {/* Table of Contents */}
            <TableOfContents content={post.content} />

            {/* CTA Card */}
            <EnhancedCard variant="glass" className="bg-blue-50/80 border-blue-200 p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-bennett-navy">
                  Been Scammed?
                </h3>
                <p className="text-sm text-bennett-slate">
                  Don't let solar fraudsters get away with your hard-earned money. 
                  Get a free consultation today.
                </p>
                <Button 
                  className="w-full bg-bennett-navy hover:bg-bennett-navy/90"
                  asChild
                >
                  <Link to="/services">
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </EnhancedCard>

            {/* Share Card */}
            <EnhancedCard variant="glass" className="p-6">
              <h3 className="text-lg font-semibold text-bennett-navy mb-4">Share This Article</h3>
              <ShareButtons post={post} vertical />
            </EnhancedCard>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-bennett-navy mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;