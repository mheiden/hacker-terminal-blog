
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 50, className = "" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Make cursor blink when typing is complete
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [text, delay, currentIndex]);

  return (
    <div className={`inline-block ${className}`}>
      {displayedText}
      {showCursor && <span className="terminal-cursor"></span>}
    </div>
  );
};

export default TypewriterText;
