import { useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0)");
  const [active, setActive] = useState(false);

  const handleMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const reach = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < reach) {
      setActive(true);
      setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0)`);
    } else {
      setActive(false);
      setTransform("translate3d(0px, 0px, 0)");
    }
  };

  const handleLeave = () => {
    setActive(false);
    setTransform("translate3d(0px, 0px, 0)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform,
        willChange: "transform",
        transition: active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
