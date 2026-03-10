const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-minimal text-primary mb-4">ABOUT OUR PRACTICE</h2>
              <h3 className="text-4xl md:text-5xl font-light text-architectural mb-10">
                Healthy Mouth, Heart & Mind
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chesapeake Dental Group (formerly Dr. K Michael Murphy & Associates) is committed 
                  to providing the highest quality oral health care in an environment where everyone 
                  is treated with dignity and nurtured.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nestled in the Cambridge Apartments in Roland Park, across from Johns Hopkins 
                  Homewood Campus, our office uses the latest technology in a gentle, caring, 
                  and friendly manner — with convenient access to free parking.
                </p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-minimal text-primary mb-6">YOUR FIRST VISIT</h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-6">
                    <h5 className="text-base font-medium mb-1">Medical & Dental History</h5>
                    <p className="text-muted-foreground text-sm">Comprehensive review and necessary x-rays</p>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <h5 className="text-base font-medium mb-1">Micro-Assay Analysis</h5>
                    <p className="text-muted-foreground text-sm">Bacterial study using phase contrast microscope</p>
                  </div>
                  <div className="border-l-2 border-primary pl-6">
                    <h5 className="text-base font-medium mb-1">Oral Cancer Exam</h5>
                    <p className="text-muted-foreground text-sm">Full periodontal charting and treatment planning</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-minimal text-primary mb-2">LEAD DOCTOR</h4>
                    <p className="text-lg">Dr. M. Alex Barton</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-primary mb-2">ESTABLISHED</h4>
                    <p className="text-lg">Roland Park, Baltimore</p>
                  </div>
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
