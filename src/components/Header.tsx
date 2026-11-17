import { useEffect, useRef, useState, type CSSProperties } from "react";
import { nav, profile } from "../content";
import { cn } from "../utils/cn";
import { useActiveSection } from "./ui";

const sectionIds = ["top", ...nav.map((item) => item.id)];

export function Header() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header ref={rootRef} className="on-mat fixed inset-x-0 top-3 z-40 bg-transparent px-3 md:top-4">
      <a
        href="#projects"
        className="sr-only rounded-full bg-sun font-semibold text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-16 focus:z-10 focus:px-5 focus:py-3"
      >
        Skip to projects
      </a>

      <div className="mx-auto flex h-14 max-w-[46rem] items-center justify-between gap-2 rounded-full border border-paper/15 bg-mat-deep/90 pl-5 pr-2 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.5)] backdrop-blur-md">
        <a href="#top" className="-ml-2 flex h-11 items-center px-2 text-lg font-extrabold tracking-tight">
          {profile.firstName}
          <span className="text-sun">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "flex h-10 items-center rounded-full px-3.5 text-[0.9375rem] font-medium transition-colors duration-200",
                    active === item.id ? "bg-paper/10 text-sun" : "text-paper/80 hover:text-paper",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="hidden h-10 items-center rounded-full bg-sun px-4 text-[0.9375rem] font-semibold text-ink transition-colors duration-200 hover:bg-paper active:scale-95 md:flex"
        >
          Email me
        </a>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 items-center gap-2.5 rounded-full bg-paper/10 px-4 text-[0.9375rem] font-semibold md:hidden"
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true" className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-4 rounded bg-current transition-transform duration-300 ease-out-expo",
                open ? "top-[5px] rotate-45" : "top-0.5",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-4 rounded bg-current transition-transform duration-300 ease-out-expo",
                open ? "top-[5px] -rotate-45" : "top-2",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="mx-auto mt-2 max-w-[46rem] rounded-[28px] border border-paper/15 bg-mat-deep p-3 shadow-[0_20px_40px_-12px_rgb(0_0_0/0.6)] md:hidden"
      >
        <nav aria-label="Menu">
          <ul>
            {nav.map((item, i) => (
              <li key={item.id} className="rise" style={{ "--d": `${i * 40}ms` } as CSSProperties}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex h-14 items-center justify-between rounded-2xl px-4 text-2xl font-bold tracking-tight",
                    active === item.id ? "bg-paper/10 text-sun" : "active:bg-paper/10",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`mailto:${profile.email}`} className="btn btn-solid mt-3 w-full justify-center">
          Email me
        </a>
      </div>
    </header>
  );
}
