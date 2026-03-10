import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/services", label: "SERVICES" },
    { href: "/doctors", label: "DOCTORS" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Baltimore Uptown Dentist" className="h-10 w-auto" />
          <span className="text-minimal text-foreground hidden sm:inline">BALTIMORE UPTOWN DENTIST</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {links.map(link => (
            <Link key={link.href} to={link.href} className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+14102351233" className="text-minimal text-primary font-semibold hover:text-primary/80 transition-colors">
            (410) 235-1233
          </a>
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {links.map(link => (
              <Link key={link.href} to={link.href} className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href="tel:+14102351233" className="block text-minimal text-primary font-semibold">
              (410) 235-1233
            </a>
            <div className="pt-4 border-t border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
