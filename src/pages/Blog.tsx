import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", "TECHNOLOGY", "HEALTH", "COSMETIC"];
  
  const filteredPosts = activeCategory === "ALL" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light text-architectural mb-6">DENTAL INSIGHTS</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Helpful information about dental health, treatments, and the latest technology from our team.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-primary transition-transform duration-300 origin-left ${
                    activeCategory === category ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="space-y-4">
                      <div className="flex items-center text-xs text-muted-foreground space-x-3">
                        <span className="text-primary font-medium">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-medium text-architectural group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">{post.excerpt}</p>
                      <span className="text-minimal text-primary">READ MORE →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
