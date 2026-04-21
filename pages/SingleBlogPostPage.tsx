import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, MapPin, Facebook, Instagram } from 'lucide-react';
import Markdown from 'react-markdown';

const SingleBlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Post not found</h2>
        <button onClick={() => navigate('/blog')} className="text-brand-700 hover:text-brand-900 font-semibold flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blog
        </button>
      </div>
    );
  }

  // Generate BlogPosting JSON-LD for SEO/AEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [
      `https://sarahsanctuaryhomes.com${post.image}`
    ],
    "datePublished": post.date,
    "author": [{
        "@type": "Person",
        "name": post.author.name,
        "url": post.author.social.linkedin || post.author.social.facebook || post.author.social.twitter || "https://sarahsanctuaryhomes.com/about"
    }],
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* JSON-LD Schema for Blog Posting */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover relative z-0"
        />
        <div className="absolute z-20 inset-0 flex flex-col justify-end max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white">
           <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 font-semibold w-max transition-colors">
             <ArrowLeft className="mr-2 h-5 w-5" /> Back to all posts
           </Link>
           <span className="text-brand-400 font-bold mb-3 tracking-wide">{post.date}</span>
           <h1 className="text-3xl md:text-5xl font-extrabold leading-tight shadow-sm text-balance">
             {post.title}
           </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col md:flex-row md:items-start gap-12">
          {/* Post Content */}
          <div className="flex-1">
             <div className="prose prose-lg prose-brand max-w-none text-gray-800 markdown-body">
               <Markdown>{post.content}</Markdown>
             </div>
          </div>

          {/* Author Sidebar */}
          <div className="w-full md:w-72 flex-shrink-0">
             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-28">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">About the Author</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <img src={post.author.avatar} alt={post.author.name} className="h-14 w-14 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-gray-900">{post.author.name}</h4>
                    <p className="text-sm text-brand-700">Author</p>
                  </div>
                </div>
                <div className="flex space-x-4 border-t border-gray-200 mt-4 pt-4">
                    {post.author.social.linkedin && <a href={post.author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-700 transition" title="Google Business (Maps)"><MapPin className="h-5 w-5" /></a>}
                    {post.author.social.facebook && <a href={post.author.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-700 transition" title="Facebook"><Facebook className="h-5 w-5" /></a>}
                    {post.author.social.twitter && <a href={post.author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-700 transition" title="Instagram"><Instagram className="h-5 w-5" /></a>}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPostPage;
