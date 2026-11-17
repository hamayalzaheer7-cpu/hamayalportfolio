import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "../utils/cn";

/** Fades content up the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", shown && "is-in", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  const key = ids.join(",");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of key.split(",")) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [key]);

  return active;
}

/** The site's key: solid = built / in use, dashed = proposed / learning. */
export function Swatch({ dashed = false, className }: { dashed?: boolean; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-3.5 w-3.5 shrink-0 rounded-[4px]",
        dashed ? "border-[1.5px] border-dashed border-current" : "bg-sun ring-1 ring-inset ring-ink/15",
        className,
      )}
    />
  );
}

export function SectionHeading({ id, title, children }: { id: string; title: string; children?: ReactNode }) {
  return (
    <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
      <h2 id={id} className="t-h2">
        {title}
      </h2>
      {children && <div className="max-w-[38ch] text-dim md:pb-2 md:text-right">{children}</div>}
    </Reveal>
  );
}

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ArrowDown({ className }: IconProps) {
  return (
    <svg {...base} className={cn("h-[1.1em] w-[1.1em]", className)}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={cn("h-[1.1em] w-[1.1em]", className)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function CopyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={cn("h-5 w-5", className)}>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M5 15V6.500A2.500 2.500 0 0 1 7.500 4H15" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={cn("h-5 w-5", className)}>
      <path d="m5 12.500 4.500 4.500L19 7.500" />
    </svg>
  );
}
