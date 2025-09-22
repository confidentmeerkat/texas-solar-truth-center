import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { BlogPost, BlogCategory, BlogTag } from '@/types/blog';
import { blogCategories, blogTags } from '@/lib/blog';
import BlogCard from './BlogCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface BlogListProps {
  posts: BlogPost[];
  showFeatured?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, showFeatured = true }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on search and filters
  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPosts = showFeatured ? filteredPosts.filter(post => post.featured) : [];
  const regularPosts = filteredPosts.filter(post => !showFeatured || !post.featured);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedTag;

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="w-4 h-4 mr-2" />
                {selectedCategory 
                  ? blogCategories.find(cat => cat.slug === selectedCategory)?.name 
                  : 'All Categories'
                }
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                All Categories
              </DropdownMenuItem>
              {blogCategories.map(category => (
                <DropdownMenuItem 
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tag Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="w-4 h-4 mr-2" />
                {selectedTag 
                  ? blogTags.find(tag => tag.slug === selectedTag)?.name 
                  : 'All Tags'
                }
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedTag(null)}>
                All Tags
              </DropdownMenuItem>
              {blogTags.map(tag => (
                <DropdownMenuItem 
                  key={tag.id}
                  onClick={() => setSelectedTag(tag.slug)}
                >
                  {tag.name} ({tag.count})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button 
              variant="ghost" 
              onClick={clearFilters}
              className="w-full md:w-auto"
            >
              <X className="w-4 h-4 mr-2" />
              Clear
            </Button>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-4">
            {searchTerm && (
              <Badge variant="secondary">
                Search: "{searchTerm}"
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => setSearchTerm('')}
                />
              </Badge>
            )}
            {selectedCategory && (
              <Badge variant="secondary">
                Category: {blogCategories.find(cat => cat.slug === selectedCategory)?.name}
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => setSelectedCategory(null)}
                />
              </Badge>
            )}
            {selectedTag && (
              <Badge variant="secondary">
                Tag: {blogTags.find(tag => tag.slug === selectedTag)?.name}
                <X 
                  className="w-3 h-3 ml-1 cursor-pointer" 
                  onClick={() => setSelectedTag(null)}
                />
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-bennett-navy mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div>
          {featuredPosts.length > 0 && (
            <h2 className="text-2xl font-bold text-bennett-navy mb-6">Latest Articles</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-bennett-navy mb-2">No articles found</h3>
          <p className="text-bennett-slate mb-4">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          {hasActiveFilters && (
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogList;