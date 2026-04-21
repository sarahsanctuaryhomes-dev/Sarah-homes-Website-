import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
              <Link to={`/blog/${post.id}`}>
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              </Link>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-sm text-brand-700 font-semibold mb-2">{post.date}</span>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-brand-700 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 text-sm mb-6 flex-1">{post.excerpt}</p>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center space-x-2">
                    <img src={post.author.avatar} alt={post.author.name} className="h-8 w-8 rounded-full" />
                    <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
                  </div>
                  <div className="flex space-x-3">
                    {post.author.social.linkedin && <a href={post.author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-700" title="Google Business (Maps)"><MapPin className="h-5 w-5" /></a>}
                    {post.author.social.facebook && <a href={post.author.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-700" title="Facebook"><Facebook className="h-5 w-5" /></a>}
                    {post.author.social.twitter && <a href={post.author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-700" title="Instagram"><Instagram className="h-5 w-5" /></a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
