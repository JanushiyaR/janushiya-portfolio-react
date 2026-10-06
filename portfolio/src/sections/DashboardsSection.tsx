import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { dashboards } from "../data/content";

export default function DashboardsSection() {
  return (
    <section id="dashboards" className="bg-ink px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Dashboards
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboards.map((d, i) => (
          <FadeIn key={d.title} delay={i * 0.1} y={20}>
            <div className="flex flex-col h-full rounded-[28px] border border-[#3a3f45] overflow-hidden">
              <div className="h-[140px] bg-gradient-to-br from-[#2b1055] to-[#0C0C0C]" />
              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-[#D7E2EA] font-semibold text-lg leading-snug">{d.title}</h3>
                <p className="text-[#D7E2EA]/60 font-light text-sm leading-relaxed flex-1">
                  {d.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[#D7E2EA]/70 text-xs uppercase tracking-wide border border-[#3a3f45] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <LiveProjectButton label="View Dashboard" href={d.link} />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
