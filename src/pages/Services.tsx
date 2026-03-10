import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SERVICE_GROUPS, CONTACT } from "@/config/practice";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-architectural mb-6">OUR SERVICES</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              From routine care to advanced restorative and cosmetic treatments,
              we offer comprehensive dentistry using the latest technology.
            </p>
          </div>
        </div>
      </section>

      {SERVICE_GROUPS.map((group) => (
        <section key={group.category} className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-minimal text-primary mb-10">{group.category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {group.items.map((item, i) => (
                  <div key={i} className="p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-accent/50 transition-all duration-300">
                    <h3 className="text-lg font-medium mb-2 text-architectural">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Schedule?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Call us today or stop by our Roland Park office.
          </p>
          <a href={CONTACT.phoneHref} className="inline-block px-8 py-4 bg-background text-foreground rounded-lg hover:bg-background/90 transition-colors font-medium">
            Call {CONTACT.phone}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
