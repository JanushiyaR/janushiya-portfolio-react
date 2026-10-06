import FadeIn from "../components/FadeIn";
import { certifications } from "../data/content";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <h2
          className="text-ink font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Certifications
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <FadeIn key={cert.name} delay={i * 0.06} y={16}>
            <div
              className="rounded-2xl p-5 flex flex-col gap-1 h-full"
              style={{ border: "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <h3 className="text-ink font-medium leading-snug text-sm sm:text-base">{cert.name}</h3>
              <p className="text-ink/50 font-light text-xs uppercase tracking-wide">{cert.issuer}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
