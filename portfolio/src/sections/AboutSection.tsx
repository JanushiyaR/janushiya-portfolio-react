import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";

function Corner({ className, delay, x }: { className: string; delay: number; x: number }) {
  return (
    <FadeIn delay={delay} x={x} y={0} duration={0.9} className={className}>
      <div className="w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] rounded-2xl border border-[#3a3f45] bg-gradient-to-br from-[#1a1a1a] to-[#0C0C0C]" />
    </FadeIn>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ overflowX: "clip" }}
    >
      <Corner className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]" delay={0.1} x={-80} />
      <Corner className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]" delay={0.25} x={-80} />
      <Corner className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]" delay={0.15} x={80} />
      <Corner className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]" delay={0.3} x={80} />

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 mt-10">
        <AnimatedText
          text="I am a fourth-year Information Technology undergraduate specialising in Data Science at SLIIT, with a CGPA of 3.46. I focus on building scalable data solutions -- from ETL pipelines and data warehousing to interactive dashboards that support decision-making."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />
        <ContactButton href="#contact" />
      </div>
    </section>
  );
}
