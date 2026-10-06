interface LiveProjectButtonProps {
  label?: string;
  href?: string;
}

export default function LiveProjectButton({ label = "Live Project", href = "#" }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 whitespace-nowrap"
    >
      {label}
    </a>
  );
}
