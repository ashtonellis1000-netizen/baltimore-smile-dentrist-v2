import { HOME_SERVICES } from "@/config/practice";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-minimal text-primary mb-4">OUR SERVICES</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural">
              Comprehensive Dental Care
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {HOME_SERVICES.map((service, index) => (
              <div key={index} className="group p-6 rounded-xl border border-border hover:border-primary/30 hover:bg-accent/50 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <span className="text-minimal text-primary font-semibold">{service.number}</span>
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-architectural group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
