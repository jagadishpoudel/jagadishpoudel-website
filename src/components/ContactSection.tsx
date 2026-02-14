import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto scroll-fade-in text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Let's Connect
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a friendly chat about Flutter and mobile development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:jpoudel974@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-body text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            Say Hello ✉
          </a>
          <a
            href="/cv_jagadish.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-foreground px-8 py-3 rounded-md font-body text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Download CV ↓
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground font-body text-sm">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">
            LinkedIn
          </a>
          <a href="tel:+9779866634875" className="hover:text-foreground transition-colors underline underline-offset-4">
            +977 9866634875
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} Jagadish Poudel. Built with passion.
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
