import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-minimal text-primary mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-light text-architectural mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
