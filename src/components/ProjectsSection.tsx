import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "CSIT Paper Pro",
    description:
      "Past papers with solutions and complete syllabus for BSc.CSIT students. Features Google Sign-In, guest mode, and answer contribution.",
    tags: ["Flutter", "Firebase", "Provider"],
    link: "#",
  },
  {
    title: "BCA Paper Pro",
    description:
      "Past papers with solutions for BCA students with Google Sign-In, guest mode, and community-driven answer contributions.",
    tags: ["Flutter", "Firebase", "Riverpod"],
    link: "#",
  },
  {
    title: "Flutter Handbook",
    description:
      "A structured Flutter learning app with complete documentation, code previews and video tutorials for beginners to advanced learners.",
    tags: ["Flutter", "Dart", "Education"],
    link: "#",
  },
  {
    title: "Bijuli Bazzar",
    description:
      "Full-featured e-commerce app with real-time order tracking, push notifications, payment system, and admin dashboard.",
    tags: ["Flutter", "Riverpod", "Firebase", "Cloud Functions"],
    link: "#",
  },
];

const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto scroll-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="project-card block p-6 bg-card rounded-xl border border-border group"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
