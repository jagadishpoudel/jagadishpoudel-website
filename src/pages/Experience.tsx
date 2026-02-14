import { motion } from "framer-motion";

const ease = [0.215, 0.61, 0.355, 1] as const;

const experiences = [
  {
    role: "Independent Flutter Developer",
    company: "Freelance / Self-Employed",
    period: "2023 – Present",
    description:
      "Designing, developing, and publishing cross-platform mobile applications on Google Play Store. Building real-world apps with clean architecture, Riverpod/BLoC state management, Firebase backend, and beautiful UI/UX.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod", "Play Store"],
  },
  {
    role: "Flutter Developer Intern",
    company: "Thulo Technology Pvt. Ltd.",
    period: "Nov 2023 – Feb 2024",
    description:
      "Worked on production Flutter applications, collaborated with senior developers, and gained hands-on experience with REST APIs, state management patterns, and agile development workflows.",
    tags: ["Flutter", "REST APIs", "Agile", "Team Collaboration"],
  },
  {
    role: "Flutter Mentor & Community Builder",
    company: "Community / Workshops",
    period: "2023 – Present",
    description:
      "Mentoring aspiring Flutter developers through workshops, training sessions, and online content. Helping grow the developer community in Nepal through knowledge sharing.",
    tags: ["Mentoring", "Workshops", "YouTube", "Community"],
  },
];

const education = [
  {
    degree: "BSc. Computer Science & Information Technology (CSIT)",
    institution: "Tribhuvan University, Nepal",
    period: "2022 – Present",
  },
];

const Experience = () => {
  const titleChars = "Experience".split("");

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, delay: 0.2 + i * 0.05, ease },
    }),
  };

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease },
    },
  });

  return (
    <div className="min-h-screen bg-background py-28 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title */}
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-5 overflow-hidden">
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
            variants={fadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            My professional journey in Flutter development, mentoring, and community building.
          </motion.p>
        </div>

        {/* Work Experience */}
        <div className="space-y-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work & Roles
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="relative md:pl-14 p-7 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * i, ease }}
                  whileHover={{ y: -4 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-9 w-[10px] h-[10px] rounded-full bg-primary border-2 border-background hidden md:block" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-body text-muted-foreground uppercase tracking-wider mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-body text-primary mb-3">{exp.company}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="p-7 bg-card rounded-xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-sm font-body text-primary mb-1">{edu.institution}</p>
              <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
