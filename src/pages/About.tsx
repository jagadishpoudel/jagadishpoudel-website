import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    ["Flutter", "Dart", "Firebase"],
    ["State Management", "Provider", "Riverpod"],
    ["UI/UX Design", "Responsive", "Material Design"],
    ["REST APIs", "Real-time DBs", "Cloud Functions"],
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Flutter developer from Nepal, currently pursuing my BSc in Computer Science and IT
              (CSIT). With a deep love for building beautiful and functional mobile applications, I've been exploring
              the Flutter ecosystem for the past few years.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm committed to giving back to the community. I mentor aspiring developers, contribute to
              open-source projects, and share knowledge through talks and workshops. My goal is to bridge the gap
              between learning and real-world application development.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, i) => (
                <motion.div
                  key={i}
                  className="p-6 bg-card rounded-lg border border-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Flutter?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Flutter allows me to build beautiful, natively compiled applications for mobile, web, and desktop
                from a single codebase. The framework's hot reload feature and rich widget library make development a
                delightful experience.
              </p>
              <p>
                I'm particularly interested in creating engaging user experiences and exploring advanced features like
                animations, custom gestures, and platform-specific integrations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
