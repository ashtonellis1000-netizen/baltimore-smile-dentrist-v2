import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import doctorBarton from "@/assets/doctor-barton.jpg";
import doctorWelzel from "@/assets/doctor-welzel.jpg";
import doctorEsquilin from "@/assets/doctor-esquilin.jpg";
import doctorMurphy from "@/assets/doctor-murphy.jpg";

const doctors = [
  {
    image: doctorBarton,
    name: "Dr. M. Alexander Barton, D.M.D.",
    title: "Lead Doctor",
    fullBio: "Baltimore native who grew up in Towson and attended Saint Paul's Schools. Earned a B.S. in Public Health from George Washington University (2015). Worked as a lab technician in the Neurology Department at Johns Hopkins University School of Medicine doing mass spectrometry before dental school. Attended University of New England for dental school. Member of the American Dental Association, Maryland State Dental Association, Baltimore County Dental Association, and American Academy of Facial Aesthetics with intensive certification for cosmetic procedures."
  },
  {
    image: doctorWelzel,
    name: "Dr. med. dent. Alexandra Welzel, DDS, FAGD",
    title: "Cosmetic Specialist — 30+ Years Experience",
    fullBio: "Native of Germany with over 30 years of dental care experience. Specializes in cosmetic options including clear aligners, teeth whitening, veneers, crowns, bridges, bonding and more. Recipient of the prestigious 'Fellow of Academy of General Dentistry' (FAGD) award. Graduated from Dental School, RWTH Aachen, Germany (1992). Completed Doctoral Thesis, Magna Cum Laude, at RWTH Aachen (1994). Completed 3-year residency in Advanced General Dentistry at University of Maryland Baltimore College of Dental Surgery."
  },
  {
    image: doctorEsquilin,
    name: "Dr. Nicole Esquilín",
    title: "General Dentist — Bilingual (English/Spanish)",
    fullBio: "Born and raised in Puerto Rico. Earned Doctor of Dental Medicine degree from University of Puerto Rico. Completed Advanced Education in General Dentistry (AEGD) residency at Chase Brexton Health Clinic with NYU Langone in Baltimore City. Trained in restorative work, fixed and removable prosthesis, and endodontic treatment. Certified in Invisalign and SureSmile clear aligner treatment. Offers bilingual care as a native Spanish speaker."
  },
  {
    image: doctorMurphy,
    name: "K. Michael Murphy, DDS, MS",
    title: "Prosthodontist — Voted Best in Baltimore",
    fullBio: "Graduated Magna Cum Laude from NYU College of Dentistry (1978). Trained for an additional 4 years in three hospitals in General Dentistry, General & Maxillofacial Prosthodontics. Clinical Assistant Professor at UM Dental College postgraduate prosthodontic department. Voted both 'Best Prosthodontist' and 'Best Dentists' in Baltimore. Practices at the leading edge of digital cosmetic, complex restorative and implant dentistry. Qualified to treat snoring and sleep disordered breathing."
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-architectural mb-6">OUR DOCTORS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our experienced team of dental professionals combines decades of expertise 
              with the latest technology to provide exceptional care.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-20">
            {doctors.map((doc, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="overflow-hidden rounded-xl">
                    <img src={doc.image} alt={doc.name} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="text-minimal text-primary mb-3">{doc.title}</p>
                  <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">{doc.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">{doc.fullBio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
