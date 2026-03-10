import { Link } from "react-router-dom";
import { PRACTICE, CONTACT, SOCIAL } from "@/config/practice";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <h4 className="text-minimal mb-4 text-background/70">{PRACTICE.name.toUpperCase()}</h4>
              <p className="text-sm text-background/60">
                {CONTACT.address}<br />{CONTACT.city}
              </p>
              <a href={CONTACT.phoneHref} className="block mt-2 text-sm text-background/80 hover:text-background transition-colors">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block mt-1 text-sm text-background/60 hover:text-background transition-colors">
                {CONTACT.email}
              </a>
            </div>
            <div>
              <h4 className="text-minimal mb-4 text-background/70">QUICK LINKS</h4>
              <div className="space-y-2 text-sm">
                <Link to="/services" className="block text-background/60 hover:text-background transition-colors">Services</Link>
                <Link to="/doctors"  className="block text-background/60 hover:text-background transition-colors">Doctors</Link>
                <Link to="/about"    className="block text-background/60 hover:text-background transition-colors">About</Link>
                <Link to="/contact"  className="block text-background/60 hover:text-background transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-minimal mb-4 text-background/70">CONNECT</h4>
              <div className="space-y-2 text-sm">
                {SOCIAL.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block text-background/60 hover:text-background transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-background/10 text-center text-xs text-background/40">
            © {new Date().getFullYear()} {PRACTICE.name}, LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
