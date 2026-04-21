import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, MapPin, Facebook, Instagram, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPreview: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Latest Insights</h2>
          <Link to="/blog" className="text-brand-700 font-bold hover:text-brand-900 flex items-center group">
            View All Posts <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="flex space-x-6 overflow-x-auto pb-6 -mb-6 no-scrollbar snap-x">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col snap-start">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs text-brand-700 font-semibold mb-2">{post.date}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-sm font-bold text-brand-900 hover:text-brand-700">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
