import FadeIn from "../components/FadeIn";
import { education } from "../data/content";

export default function EducationSection() {
  return (
    <section id="education" className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="text-ink font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, i) => (
          <FadeIn key={item.degree} delay={i * 0.1} x={-16} y={0}>
            <div
              className="h-full rounded-[28px] p-6 sm:p-7 flex flex-col gap-3"
              style={{ border: "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span className="text-ink/40 uppercase tracking-widest text-xs font-medium">
                {item.period}
              </span>
              <h3 className="text-ink font-semibold leading-snug text-lg sm:text-xl">
                {item.degree}
              </h3>
              <p className="text-ink/60 font-light text-sm">{item.school}</p>
              <p className="text-ink/50 font-light text-xs mt-auto pt-3" style={{ borderTop: "1px solid rgba(12,12,12,0.1)" }}>
                {item.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
