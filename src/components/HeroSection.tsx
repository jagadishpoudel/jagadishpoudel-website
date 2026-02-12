import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-20">
        {/* Left: Text content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] text-reveal">
            Flutter Developer &<br />
            App Enthusiast
          </h1>

          <div className="flex flex-col gap-1 text-lg text-muted-foreground text-reveal text-reveal-delay-1">
            <p>Hi, I'm <span className="text-foreground font-semibold font-body">Jagadish Poudel</span>!</p>
            <p className="font-body">– a passionate Flutter developer</p>
            <p className="font-body">– a BSc.CSIT student from Nepal</p>
            <p className="font-body">– a mentor & community builder</p>
          </div>

          <div className="flex items-center gap-4 text-reveal text-reveal-delay-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-primary bg-primary/10 text-foreground px-6 py-3 rounded-md font-body text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              See My Work →
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground text-reveal text-reveal-delay-3 font-body">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">GitHub</a>
            <span>/</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4">LinkedIn</a>
            <span>/</span>
            <a href="mailto:jpoudel974@gmail.com" className="hover:text-foreground transition-colors underline underline-offset-4">Email</a>
          </div>
        </div>

        {/* Right: Illustration + Terminal */}
        <div className="relative flex justify-center items-center text-reveal text-reveal-delay-2">
          {/* Circle background */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
            <img
              src={heroIllustration}
              alt="Jagadish Poudel illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Terminal widget */}
          <div className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-8 w-64 bg-terminal rounded-lg shadow-2xl overflow-hidden text-reveal text-reveal-delay-4">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-muted-foreground/20">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(45, 90%, 55%)' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(120, 50%, 55%)' }} />
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(0, 70%, 55%)' }} />
            </div>
            <div className="p-3 font-mono text-xs text-terminal-foreground">
              <p>$ flutter build apk</p>
              <p className="mt-1 opacity-70 terminal-cursor">&gt; Building...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-arrow">
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
      </div>
    </section>
  );
};

export default HeroSection;
