export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "cerec-same-day-crowns",
    title: "CEREC Same-Day Crowns: What You Need to Know",
    excerpt: "Learn how our advanced CAD/CAM technology allows us to create and place beautiful, precise crowns in a single visit.",
    content: `
# CEREC Same-Day Crowns: What You Need to Know

Gone are the days of multiple appointments and temporary crowns. With CEREC (Chairside Economical Restoration of Esthetic Ceramics) technology, we can design, create, and place a permanent ceramic crown in just one visit.

## How It Works

### Digital Impressions
Instead of messy putty impressions, we use a small camera to take a digital scan of your tooth. This creates an incredibly accurate 3D model.

### Computer-Aided Design
Using specialized software, your dentist designs your new crown right on a computer screen, ensuring perfect fit and natural appearance.

### In-Office Milling
The design is sent to our in-office milling machine, which carves your crown from a solid block of high-quality ceramic material in about 15 minutes.

## Benefits of CEREC Crowns

- **Single visit** — no temporary crown or second appointment
- **Digital precision** — superior fit compared to traditional methods
- **Natural appearance** — tooth-colored ceramic that blends seamlessly
- **Durable** — high-quality materials built to last
- **Conservative** — preserves more natural tooth structure

## Is CEREC Right for You?

CEREC crowns are ideal for most situations requiring a crown, including damaged teeth, large fillings that need replacement, and cosmetic improvements. Schedule a consultation to find out if CEREC is right for your needs.
    `,
    author: "Dr. Barton",
    date: "2024-11-15",
    readTime: "4 min read",
    category: "TECHNOLOGY",
    image: "/src/assets/hero-dental.jpg"
  },
  {
    id: "sleep-apnea-dental-treatment",
    title: "Sleep Apnea Treatment Without CPAP",
    excerpt: "Custom dental appliances offer an effective alternative to CPAP machines for treating snoring and obstructive sleep apnea.",
    content: `
# Sleep Apnea Treatment Without CPAP

Obstructive sleep apnea affects millions of Americans, and while CPAP machines are effective, many patients find them uncomfortable. Our practice offers FDA-approved dental appliance therapy as an alternative.

## Understanding Sleep Apnea

Sleep apnea occurs when the airway becomes partially or fully blocked during sleep, causing interrupted breathing patterns. Symptoms include loud snoring, daytime fatigue, morning headaches, and difficulty concentrating.

## Dental Appliance Therapy

### How It Works
A custom-made, custom-fitted oral appliance is worn during sleep. It repositions the lower jaw and tongue to keep the airway open, preventing the collapse that causes apnea events.

### Our Process
- Written screening questionnaire
- Sleep-record appointment with take-home diagnostic device
- Data download and analysis
- Sleep physician diagnosis
- Custom dental appliance fabrication and fitting

## Benefits Over CPAP

- **Comfortable** — small, lightweight, and easy to wear
- **Portable** — perfect for travel
- **Silent** — no machine noise
- **No electricity needed**
- **Easy to maintain**

## Is It Right for You?

Dental appliance therapy is particularly effective for mild to moderate obstructive sleep apnea and can also be used in conjunction with CPAP for severe cases. As members of the American Academy of Dental Sleep Medicine, we're qualified to evaluate your needs.
    `,
    author: "Dr. Murphy",
    date: "2024-10-20",
    readTime: "5 min read",
    category: "HEALTH",
    image: "/src/assets/hero-dental.jpg"
  },
  {
    id: "clear-aligners-options",
    title: "Clear Aligners: Your Options for a Straighter Smile",
    excerpt: "Comparing Invisalign, SureSmile, and Six Month Smiles — find the right clear aligner treatment for your needs.",
    content: `
# Clear Aligners: Your Options for a Straighter Smile

Clear aligner therapy has revolutionized orthodontic treatment, offering a discreet alternative to traditional braces. At our practice, we offer multiple clear aligner systems to match your specific needs.

## Invisalign

The most well-known clear aligner system. Custom-made, removable trays gradually shift your teeth into the desired position.

### Best For
- Complex cases requiring significant tooth movement
- Patients wanting the most established system
- Full-mouth alignment

## SureSmile

An advanced aligner system using 3D imaging and digital treatment planning for precise results.

### Best For
- Patients seeking digital precision
- Moderate alignment cases
- Combination with other dental treatments

## Six Month Smiles

Short-term orthodontic treatment focusing on the visible front teeth using clear brackets and tooth-colored wires.

### Best For
- Mild to moderate cosmetic cases
- Patients wanting faster results
- Focus on front teeth alignment

## Making Your Choice

During your consultation, our doctors will evaluate your specific needs and recommend the best option. Factors include the complexity of your case, treatment timeline, budget, and personal preferences.

Schedule your consultation today to discover which clear aligner system is right for you.
    `,
    author: "Dr. Esquilín",
    date: "2024-09-08",
    readTime: "4 min read",
    category: "COSMETIC",
    image: "/src/assets/hero-dental.jpg"
  }
];
