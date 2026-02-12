import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95]"
              variants={itemVariants}
            >
              Flutter Developer &<br />
              App Enthusiast
            </motion.h1>

            <motion.div
              className="flex flex-col gap-1 text-lg text-muted-foreground"
              variants={itemVariants}
            >
              <p>
                Hi, I'm <span className="text-foreground font-semibold">Jagadish Poudel</span>!
              </p>
              <p>– a passionate Flutter developer</p>
              <p>– a BSc.CSIT student from Nepal</p>
              <p>– a mentor & community builder</p>
            </motion.div>

            <motion.div className="flex items-center gap-4" variants={itemVariants}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border-2 border-primary bg-primary/10 text-foreground px-6 py-3 rounded-md font-body text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                See My Work →
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 text-sm text-muted-foreground font-body"
              variants={itemVariants}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                GitHub
              </a>
              <span>/</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                LinkedIn
              </a>
              <span>/</span>
              <a
                href="mailto:jpoudel974@gmail.com"
                className="hover:text-foreground transition-colors underline underline-offset-4"
              >
                Email
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
              <img
                src={heroIllustration}
                alt="Jagadish Poudel illustration"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 w-64 bg-terminal rounded-lg shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-1.5 px-3 py-2 bg-muted-foreground/20">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45, 90%, 55%)" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(120, 50%, 55%)" }} />
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(0, 70%, 55%)" }} />
              </div>
              <div className="p-3 font-mono text-xs text-terminal-foreground">
                <p>$ flutter build apk</p>
                <p className="mt-1 opacity-70">{">"} Building...</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
