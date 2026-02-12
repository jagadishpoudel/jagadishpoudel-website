import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto scroll-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-medium">Flutter Developer</span> with 2+ years of experience designing, developing, and publishing high-quality cross-platform mobile apps.
            </p>
            <p>
              Currently pursuing my BSc.CSIT at Tribhuvan University, I'm passionate about building real-world applications with clean architecture, effective UI/UX, and scalable state management.
            </p>
            <p>
              Beyond coding, I mentor aspiring Flutter developers through workshops and training sessions, helping grow the developer community in Nepal.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-body font-semibold text-foreground mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Dart", "Firebase", "Supabase", "Riverpod", "BLoC", "Provider", "REST APIs", "Git", "Figma"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-body border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-body font-semibold text-foreground mb-3">Experience</h3>
              <div className="space-y-2 font-body text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span className="text-foreground">Independent Flutter Developer</span>
                  <span>2023 – Present</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Intern @ Thulo Technology</span>
                  <span>Nov 2023 – Feb 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
