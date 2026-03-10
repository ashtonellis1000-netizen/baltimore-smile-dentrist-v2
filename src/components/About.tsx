import { ABOUT, AFFILIATIONS, PRACTICE, CONTACT } from "@/config/practice";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-minimal text-primary mb-4">ABOUT OUR PRACTICE</h2>
              <h3 className="text-4xl md:text-5xl font-light text-architectural mb-10">
                {ABOUT.missionHeadline}
              </h3>

              <div className="space-y-6">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="text-minimal text-primary mb-6">YOUR FIRST VISIT</h4>
                <div className="space-y-4">
                  {ABOUT.firstVisit.map((item, i) => (
                    <div key={i} className="border-l-2 border-primary pl-6">
                      <h5 className="text-base font-medium mb-1">{item.title}</h5>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-minimal text-primary mb-2">LEAD DOCTOR</h4>
                    <p className="text-lg">Dr. M. Alex Barton</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-primary mb-2">LOCATION</h4>
                    <p className="text-lg">{PRACTICE.established}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-minimal text-primary mb-4">AFFILIATIONS</h4>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  {AFFILIATIONS.map(a => (
                    <span key={a} className="px-3 py-1 rounded-full border border-border">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
