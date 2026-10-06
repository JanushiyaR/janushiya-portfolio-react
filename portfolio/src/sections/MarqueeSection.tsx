import { useEffect, useRef, useState } from "react";

const row1Tools = [
  "Python", "SQL", "Power BI", "Azure Data Factory", "Tableau", "Pandas", "Spark",
];
const row2Tools = [
  "Snowflake", "Azure Fabric", "Scikit-learn", "React", "Flask", "Excel",
];

function Tile({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div
      className="flex-shrink-0 w-[260px] h-[170px] sm:w-[360px] sm:h-[230px] md:w-[420px] md:h-[270px] rounded-2xl flex items-center justify-center"
      style={{ background: gradient }}
    >
      <span className="text-white font-semibold uppercase tracking-wider text-lg sm:text-2xl">
        {label}
      </span>
    </div>
  );
}

const gradients = [
  "linear-gradient(135deg, #18011F, #B600A8)",
  "linear-gradient(135deg, #7621B0, #BE4C00)",
  "linear-gradient(135deg, #0C0C0C, #3a3f45)",
  "linear-gradient(135deg, #1a2a3a, #4a6fa5)",
  "linear-gradient(135deg, #2b1055, #7597de)",
  "linear-gradient(135deg, #3a0d12, #a31621)",
  "linear-gradient(135deg, #1f3d2b, #2e8b57)",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const val = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(val);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = [...row1Tools, ...row1Tools, ...row1Tools];
  const row2 = [...row2Tools, ...row2Tools, ...row2Tools];

  return (
    <section ref={sectionRef} className="bg-ink pt-24 sm:pt-32 md:pt-40 pb-10" style={{ overflowX: "clip" }}>
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
      >
        {row1.map((label, i) => (
          <Tile key={`r1-${i}`} label={label} gradient={gradients[i % gradients.length]} />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
      >
        {row2.map((label, i) => (
          <Tile key={`r2-${i}`} label={label} gradient={gradients[(i + 3) % gradients.length]} />
        ))}
      </div>
    </section>
  );
}
