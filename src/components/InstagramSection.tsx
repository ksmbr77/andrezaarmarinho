import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, MessageCircle, Instagram } from "lucide-react";

const posts = [
  { likes: 342, comments: 28, color: "from-primary/30 to-primary/10" },
  { likes: 518, comments: 45, color: "from-accent/20 to-accent/5" },
  { likes: 273, comments: 19, color: "from-primary/20 to-secondary" },
  { likes: 691, comments: 52, color: "from-secondary to-primary/15" },
  { likes: 425, comments: 33, color: "from-primary/25 to-accent/10" },
  { likes: 387, comments: 27, color: "from-accent/15 to-primary/20" },
];

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Siga Nossa Jornada</h2>
          <div className="red-line mx-auto mb-4" />
          <p className="text-muted-foreground">@andrezaarmarinho</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Instagram size={40} className="text-muted-foreground/30" />
              </div>
              <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-1 text-primary-foreground">
                  <Heart size={20} fill="currentColor" />
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-primary-foreground">
                  <MessageCircle size={20} />
                  <span className="font-semibold">{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/andrezaarmarinho"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2"
          >
            <Instagram size={18} />
            Ver Instagram @andrezaarmarinho
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
