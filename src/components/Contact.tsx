import { useEffect, useRef, useState, type ReactNode } from "react";
import { profile } from "../content";
import { ArrowUpRight, CheckIcon, CopyIcon, Reveal } from "./ui";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Older browsers and locked-down frames: fall back to a hidden field.
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    field.remove();
    return ok;
  }
}

const valueClass =
  "min-w-0 text-[clamp(1.15rem,2.3vw,2.25rem)] font-bold leading-tight tracking-[-0.025em] [overflow-wrap:anywhere] underline decoration-transparent decoration-2 underline-offset-[0.18em] transition-[text-decoration-color] duration-200 hover:decoration-current";

const actionClass =
  "grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-ink/30 transition-colors duration-200";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <li className="grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-1 border-b border-rule py-4 md:grid-cols-[8rem_1fr_auto] md:py-5 lg:grid-cols-[1fr_auto]">
      <span className="t-label col-span-2 text-dim md:col-span-1 lg:col-span-2">{label}</span>
      {children}
    </li>
  );
}

export function Contact() {
  const [copied, setCopied] = useState<"" | "Email address" | "Phone number" | "failed">("");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async (what: "Email address" | "Phone number", text: string) => {
    const ok = await copyText(text);
    setCopied(ok ? what : "failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(""), 2400);
  };

  const copyButton = (what: "Email address" | "Phone number", text: string) => (
    <button
      type="button"
      onClick={() => copy(what, text)}
      aria-label={`Copy ${what.toLowerCase()}`}
      title={`Copy ${what.toLowerCase()}`}
      className={`${actionClass} hover:bg-ink hover:text-sun active:scale-90`}
    >
      {copied === what ? <CheckIcon /> : <CopyIcon />}
    </button>
  );

  const name = `${profile.firstName} ${profile.lastName}`;

  return (
    <section id="contact" aria-labelledby="contact-title" className="on-sun px-5 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 id="contact-title" className="t-h2 text-balance">
              Let's build something useful.
            </h2>
            <p className="mt-7 max-w-[40ch] text-pretty text-lg font-medium leading-snug md:text-xl">
              {profile.objective}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <ul className="border-t border-rule">
              <Row label="Email">
                <a href={`mailto:${profile.email}`} className={valueClass}>
                  {profile.email}
                </a>
                {copyButton("Email address", profile.email)}
              </Row>
              <Row label="Phone">
                <a href={`tel:${profile.phone.tel}`} className={valueClass}>
                  {profile.phone.display}
                </a>
                {copyButton("Phone number", profile.phone.copy)}
              </Row>
              <Row label="LinkedIn">
                <a href={profile.linkedin.href} target="_blank" rel="noreferrer" className={`${valueClass} peer`}>
                  {profile.linkedin.display}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span aria-hidden="true" className={`${actionClass} peer-hover:bg-ink peer-hover:text-sun`}>
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Row>
              <Row label="GitHub">
                <a href={profile.github.href} target="_blank" rel="noreferrer" className={`${valueClass} peer`}>
                  {profile.github.display}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span aria-hidden="true" className={`${actionClass} peer-hover:bg-ink peer-hover:text-sun`}>
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Row>
            </ul>
            <p role="status" className="t-label mt-4 min-h-[1.35em]">
              {copied === "failed" && "Could not copy. Please select the text instead."}
              {copied && copied !== "failed" && `${copied} copied`}
            </p>
          </Reveal>
        </div>

        <footer className="mt-16 md:mt-24">
          <div className="ruler" aria-hidden="true" />
          <div className="t-label flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-4">
            <p>
              © {new Date().getFullYear()} {name}
            </p>
            <a href="#top" className="-my-2 flex h-11 items-center underline decoration-ink/40 underline-offset-4 hover:decoration-ink">
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
