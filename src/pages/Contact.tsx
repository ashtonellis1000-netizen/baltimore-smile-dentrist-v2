import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT, HOURS, SOCIAL, FINANCING } from "@/config/practice";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data    = new FormData(e.currentTarget);
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
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">

              {/* Left: contact info */}
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
                    <a href={CONTACT.phoneHref} className="text-xl text-primary font-medium hover:text-primary/80 transition-colors">
                      {CONTACT.phone}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a href={`mailto:${CONTACT.email}`} className="text-base hover:text-primary transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">ADDRESS</h3>
                    <address className="text-lg not-italic">
                      {CONTACT.address}<br />{CONTACT.city}
                    </address>
                    <p className="text-sm text-muted-foreground mt-1">{CONTACT.parkingNote}</p>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">HOURS</h3>
                    <div className="space-y-1 text-sm">
                      {HOURS.map(({ day, hours, muted }) => (
                        <div key={day} className={`flex justify-between max-w-xs ${muted ? "text-muted-foreground" : ""}`}>
                          <span>{day}</span><span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-3">FINANCING</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{FINANCING.description}</p>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-3">FOLLOW US</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {SOCIAL.map(({ label, href }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: form + map */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">REQUEST AN APPOINTMENT</h3>
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

                {/* Google Maps embed */}
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-4">FIND US</h3>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <iframe
                      title={`${CONTACT.address} location`}
                      src={CONTACT.mapEmbedSrc}
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline mt-2 inline-block">
                    Open in Google Maps →
                  </a>
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
