import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTemplate from '@/components/layout/PageTemplate';
import BlogList from '@/components/blog/BlogList';
import { getAllPosts } from '@/lib/blog';
import SectionHeader from '@/components/ui/section-header';

const Blog: React.FC = () => {
  const posts = getAllPosts();

  return (
    <>
      <Helmet>
        <title>Solar Fraud Legal Blog | Expert Insights & Consumer Protection</title>
        <meta 
          name="description" 
          content="Expert legal insights on solar panel fraud, consumer protection, and your rights. Stay informed with our comprehensive blog covering solar scams and legal solutions." 
        />
        <meta name="keywords" content="solar fraud, legal blog, consumer protection, solar scams, Texas solar law, solar panel fraud attorney" />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Solar Fraud Legal Blog | Expert Insights & Consumer Protection" />
        <meta property="og:description" content="Expert legal insights on solar panel fraud, consumer protection, and your rights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/blog`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Fraud Legal Blog | Expert Insights & Consumer Protection" />
        <meta name="twitter:description" content="Expert legal insights on solar panel fraud, consumer protection, and your rights." />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Solar Fraud Legal Blog",
            "description": "Expert legal insights on solar panel fraud, consumer protection, and your rights",
            "url": `${window.location.origin}/blog`,
            "author": {
              "@type": "Organization",
              "name": "Bennett Legal",
              "url": window.location.origin
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bennett Legal",
              "url": window.location.origin
            }
          })}
        </script>
      </Helmet>
      
      <PageTemplate
        pageTitle="Legal Blog"
        pageSubtitle="Expert Insights"
        pageDescription="Stay informed with expert legal insights on solar fraud, consumer protection, and your rights. Our comprehensive blog covers the latest in solar scams and legal solutions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' }
        ]}
        className="py-12"
      >
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <SectionHeader
              title="Stay Informed, Stay Protected"
              description="Our blog provides the latest insights on solar fraud, consumer rights, and legal protection strategies. Knowledge is your best defense against scams."
              size="md"
              accent="gold"
            />
          </div>

          {/* Blog List */}
          <BlogList posts={posts} />
        </div>
      </PageTemplate>
    </>
  );
};

export default Blog;