import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import csitCover from "@/assets/csitpaperpro.png";
import bcaCover from "@/assets/bcapaperpro.png";
import flutterCover from "@/assets/flutterhandbook.png";

const ease = [0.215, 0.61, 0.355, 1] as const;

const projects = [
  {
    title: "CSIT Paper Pro",
    description:
      "Past papers with solutions and complete syllabus for BSc.CSIT students. Features Google Sign-In, guest mode, and answer contribution.",
    tags: ["Flutter", "Firebase", "Provider"],
    cover: csitCover,
    link: "https://play.google.com/store/apps/details?id=com.jagabyte.oldqna_csit",
    linkLabel: "Google Play",
    linkIcon: "▶",
  },
  {
    title: "BCA Paper Pro",
    description:
      "Past papers with solutions for BCA students with Google Sign-In, guest mode, and community-driven answer contributions.",
    tags: ["Flutter", "Firebase", "Riverpod"],
    cover: bcaCover,
    link: "https://play.google.com/store/apps/details?id=com.jagabyte.bca_paper_pro",
    linkLabel: "Google Play",
    linkIcon: "▶",
  },
  {
    title: "Flutter Handbook",
    description:
      "A structured Flutter learning app with complete documentation, code previews and video tutorials for beginners to advanced learners.",
    tags: ["Flutter", "Dart", "Education"],
    cover: flutterCover,
    link: "https://play.google.com/store/apps/details?id=com.jagabyte.flutter_handbook",
    linkLabel: "Google Play",
    linkIcon: "▶",
  },
  {
    title: "Bijuli Bazzar",
    description:
      "Full-featured e-commerce app with real-time order tracking, push notifications, payment system, and admin dashboard.",
    tags: ["Flutter", "Riverpod", "Firebase", "Cloud Functions"],
    cover: null,
    link: "https://github.com/jagadishpoudel/Bijuli_Bazzar.git",
    linkLabel: "GitHub",
    linkIcon: "⌘",
  },
];

const Projects = () => {
  const titleChars = "Projects".split("");

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, delay: 0.2 + i * 0.05, ease },
    }),
  };

  return (
    <div className="min-h-screen bg-background py-28 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-5 overflow-hidden">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            A showcase of my Flutter and web development work
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.12 * index, ease }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden"
            >
              {/* Cover Image */}
              {project.cover && (
                <motion.div
                  className="relative w-full h-48 md:h-56 overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <img
                    src={project.cover}
                    alt={`${project.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </motion.div>
              )}

              {/* No cover fallback */}
              {!project.cover && (
                <div className="relative w-full h-48 md:h-56 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20 flex items-center justify-center">
                  <motion.span
                    className="text-6xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🛒
                  </motion.span>
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold transition-colors duration-200 hover:bg-primary/90"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.linkLabel}
                </motion.a>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
