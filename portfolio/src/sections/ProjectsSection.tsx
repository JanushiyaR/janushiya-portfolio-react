import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { projects } from "../data/content";

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="sticky h-[85vh]"
      style={{ top: `${6 + index * 1.75}rem` }}
    >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-ink p-4 sm:p-6 md:p-8 h-full flex flex-col"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-start gap-4">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.num}
            </span>
            <div className="pt-2 sm:pt-4">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold uppercase text-xl sm:text-2xl md:text-3xl leading-tight mt-1">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        <p className="text-[#D7E2EA]/60 font-light leading-relaxed max-w-2xl mb-4 sm:mb-6 text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex-1 flex gap-3 sm:gap-4 min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%]">
            <div
              className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-gradient-to-br from-[#2a2f36] to-[#0C0C0C] border border-[#3a3f45]"
              style={{ height: "clamp(100px, 16vw, 190px)" }}
            />
            <div
              className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-gradient-to-br from-[#1a2a3a] to-[#0C0C0C] border border-[#3a3f45] flex-1"
              style={{ minHeight: "clamp(120px, 20vw, 260px)" }}
            />
          </div>
          <div
            className="rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-gradient-to-br from-[#2b1055] to-[#0C0C0C] border border-[#3a3f45] w-[60%]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
