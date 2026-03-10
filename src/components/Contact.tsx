import { useState } from "react";
import { CONTACT, HOURS, SOCIAL, FINANCING } from "@/config/practice";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name    = data.get("name");
    const email   = data.get("email");
    const phone   = data.get("phone");
    const message = data.get("message");
    const subject = `Appointment Request from ${name}`;
    const body    = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage: ${message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(String(subject))}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Left: contact info */}
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
                  <a href={CONTACT.phoneHref} className="text-xl text-primary font-medium hover:text-primary/80 transition-colors duration-300">
                    {CONTACT.phone}
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href={`mailto:${CONTACT.email}`} className="text-base hover:text-primary transition-colors duration-300">
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">ADDRESS</h4>
                  <address className="text-lg not-italic">
                    {CONTACT.address}<br />{CONTACT.city}
                  </address>
                  <p className="text-sm text-muted-foreground mt-1">{CONTACT.parkingNote}</p>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">HOURS</h4>
                  <div className="space-y-1 text-sm">
                    {HOURS.map(({ day, hours, muted }) => (
                      <div key={day} className={`flex justify-between max-w-xs ${muted ? "text-muted-foreground" : ""}`}>
                        <span>{day}</span><span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-4">FINANCING OPTIONS</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">{FINANCING.description}</p>
                  <p className="text-muted-foreground text-sm">{FINANCING.paymentNote}</p>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-3">FOLLOW US</h4>
                  <div className="flex flex-wrap gap-4 text-sm">
                    {SOCIAL.map(({ label, href }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <h4 className="text-minimal text-muted-foreground mb-6">REQUEST AN APPOINTMENT</h4>
              {submitted ? (
                <div className="bg-muted/40 rounded-xl p-8 text-center">
                  <p className="text-lg font-light text-architectural mb-2">Request Sent!</p>
                  <p className="text-muted-foreground text-sm">We'll be in touch shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-minimal text-muted-foreground block mb-1">NAME</label>
                    <input id="name" name="name" type="text" required placeholder="Your full name"
                      className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="text-minimal text-muted-foreground block mb-1">EMAIL</label>
                      <input id="email" name="email" type="email" required placeholder="you@email.com"
                        className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-minimal text-muted-foreground block mb-1">PHONE</label>
                      <input id="phone" name="phone" type="tel" placeholder="(410) 000-0000"
                        className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-minimal text-muted-foreground block mb-1">MESSAGE / SERVICE NEEDED</label>
                    <textarea id="message" name="message" rows={4} placeholder="Tell us what you're looking for, preferred days/times, or any questions..."
                      className="w-full border border-border rounded-lg px-4 py-3 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors duration-300">
                    Send Request
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Or call us directly at{" "}
                    <a href={CONTACT.phoneHref} className="text-primary hover:underline">{CONTACT.phone}</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
