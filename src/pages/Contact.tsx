import { motion } from "framer-motion";

const ease = [0.215, 0.61, 0.355, 1] as const;

const socials = [
  { label: "GitHub", href: "https://github.com/jagadishpoudel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jagadish-poudel/" },
  { label: "Play Store", href: "https://play.google.com/store/apps/dev?id=4658001568577208018" },
  { label: "Facebook", href: "https://www.facebook.com/jagadishpoudel50" },
  { label: "YouTube", href: "https://www.youtube.com/@codingwithjagadish" },
  { label: "+977 9866634875", href: "tel:+9779866634875" },
];

const Contact = () => {
  const titleChars = "Let's Connect".split("");

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, delay: 0.2 + i * 0.04, ease },
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
    <div className="min-h-screen bg-background py-28 md:py-32 px-8 md:px-12 lg:px-16 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center space-y-10">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-5 overflow-hidden">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={charVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
              variants={fadeUp(0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              I'm always open to new opportunities, collaborations, or just a friendly chat about Flutter and mobile development.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUp(1.0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:jpoudel974@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello ✉
            </motion.a>
            <motion.a
              href="/cv_jagadish.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-8 py-3.5 rounded-lg font-body text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV ↓
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground font-body text-sm"
            variants={fadeUp(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                {s.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            className="mt-20 pt-8 border-t border-border text-muted-foreground font-body text-xs"
            variants={fadeUp(1.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Jagadish Poudel. Built with passion using React & Framer Motion.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
