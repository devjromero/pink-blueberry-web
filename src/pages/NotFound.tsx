import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center animate-fade-in-up">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-pink to-primary-blue flex items-center justify-center mx-auto mb-8">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 price-display">404</h1>
        <h2 className="text-2xl font-semibold text-card-foreground mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to our beautiful salon.
        </p>
        
        <a 
          href="/" 
          className="btn-hero flex items-center space-x-2 mx-auto w-fit"
        >
          <Home className="w-5 h-5" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
