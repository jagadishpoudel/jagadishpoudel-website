import { motion } from "framer-motion";

const About = () => {
  const titleChars = "About".split("");
  const ease = [0.215, 0.61, 0.355, 1] as const;

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.05,
        ease,
      },
    }),
  };

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease },
    },
  });

  const skills = [
    { group: ["Flutter", "Dart", "Firebase"], label: "Core" },
    { group: ["Provider", "Riverpod", "BLoC"], label: "State Management" },
    { group: ["UI/UX", "Responsive", "Material Design"], label: "Design" },
    { group: ["REST APIs", "Real-time DBs", "Cloud Functions"], label: "Backend" },
  ];

  return (
    <div className="min-h-screen bg-background py-28 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 overflow-hidden">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            variants={fadeUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I'm a passionate Flutter developer from Nepal, currently pursuing my BSc in Computer Science and IT
            (CSIT). With a deep love for building beautiful and functional mobile applications, I've been exploring
            the Flutter ecosystem for the past few years.
          </motion.p>
        </div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Beyond coding, I'm committed to giving back to the community. I mentor aspiring developers, contribute to
          open-source projects, and share knowledge through talks and workshops.
        </motion.p>

        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-10"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((item, i) => (
              <motion.div
                key={i}
                className="p-7 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease }}
                whileHover={{ y: -4 }}
              >
                <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-4">{item.label}</p>
                <div className="flex flex-wrap gap-3">
                  {item.group.map((skill) => (
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
        </div>

        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Flutter?
          </motion.h2>
          <motion.div
            className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-2xl"
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              Flutter allows me to build beautiful, natively compiled applications for mobile, web, and desktop
              from a single codebase. The hot reload and rich widget library make development delightful.
            </p>
            <p>
              I'm particularly interested in creating engaging user experiences and exploring advanced features like
              animations, custom gestures, and platform-specific integrations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
