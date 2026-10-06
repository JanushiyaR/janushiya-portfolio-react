import FadeIn from "../components/FadeIn";
import { experience } from "../data/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-ink px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-[#3a3f45]" />
        {experience.map((job, i) => (
          <FadeIn key={job.role + job.period} delay={i * 0.1} y={20}>
            <div className="relative pl-8 sm:pl-10 pb-14 sm:pb-16 last:pb-0">
              <div className="absolute left-0 top-2 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full bg-[#BBCCD7] border-4 border-ink" />
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {job.period}
              </span>
              <h3 className="text-[#D7E2EA] font-semibold uppercase mt-1 mb-1 text-xl sm:text-2xl md:text-3xl">
                {job.role}
              </h3>
              <p className="text-[#D7E2EA]/60 font-light mb-4 text-sm sm:text-base">{job.company}</p>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-[#D7E2EA]/70 font-light leading-relaxed text-sm sm:text-base max-w-2xl"
                  >
                    -- {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
