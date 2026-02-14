import { motion } from "framer-motion";

const ease = [0.215, 0.61, 0.355, 1] as const;

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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            A showcase of my Flutter and web development work
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 * index, ease }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -12px hsl(var(--foreground) / 0.12)",
              }}
              className="group block p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="relative mb-8 flex justify-center">
                <div className="relative w-44 h-72 bg-foreground rounded-3xl border-[6px] border-muted shadow-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-foreground flex items-center justify-center rounded-b-xl z-10">
                    <div className="w-14 h-4 bg-foreground rounded-b-md" />
                  </div>
                  <div className="pt-6 h-full bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center text-foreground p-4">
                    <div className="text-4xl mb-3">{project.icon}</div>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
