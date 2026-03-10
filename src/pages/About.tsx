import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ABOUT, AFFILIATIONS, PRACTICE } from "@/config/practice";

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
                  {ABOUT.paragraphs.map((p, i) => (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-minimal text-primary mb-6">YOUR FIRST VISIT</h3>
                  <div className="space-y-4">
                    {ABOUT.firstVisit.map((item, i) => (
                      <div key={i} className="border-l-2 border-primary pl-6">
                        <h4 className="text-base font-medium mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-minimal text-primary mb-6">AFFILIATIONS</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    {AFFILIATIONS.map(a => (
                      <span key={a} className="px-3 py-1 rounded-full border border-border">{a}</span>
                    ))}
                  </div>
                </div>

                {PRACTICE.formerly && (
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">Formerly known as {PRACTICE.formerly}</p>
                  </div>
                )}
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
