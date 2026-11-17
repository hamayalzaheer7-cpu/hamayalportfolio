import type { CSSProperties } from "react";
import { profile } from "../content";
import { StackDiagram } from "./StackDiagram";
import { ArrowDown, Reveal } from "./ui";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="on-mat mat-grid relative overflow-hidden px-5 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-x-10 gap-y-14 pb-14 lg:grid-cols-12 lg:pb-20">
        <div className="lg:col-span-7">
          <p className="rise t-label flex flex-wrap gap-x-3 gap-y-1 text-dim" style={delay(80)}>
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sun" />}
                {role}
              </span>
            ))}
          </p>

          <h1 className="mt-5 text-[clamp(4.25rem,11.5vw,10.5rem)] font-extrabold leading-[0.9] tracking-[-0.035em]">
            <span className="rise block" style={delay(160)}>
              {profile.firstName}
            </span>
            <span className="rise block text-sun" style={delay(260)}>
              {profile.lastName}
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-[36ch] text-pretty text-[clamp(1.25rem,1.9vw,1.625rem)] font-medium leading-[1.3] tracking-[-0.01em] md:mt-10"
            style={delay(380)}
          >
            {profile.intro}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={delay(480)}>
            <a href="#projects" className="btn btn-solid">
              See my projects <ArrowDown />
            </a>
            <a href="#contact" className="btn btn-line">
              Get in touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <StackDiagram />
        </div>
      </div>

      <div className="ruler mx-auto max-w-[1400px]" aria-hidden="true" />
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="on-paper px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-x-10 gap-y-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 id="about-title" className="t-label text-dim">
            About
          </h2>
          <p className="mt-6 text-pretty text-[clamp(1.75rem,3.4vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            {profile.about.lead}
          </p>
          <p className="mt-7 max-w-[60ch] text-pretty text-dim md:mt-9 md:text-lg">{profile.about.body}</p>
        </Reveal>

        <Reveal className="self-end lg:col-span-4 lg:col-start-9" delay={120}>
          <dl className="border-t border-rule">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-4">
                <dt className="t-label pt-1 text-dim">{fact.label}</dt>
                <dd className="font-semibold leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
