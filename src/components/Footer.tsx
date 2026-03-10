import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="text-minimal mb-4 text-background/70">CHESAPEAKE DENTAL GROUP</h4>
              <p className="text-sm text-background/60">
                3900 N. Charles St., Suite 112<br />
                Baltimore, MD 21218
              </p>
              <a href="tel:+14102351233" className="block mt-2 text-sm text-background/80 hover:text-background transition-colors">
                (410) 235-1233
              </a>
            </div>
            <div>
              <h4 className="text-minimal mb-4 text-background/70">QUICK LINKS</h4>
              <div className="space-y-2 text-sm">
                <Link to="/services" className="block text-background/60 hover:text-background transition-colors">Services</Link>
                <Link to="/doctors" className="block text-background/60 hover:text-background transition-colors">Doctors</Link>
                <Link to="/about" className="block text-background/60 hover:text-background transition-colors">About</Link>
                <Link to="/contact" className="block text-background/60 hover:text-background transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-minimal mb-4 text-background/70">CONNECT</h4>
              <div className="space-y-2 text-sm">
                <a href="https://facebook.com/BaltimoreUptownDentist1/" target="_blank" rel="noopener noreferrer" className="block text-background/60 hover:text-background transition-colors">Facebook</a>
                <a href="https://youtube.com/user/baltimoredentist" target="_blank" rel="noopener noreferrer" className="block text-background/60 hover:text-background transition-colors">YouTube</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-background/10 text-center text-xs text-background/40">
            © {new Date().getFullYear()} Chesapeake Dental Group, LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
