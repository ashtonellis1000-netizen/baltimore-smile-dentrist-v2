import doctorBarton from "@/assets/doctor-barton.jpg";
import doctorWelzel from "@/assets/doctor-welzel.jpg";
import doctorEsquilin from "@/assets/doctor-esquilin.jpg";
import doctorMurphy from "@/assets/doctor-murphy.jpg";

const doctors = [
  {
    image: doctorBarton,
    name: "Dr. M. Alexander Barton, D.M.D.",
    title: "Lead Doctor",
    bio: "Baltimore native with a B.S. in Public Health from GWU. Trained at University of New England and certified in cosmetic procedures through the American Academy of Facial Aesthetics."
  },
  {
    image: doctorWelzel,
    name: "Dr. Alexandra Welzel, DDS, FAGD",
    title: "Cosmetic Specialist",
    bio: "Over 30 years of experience. Fellow of the Academy of General Dentistry (FAGD). Specializes in clear aligners, veneers, whitening, and more."
  },
  {
    image: doctorEsquilin,
    name: "Dr. Nicole Esquilín",
    title: "General Dentist",
    bio: "Bilingual care in English and Spanish. Certified in Invisalign and SureSmile. Trained in restorative, prosthetic, and endodontic treatment."
  },
  {
    image: doctorMurphy,
    name: "K. Michael Murphy, DDS, MS",
    title: "Prosthodontist",
    bio: "Voted 'Best Prosthodontist' and 'Best Dentist' in Baltimore. Practices at the leading edge of digital cosmetic, complex restorative and implant dentistry."
  },
];

const Portfolio = () => {
  return (
    <section id="doctors" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-minimal text-primary mb-4">OUR DOCTORS</h2>
            <h3 className="text-4xl md:text-5xl font-light text-architectural">
              Meet the Team
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-5">
                  <img 
                    src={doc.image} 
                    alt={doc.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-medium text-architectural mb-1">{doc.name}</h4>
                <p className="text-minimal text-primary mb-3">{doc.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{doc.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
