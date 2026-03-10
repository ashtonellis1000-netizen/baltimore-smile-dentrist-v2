import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-32 text-center">
          <h1 className="text-4xl font-light text-architectural mb-8">Post Not Found</h1>
          <Link to="/blog" className="text-minimal text-primary">← BACK TO BLOG</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-block text-minimal text-muted-foreground hover:text-primary transition-colors mb-10">
              ← BACK TO BLOG
            </Link>
            
            <div className="mb-8">
              <div className="flex items-center text-minimal text-muted-foreground space-x-4 mb-4">
                <span className="text-primary">{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-light text-architectural mb-4">{post.title}</h1>
              <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-muted-foreground leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) return `<h1 class="text-2xl md:text-3xl font-light text-foreground mb-6 mt-10">${line.substring(2)}</h1>`;
                      if (line.startsWith('## ')) return `<h2 class="text-xl md:text-2xl font-light text-foreground mb-4 mt-8">${line.substring(3)}</h2>`;
                      if (line.startsWith('### ')) return `<h3 class="text-lg font-medium text-foreground mb-3 mt-6">${line.substring(4)}</h3>`;
                      if (line.startsWith('- **')) {
                        const content = line.substring(4, line.lastIndexOf('**'));
                        const rest = line.substring(line.lastIndexOf('**') + 2);
                        return `<li class="ml-6 mb-1"><strong class="text-foreground">${content}</strong>${rest}</li>`;
                      }
                      if (line.startsWith('- ')) return `<li class="ml-6 mb-1">${line.substring(2)}</li>`;
                      if (line.trim() === '') return '';
                      return `<p class="mb-3">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </div>
            
            <div className="mt-12 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">Written by <strong className="text-foreground">{post.author}</strong></p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
