const Services = () => {
  const services = [
    { number: "01", title: "CEREC SAME-DAY CROWNS", description: "Advanced CAD/CAM technology for beautiful, precise crowns made and placed in a single visit" },
    { number: "02", title: "DENTAL IMPLANTS", description: "Computer-guided implant surgery with 3D ConeBeam CAT scans for permanent tooth replacement" },
    { number: "03", title: "COSMETIC DENTISTRY", description: "Veneers, whitening, bonding, and cosmetic contouring to transform your smile" },
    { number: "04", title: "CLEAR ALIGNERS", description: "Invisalign and SureSmile clear aligner therapy for discreet orthodontic treatment" },
    { number: "05", title: "PROSTHODONTICS", description: "Complex restorative dentistry including crowns, bridges, dentures, and full-mouth rehabilitation" },
    { number: "06", title: "SLEEP APNEA TREATMENT", description: "Custom FDA-approved oral appliances for snoring and obstructive sleep apnea — an alternative to CPAP" },
  ];

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
            {services.map((service, index) => (
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
