import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h1 className="text-minimal text-primary mb-4">ABOUT</h1>
                <h2 className="text-4xl md:text-5xl font-light text-architectural mb-10">
                  Our Mission
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Chesapeake Dental Group is committed to providing the highest quality oral 
                    health care. We've created an environment where everyone is treated with 
                    dignity and nurtured, using the latest technology in a gentle, caring, 
                    and friendly manner.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Located in the Cambridge Apartments in Roland Park, across the street 
                    from Johns Hopkins Homewood Campus near University Avenue, our office 
                    provides convenient access to free parking.
                  </p>
                </div>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-minimal text-primary mb-6">OUR TEAM</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-6">
                      <h4 className="text-base font-medium mb-1">4 Experienced Doctors</h4>
                      <p className="text-muted-foreground text-sm">Led by Dr. M. Alex Barton, D.M.D.</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h4 className="text-base font-medium mb-1">Dedicated Hygienists</h4>
                      <p className="text-muted-foreground text-sm">Decades of combined experience in dental care</p>
                    </div>
                    <div className="border-l-2 border-primary pl-6">
                      <h4 className="text-base font-medium mb-1">Skilled Support Staff</h4>
                      <p className="text-muted-foreground text-sm">Friendly administrative team and dental assistants</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-minimal text-primary mb-6">AFFILIATIONS</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    {["ADA", "Maryland State Dental Assoc.", "AADSM", "ICOI", "ACP", "AGD"].map(a => (
                      <span key={a} className="px-3 py-1 rounded-full border border-border">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
