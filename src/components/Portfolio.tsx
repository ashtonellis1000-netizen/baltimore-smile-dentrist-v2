import { DOCTORS } from "@/config/practice";

const Portfolio = () => {
  return (
    <section id="doctors" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-minimal text-primary mb-4">OUR DOCTORS</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural">
              Meet the Team
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.map((doc, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-5">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-medium text-architectural mb-1">{doc.name}</h4>
                <p className="text-minimal text-primary mb-3">{doc.title}</p>
                {doc.award && (
                  <p className="text-xs text-primary/80 font-medium mb-2 italic">★ {doc.award}</p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">{doc.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
