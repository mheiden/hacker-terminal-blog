
import { ReactNode } from "react";

interface TerminalLayoutProps {
  children: ReactNode;
}

const TerminalLayout = ({ children }: TerminalLayoutProps) => {
  return (
    <div className="min-h-screen bg-terminal-dark text-terminal-green">
      {children}
    </div>
  );
};

export default TerminalLayout;
