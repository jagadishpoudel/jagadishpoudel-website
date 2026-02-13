import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

const ease = [0.215, 0.61, 0.355, 1] as const;

const Home = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, delay: i * 0.04, ease },
    }),
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.8 + i * 0.15, ease },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease },
    }),
  };

  const titleLine1 = "Flutter Developer &";
  const titleLine2 = "App Enthusiast";

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center relative overflow-hidden px-8 md:px-12 lg:px-16 pt-24 pb-12">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95]">
                <span className="block overflow-hidden">
                  {titleLine1.split("").map((char, i) => (
                    <motion.span
                      key={`l1-${i}`}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                <span className="block overflow-hidden mt-1">
                  {titleLine2.split("").map((char, i) => (
                    <motion.span
                      key={`l2-${i}`}
                      custom={i + titleLine1.length}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-2 text-lg text-muted-foreground">
              {[
                <>Hi, I'm <span className="text-foreground font-semibold">Jagadish Poudel</span>!</>,
                "– a passionate Flutter developer",
                "– a BSc.CSIT student from Nepal",
                "– a mentor & community builder",
              ].map((line, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-body"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              custom={1.6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border-2 border-primary bg-primary/10 text-foreground px-7 py-3.5 rounded-lg font-body text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                See My Work →
              </Link>
            </motion.div>

            <motion.div
              custom={1.9}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 text-sm text-muted-foreground font-body"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">GitHub</a>
              <span className="text-border">/</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">LinkedIn</a>
              <span className="text-border">/</span>
              <a href="mailto:jpoudel974@gmail.com" className="hover:text-foreground transition-colors underline underline-offset-4">Email</a>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src={heroIllustration}
                alt="Jagadish Poudel illustration"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-2 md:bottom-2 md:-right-10 w-64 bg-terminal rounded-xl shadow-2xl overflow-hidden border border-border/30"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.2, ease }}
            >
              <div className="flex items-center gap-1.5 px-3 py-2.5 bg-muted-foreground/20">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "hsl(0, 70%, 55%)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "hsl(45, 90%, 55%)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "hsl(120, 50%, 55%)" }} />
                <span className="ml-2 text-terminal-foreground/50 text-[10px] font-mono">terminal</span>
              </div>
              <div className="p-4 font-mono text-xs text-terminal-foreground space-y-1">
                <p className="opacity-70">$ flutter build apk</p>
                <motion.p
                  className="text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  ✓ Built build/app/outputs/flutter-apk
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
