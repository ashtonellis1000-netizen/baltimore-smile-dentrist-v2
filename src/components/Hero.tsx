import heroImage from "@/assets/hero-dental.jpg";
import { PRACTICE, CONTACT } from "@/config/practice";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white text-architectural mb-6 reveal">
          {PRACTICE.tagline}
        </h1>
        <p className="text-lg md:text-xl text-white/85 font-light tracking-wide max-w-2xl mx-auto mb-10 reveal-delayed">
          {PRACTICE.subTagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-delayed">
          <a href={CONTACT.phoneHref} className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Call {CONTACT.phone}
          </a>
          <a href="/services" className="px-8 py-4 border border-white/40 text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
