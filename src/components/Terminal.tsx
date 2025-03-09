
import { ReactNode, useEffect, useState } from "react";

interface TerminalProps {
  children: ReactNode;
}

const Terminal = ({ children }: TerminalProps) => {
  const [bootSequenceComplete, setBootSequenceComplete] = useState(false);
  const [bootMessages, setBootMessages] = useState<string[]>([]);

  useEffect(() => {
    const bootSequence = [
      "SYSTEM BOOT SEQUENCE INITIATED...",
      "INITIALIZING KERNEL...",
      "LOADING SYSTEM MODULES...",
      "ESTABLISHING SECURE CONNECTION...",
      "CHECKING FIREWALL STATUS... ACTIVE",
      "PROXY SERVERS ENGAGED...",
      "TERMINAL OS v3.14.15 READY",
      "ACCESSING ENCRYPTED BLOG DATABASE...",
      "ACCESS GRANTED"
    ];

    let index = 0;
    const bootTimer = setInterval(() => {
      if (index < bootSequence.length) {
        setBootMessages(prev => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(bootTimer);
        setTimeout(() => setBootSequenceComplete(true), 500);
      }
    }, 300);

    return () => clearInterval(bootTimer);
  }, []);

  return (
    <div className="terminal-screen">
      <div className="scan-line"></div>
      <div className="terminal-container min-h-[80vh]">
        <div className="terminal-header">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-terminal-green/70">Terminal.Blog - Secure Shell</div>
        </div>

        {!bootSequenceComplete ? (
          <div className="text-terminal-green space-y-2 font-code text-sm">
            {bootMessages.map((msg, index) => (
              <div key={index} className="leading-tight">
                {msg}
              </div>
            ))}
            <div className="terminal-cursor"></div>
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

export default Terminal;
