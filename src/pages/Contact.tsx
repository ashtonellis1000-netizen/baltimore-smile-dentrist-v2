import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h1 className="text-minimal text-primary mb-4">GET IN TOUCH</h1>
                <h2 className="text-4xl md:text-5xl font-light text-architectural mb-10">
                  Schedule Your
                  <br />
                  Appointment
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">PHONE</h3>
                    <a href="tel:+14102351233" className="text-xl text-primary font-medium hover:text-primary/80 transition-colors">
                      (410) 235-1233
                    </a>
                  </div>
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">ADDRESS</h3>
                    <address className="text-lg not-italic">
                      3900 N. Charles St., Suite 112<br />Baltimore, MD 21218
                    </address>
                    <p className="text-sm text-muted-foreground mt-1">Cambridge Apartments in Roland Park — free parking available</p>
                  </div>
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">HOURS</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between max-w-xs"><span>Monday</span><span>9:00 AM – 6:00 PM</span></div>
                      <div className="flex justify-between max-w-xs"><span>Tuesday</span><span>9:00 AM – 5:00 PM</span></div>
                      <div className="flex justify-between max-w-xs"><span>Wednesday</span><span>9:00 AM – 3:00 PM</span></div>
                      <div className="flex justify-between max-w-xs"><span>Thursday</span><span>9:00 AM – 6:00 PM</span></div>
                      <div className="flex justify-between max-w-xs"><span>Friday</span><span>9:00 AM – 3:00 PM</span></div>
                      <div className="flex justify-between max-w-xs text-muted-foreground"><span>Sat – Sun</span><span>Closed</span></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-4">FINANCING</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We accept most traditional insurance plans and will file claims for reimbursement. 
                    Financing available through CareCredit, Citi-Health Card, Prosper, and Cherry.
                  </p>
                </div>
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-4">FOLLOW US</h3>
                  <div className="space-y-3">
                    <a href="https://facebook.com/BaltimoreUptownDentist1/" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">Facebook</a>
                    <a href="https://youtube.com/user/baltimoredentist" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">YouTube</a>
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

export default Contact;
