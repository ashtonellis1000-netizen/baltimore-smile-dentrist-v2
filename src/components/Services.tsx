import { Link } from "react-router-dom";
import { HOME_SERVICES } from "@/config/practice";

const SERVICE_TAGS: Record<string, string[]> = {
  "CEREC SAME-DAY CROWNS":  ["Same-Day", "CEREC"],
  "DENTAL IMPLANTS":         ["3D Guided", "Permanent"],
  "COSMETIC DENTISTRY":      ["Veneers", "Whitening"],
  "CLEAR ALIGNERS":          ["Invisalign", "SureSmile"],
  "PROSTHODONTICS":          ["Full-Mouth Rehab"],
  "SLEEP APNEA TREATMENT":   ["No CPAP Required"],
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-minimal text-primary mb-4">OUR SERVICES</h2>
              <h3 className="text-4xl md:text-5xl font-light text-architectural">
                Comprehensive Dental Care
              </h3>
            </div>
            <Link
              to="/services"
              className="self-start sm:self-auto text-xs font-semibold tracking-widest uppercase text-primary border border-primary/40 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
            >
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOME_SERVICES.map((service, index) => {
              const tags = SERVICE_TAGS[service.title] ?? [];
              return (
                <Link
                  key={index}
                  to="/services"
                  className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[11px] tracking-widest uppercase font-bold text-primary/60 shrink-0 mt-0.5">{service.number}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-3">{service.description}</p>
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {tags.map(tag => (
                            <span key={tag} className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-semibold tracking-wide rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground group-hover:text-primary transition-colors tracking-wide font-medium">
                      Learn more
                    </span>
                    <svg className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
