
import { useState } from "react";
import { FileCode, FolderOpen, Calendar, User, Search } from "lucide-react";
import TypewriterText from "./TypewriterText";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
}

interface BlogListProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

const BlogList = ({ posts, onSelectPost }: BlogListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-terminal-green font-code">
      <div className="mb-6">
        <TypewriterText 
          text="Welcome to Terminal.Blog - Where Code Meets Consciousness"
          className="text-xl font-bold text-terminal-bright-green"
        />
        <p className="mt-2 text-terminal-green/80">
          A secure terminal for hackers, by hackers.
        </p>
      </div>

      <div className="relative mb-6">
        <div className="flex">
          <div className="terminal-prompt"></div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="grep -i 'search term' ./blog_posts"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsSearching(true);
                setTimeout(() => setIsSearching(false), 500);
              }}
              className="w-full bg-transparent border-b border-terminal-green/30 focus:border-terminal-bright-green outline-none text-terminal-green px-2 py-1"
            />
            <Search className="absolute right-2 top-1 w-4 h-4 text-terminal-green/50" />
          </div>
        </div>
        {isSearching && (
          <div className="text-xs text-terminal-green/70 mt-1 animate-pulse">
            Searching through encrypted database...
          </div>
        )}
      </div>

      <div className="text-terminal-bright-green mb-2">
        <div className="terminal-prompt">ls -la ./blog_posts</div>
      </div>

      <div className="border border-terminal-green/30 rounded p-4 mb-6">
        <div className="flex justify-between text-xs text-terminal-green/70 mb-3 font-bold">
          <span>FILENAME</span>
          <div className="flex space-x-6">
            <span>DATE</span>
            <span>AUTHOR</span>
          </div>
        </div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-terminal-gray italic">No posts found. Try another search term.</div>
        ) : (
          filteredPosts.map(post => (
            <div 
              key={post.id}
              className="directory-item cursor-pointer" 
              onClick={() => onSelectPost(post)}
            >
              <div className="flex justify-between items-center py-1">
                <div className="flex items-center">
                  <FileCode size={14} className="mr-2 text-terminal-green/70" />
                  <span className="hover:underline">{post.title}.md</span>
                </div>
                <div className="flex space-x-6 text-xs text-terminal-green/70">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={12} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="text-xs text-terminal-green/70">
        <div>Total files: {filteredPosts.length}</div>
        <div>Secure connection established from: {navigator.userAgent}</div>
      </div>
    </div>
  );
};

export default BlogList;
