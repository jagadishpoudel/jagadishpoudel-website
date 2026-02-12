import { motion } from "framer-motion";

const Contact = () => {
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
    <div className="min-h-screen bg-background py-24 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">Let's Connect</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm always open to new opportunities, collaborations, or just a friendly chat about Flutter and mobile
              development.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:jpoudel974@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-body text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello ✉
            </motion.a>
            <motion.a
              href="/cv_jagadish.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-8 py-3 rounded-md font-body text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV ↓
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 text-muted-foreground font-body text-sm"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-4"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-4"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="tel:+9779866634875"
              className="hover:text-foreground transition-colors underline underline-offset-4"
              whileHover={{ scale: 1.1 }}
            >
              +977 9866634875
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-16 pt-8 border-t border-border text-muted-foreground font-body text-xs"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Jagadish Poudel. Built with passion using React & Framer Motion.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
