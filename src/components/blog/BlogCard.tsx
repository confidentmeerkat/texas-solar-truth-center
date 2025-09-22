import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { blogCategories } from '@/lib/blog';
import { formatDate } from '@/lib/blog';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false, className }) => {
  const category = blogCategories.find(cat => cat.slug === post.category);

  return (
    <EnhancedCard 
      variant="glass" 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-white/80 backdrop-blur-sm",
        featured ? "md:col-span-2 lg:col-span-3" : "",
        className
      )}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className="p-6 h-full flex flex-col">
          {/* Category and Reading Time */}
          <div className="flex items-center justify-between mb-4">
            {category && (
              <Badge 
                variant="secondary" 
                className={cn("text-xs", category.color)}
              >
                {category.name}
              </Badge>
            )}
            <div className="flex items-center text-sm text-bennett-slate">
              <Clock className="w-4 h-4 mr-1" />
              {post.readingTime} min read
            </div>
          </div>

          {/* Title */}
          <h3 className={cn(
            "font-bold text-bennett-navy group-hover:text-bennett-gold transition-colors leading-tight mb-3",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className={cn(
            "text-bennett-slate leading-relaxed mb-4 flex-grow",
            featured ? "text-lg" : "text-base"
          )}>
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-sm text-bennett-slate">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author.name}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.publishedAt)}
              </div>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.slice(0, 3).map(tag => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="text-xs bg-gray-50 hover:bg-gray-100"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag.replace('-', ' ')}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant="outline" className="text-xs bg-gray-50">
                  +{post.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </div>
      </Link>
    </EnhancedCard>
  );
};

export default BlogCard;