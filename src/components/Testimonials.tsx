import { TESTIMONIALS } from "@/config/practice";
import heroImage from "@/assets/hero-dental.jpg";

const Testimonials = () => {
  return (
    <section
      className="relative py-28 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-[hsl(205,78%,12%)] opacity-88" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[11px] tracking-[0.22em] uppercase text-white/50 font-medium mb-3">PATIENT STORIES</p>
            <h3 className="text-4xl md:text-5xl font-light text-white">
              What Our Patients Say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <svg className="w-6 h-6 text-primary mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-white/85 text-base leading-relaxed italic mb-6">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-primary" />
                  <span className="text-[11px] tracking-[0.14em] uppercase font-medium text-white/55">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
