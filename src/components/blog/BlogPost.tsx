import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AuthorInfo from './AuthorInfo';
import ShareButtons from './ShareButtons';
import { getCalApi } from "@calcom/embed-react";

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

interface BlogPostProps {
  post: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const openCal = () => {
    getCalApi().then((cal) => {
      cal("ui", {
        "styles": { "branding": { "brandColor": "#D4A574" } },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
      cal("floatingButton", { "calLink": "cbennett/solar-fraud-consultation" });
    });
  };
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Link to="/blog">
          <Button variant="ghost" className="hover:bg-accent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="space-y-4">
          <Badge variant="secondary" className="mb-4">
            {post.metadata.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {post.metadata.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.metadata.readTime}</span>
            </div>
          </div>
          
          <AuthorInfo author={{ name: post.metadata.author }} />
        </div>
      </header>

      {/* Article Content and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-3">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                h2: ({ node, ...props }) => {
                  const content = props.children?.toString() || '';
                  // Make "Download Your Free Copy Now" section super prominent
                  if (content.includes('Download Your Free Copy Now')) {
                    return (
                      <div className="my-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" {...props}>
                          {props.children}
                        </h2>
                      </div>
                    );
                  }
                  return <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground" {...props}>{props.children}</h2>;
                },
                p: ({ node, ...props }) => {
                  const content = props.children?.toString() || '';
                  // Check if this paragraph contains the download link
                  if (content.includes('Download the Complete Guide (PDF)')) {
                    return (
                      <div className="my-8 p-6 bg-primary text-primary-foreground rounded-lg text-center shadow-lg">
                        <p className="text-xl font-semibold mb-0" {...props}>
                          {props.children}
                        </p>
                      </div>
                    );
                  }
                  return <p className="mb-4 text-muted-foreground leading-relaxed" {...props}>{props.children}</p>;
                },
                a: ({ node, ...props }) => {
                  const href = props.href || '';
                  const content = props.children?.toString() || '';
                  
                  // Style the PDF download link prominently
                  if (href.includes('.pdf')) {
                    return (
                      <a 
                        {...props} 
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-block bg-white text-primary font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 border-2 border-white/20"
                      >
                        📥 {props.children}
                      </a>
                    );
                  }
                  // Handle internal links
                  if (href.startsWith('/')) {
                    return (
                      <Link to={href} className="font-semibold text-primary hover:text-primary/80 underline">
                        {props.children}
                      </Link>
                    );
                  }
                  // Handle external links
                  return (
                    <a 
                      {...props} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-primary/80 underline"
                    >
                      {props.children}
                    </a>
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            {/* CTA Card */}
            <Card className="bg-blue-50/80 border-blue-200">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Been Scammed?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Don't let solar fraudsters get away with your hard-earned money. 
                    Get a free consultation today.
                  </p>
                  <Button className="w-full" onClick={openCal}>
                    Get Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Share Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Share This Article</h3>
                <ShareButtons 
                  url={`${window.location.origin}/blog/${post.metadata.slug}`}
                  title={post.metadata.title}
                />
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPost;