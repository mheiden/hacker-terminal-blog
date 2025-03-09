
import { useState } from "react";
import TypewriterText from "./TypewriterText";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  author: string;
  onBack: () => void;
}

const BlogPost = ({ title, date, content, author, onBack }: BlogPostProps) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="text-terminal-green font-code animate-fade-in">
      <div className="flex items-center mb-4">
        <button 
          onClick={onBack} 
          className="flex items-center hover:text-terminal-bright-green transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>back</span>
        </button>
      </div>

      <div className="border border-terminal-green/30 p-4 rounded mb-6">
        <div className="text-xl font-bold mb-1 text-terminal-bright-green glitch">{title}</div>
        <div className="text-sm text-terminal-green/70 mb-4">
          <span className="mr-4">Date: {date}</span>
          <span>Author: {author}</span>
        </div>
        
        {showFullContent ? (
          <div className="whitespace-pre-line">
            {content}
          </div>
        ) : (
          <>
            <TypewriterText 
              text={content.slice(0, 200) + "..."}
              delay={10}
            />
            <button 
              className="mt-4 text-terminal-bright-green hover:underline"
              onClick={() => setShowFullContent(true)}
            >
              [Display Full Content]
            </button>
          </>
        )}
      </div>

      <div className="font-terminal text-sm border-t border-terminal-green/30 pt-4 text-terminal-green/70">
        <div>Session ID: {Math.random().toString(36).substring(2, 15)}</div>
        <div>Encryption: AES-256-GCM</div>
        <div>Connection: Secure</div>
      </div>
    </div>
  );
};

export default BlogPost;
