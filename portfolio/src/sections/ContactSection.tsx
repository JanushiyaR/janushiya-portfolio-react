import FadeIn from "../components/FadeIn";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-10 sm:mb-14"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Let&apos;s build
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/70 font-light text-center max-w-xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
          I am open to junior roles and freelance opportunities in data engineering,
          analytics, and related fields. If you want to connect or discuss how I could
          contribute, reach out below.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border border-[#3a3f45] rounded-xl px-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 outline-none focus:border-[#D7E2EA] transition-colors"
          />
          <input
            type="email"
            placeholder="you@example.com"
            className="bg-transparent border border-[#3a3f45] rounded-xl px-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 outline-none focus:border-[#D7E2EA] transition-colors"
          />
          <textarea
            placeholder="Tell me about your project or opportunity..."
            rows={4}
            className="bg-transparent border border-[#3a3f45] rounded-xl px-5 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 outline-none focus:border-[#D7E2EA] transition-colors resize-none"
          />
          <button
            type="submit"
            className="rounded-full px-10 py-3.5 text-white font-medium uppercase tracking-widest transition-transform hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }}
          >
            Send Message
          </button>
        </form>
      </FadeIn>

      <p className="text-center text-[#D7E2EA]/30 text-xs mt-16">
        © 2026 Janushiya Rajakumar. Built with care.
      </p>
    </section>
  );
}
