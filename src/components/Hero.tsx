import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dental.jpg";
import { PRACTICE, CONTACT } from "@/config/practice";

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="text-[11px] tracking-[0.22em] uppercase text-white/55 font-sans font-medium mb-7 reveal">
          {PRACTICE.established}
        </p>

        {/* Headline — fluid single line via clamp */}
        <h1 className="font-serif font-normal whitespace-nowrap text-[clamp(1.8rem,5.5vw,4.5rem)] leading-none tracking-tight text-white mb-5 reveal">
          {PRACTICE.tagline}
        </h1>

        {/* Thin rule */}
        <div className="w-10 h-px bg-white/35 mx-auto mb-5 reveal-delayed" />

        {/* Subtext */}
        <p className="text-base md:text-lg text-white/70 font-sans font-light tracking-wide mx-auto mb-4 reveal-delayed">
          {PRACTICE.subTagline}
        </p>

        {/* Google rating */}
        <div className="flex items-center justify-center gap-2 mb-9 reveal-delayed">
          <GoogleIcon />
          <div className="flex items-center gap-0.5">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <span className="text-white/80 text-xs font-sans font-medium">4.9</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center reveal-delayed">
          <a
            href={CONTACT.phoneHref}
            className="px-7 py-3.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Call {CONTACT.phone}
          </a>
          <Link
            to="/services"
            className="px-7 py-3.5 border border-white/30 text-white/90 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
          >
            Our Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
