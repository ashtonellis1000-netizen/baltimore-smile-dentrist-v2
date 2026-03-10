import { TESTIMONIALS } from "@/config/practice";

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-minimal text-primary mb-4">PATIENT STORIES</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural">
              What Our Patients Say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-background rounded-xl p-8 flex flex-col justify-between">
                <p className="text-muted-foreground text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-0.5 bg-primary" />
                  <span className="text-minimal text-primary">{t.name}</span>
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
