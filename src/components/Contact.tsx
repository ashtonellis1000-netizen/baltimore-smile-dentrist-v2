const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-minimal text-primary mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-5xl font-light text-architectural mb-10">
                Schedule Your
                <br />
                Appointment
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                  <a href="tel:+14102351233" className="text-xl text-primary font-medium hover:text-primary/80 transition-colors duration-300">
                    (410) 235-1233
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">ADDRESS</h4>
                  <address className="text-lg not-italic">
                    3900 N. Charles St., Suite 112
                    <br />
                    Baltimore, MD 21218
                  </address>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cambridge Apartments in Roland Park — free parking available
                  </p>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">HOURS</h4>
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
                <h4 className="text-minimal text-muted-foreground mb-4">FINANCING OPTIONS</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  We accept most traditional insurance plans and will file claims for reimbursement. 
                  We also offer flexible financing through CareCredit, Citi-Health Card, Prosper, 
                  and Cherry payment plans.
                </p>
                <p className="text-muted-foreground text-sm">
                  Accepted payments: Checks, cash, and bank cards.
                </p>
              </div>
              
              <div>
                <h4 className="text-minimal text-muted-foreground mb-4">FOLLOW US</h4>
                <div className="space-y-3">
                  <a href="https://facebook.com/BaltimoreUptownDentist1/" target="_blank" rel="noopener noreferrer" className="block text-base hover:text-primary transition-colors duration-300">
                    Facebook
                  </a>
                  <a href="https://youtube.com/user/baltimoredentist" target="_blank" rel="noopener noreferrer" className="block text-base hover:text-primary transition-colors duration-300">
                    YouTube
                  </a>
                  <a href="https://www.google.com/search?q=Baltimore+Uptown+Dentist+reviews" target="_blank" rel="noopener noreferrer" className="block text-base hover:text-primary transition-colors duration-300">
                    Google Reviews
                  </a>
                </div>
              </div>
              
              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm italic">
                  "Committed to providing the highest quality oral health care in an environment 
                  where everyone is treated with dignity and nurtured."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
