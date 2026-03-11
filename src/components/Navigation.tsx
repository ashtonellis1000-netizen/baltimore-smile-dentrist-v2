import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { CONTACT } from "@/config/practice";

const MapPin = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
    <line x1="18" y1="6"  x2="6"  y2="18" />
    <line x1="6"  y1="6"  x2="18" y2="18" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const ChevronRight = () => (
  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/doctors",  label: "Doctors" },
    { href: "/about",    label: "About" },
    { href: "/blog",     label: "Blog" },
    { href: "/contact",  label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="w-full px-4 sm:px-6 py-2 flex items-center justify-between gap-2">

          {/* Left: logo + name */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Baltimore Uptown Dental" className="h-12 sm:h-11 w-auto" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[10px] tracking-[0.16em] uppercase font-bold text-primary">Baltimore Uptown</span>
              <span className="text-[10px] tracking-[0.16em] uppercase font-bold text-foreground/70">Dental</span>
            </div>
          </Link>

          {/* Center: nav links — desktop only */}
          <div className="hidden md:flex items-center space-x-7 flex-1 justify-center">
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] tracking-[0.12em] uppercase font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: pin + Call Now + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://www.google.com/maps/place/Baltimore+Uptown+Dentist/@39.339074,-76.6228229,16.74z/data=!4m6!3m5!1s0x89c805227b104507:0x8b8b56d4cf5dc9aa!8m2!3d39.3367691!4d-76.6187057!16s%2Fg%2F1tdk1kfv?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Google Maps"
              className="text-muted-foreground hover:text-primary transition-colors p-1"
            >
              <MapPin />
            </a>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold tracking-wide uppercase hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              <PhoneIcon />
              <span>Call Now</span>
            </a>
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border text-foreground hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-4 pt-3 pb-1 space-y-0.5">
              {links.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center justify-between px-3 py-3.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="tracking-wide">{link.label}</span>
                  <ChevronRight />
                </Link>
              ))}
            </div>
            {/* Call strip */}
            <div className="px-4 py-4 border-t border-border bg-muted/30 mt-1">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneIcon />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Tap-outside backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/20"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
