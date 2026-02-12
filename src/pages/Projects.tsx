import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "CSIT Paper Pro",
      description: "Past papers with solutions and complete syllabus for BSc.CSIT students. Features Google Sign-In, guest mode, and answer contribution.",
      tags: ["Flutter", "Firebase", "Provider"],
      icon: "📚",
    },
    {
      title: "BCA Paper Pro",
      description: "Past papers with solutions for BCA students with Google Sign-In, guest mode, and community-driven answer contributions.",
      tags: ["Flutter", "Firebase", "Riverpod"],
      icon: "📖",
    },
    {
      title: "Flutter Handbook",
      description: "A structured Flutter learning app with complete documentation, code previews and video tutorials for beginners to advanced learners.",
      tags: ["Flutter", "Dart", "Education"],
      icon: "✨",
    },
    {
      title: "Bijuli Bazzar",
      description: "Full-featured e-commerce app with real-time order tracking, push notifications, payment system, and admin dashboard.",
      tags: ["Flutter", "Riverpod", "Firebase", "Cloud Functions"],
      icon: "🛒",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">A showcase of my Flutter and web development work</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href="#"
              variants={cardVariants}
              whileHover={{
                y: -12,
                boxShadow: "0 20px 40px -12px hsl(var(--foreground) / 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="group block p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative mb-8 flex justify-center">
                <div className="relative w-48 h-80 bg-foreground rounded-3xl border-8 border-muted shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-7 bg-foreground flex items-center justify-center rounded-b-2xl z-10">
                    <div className="w-16 h-5 bg-foreground rounded-b-lg" />
                  </div>
                  <div className="pt-7 h-full bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center text-foreground p-4">
                    <div className="text-4xl mb-2">{project.icon}</div>
                    <p className="text-xs text-center font-semibold opacity-75">{project.title}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
