import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DOCTORS } from "@/config/practice";

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-architectural mb-6">OUR DOCTORS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our experienced team of dental professionals combines decades of expertise
              with the latest technology to provide exceptional care.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-20">
            {DOCTORS.map((doc, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="overflow-hidden rounded-xl">
                    <img src={doc.image} alt={doc.name} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="text-minimal text-primary mb-2">{doc.title}</p>
                  {doc.award && (
                    <p className="text-xs text-primary/80 font-medium mb-3 italic">★ {doc.award}</p>
                  )}
                  <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">{doc.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">{doc.fullBio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
