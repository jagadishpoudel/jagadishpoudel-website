import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";
import csitCover from "@/assets/csitpaperpro.png";
import bcaCover from "@/assets/bcapaperpro.png";
import flutterCover from "@/assets/flutterhandbook.png";

const projects = [
  {
    title: "CSIT Paper Pro",
    description:
      "Past papers with solutions and complete syllabus for BSc.CSIT students. Features Google Sign-In, guest mode, and answer contribution.",
    tags: ["Flutter", "Firebase", "Provider"],
    cover: csitCover,
    link: "https://play.google.com/store/apps/details?id=com.jagabyte.oldqna_csit",
    linkLabel: "Google Play",
  },
  {
    title: "BCA Paper Pro",
    description:
      "Past papers with solutions for BCA students with Google Sign-In, guest mode, and community-driven answer contributions.",
    tags: ["Flutter", "Firebase", "Riverpod"],
    cover: bcaCover,
    link: "https://play.google.com/store/apps/details?id=com.jagabyte.bca_paper_pro",
    linkLabel: "Google Play",
  },
  {
    title: "Flutter Handbook",
    description:
      "A structured Flutter learning app with complete documentation, code previews and video tutorials for beginners to advanced learners.",
    tags: ["Flutter", "Dart", "Education"],
    cover: flutterCover,
    link: "https://play.google.com/store/apps/details?id=com.jagabyte.flutter_handbook",
    linkLabel: "Google Play",
  },
  {
    title: "Bijuli Bazzar",
    description:
      "Full-featured e-commerce app with real-time order tracking, push notifications, payment system, and admin dashboard.",
    tags: ["Flutter", "Riverpod", "Firebase", "Cloud Functions"],
    cover: null,
    link: "https://github.com/jagadishpoudel/Bijuli_Bazzar.git",
    linkLabel: "GitHub",
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
            <div
              key={project.title}
              className="project-card block bg-card rounded-xl border border-border group overflow-hidden hover:border-primary/30 transition-colors duration-300"
            >
              {project.cover && (
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={project.cover}
                    alt={`${project.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
