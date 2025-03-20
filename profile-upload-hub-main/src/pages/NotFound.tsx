
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md w-full glass-panel rounded-2xl p-8 animate-fade-in">
        <h1 className="text-5xl font-bold mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page does not exist
        </p>
        <a 
          href="/" 
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all"
        >
          <ArrowLeft size={16} />
          <span>Go Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
