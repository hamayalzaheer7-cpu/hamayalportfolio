import { profile, projects, type Project } from "../content";
import { cn } from "../utils/cn";
import { Sketch } from "./sketches";
import { ArrowUpRight, CheckIcon, Reveal, SectionHeading, Swatch } from "./ui";

function TechList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul aria-label="Technologies" className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item} className="t-label rounded-full border border-rule px-3 py-1.5">
          {item}
        </li>
      ))}
    </ul>
  );
}

function BuiltCard({ project }: { project: Project }) {
  return (
    <article className="on-mat flex h-full flex-col overflow-hidden rounded-[28px]">
      <div className="mat-grid aspect-[16/10] border-b border-rule p-4 sm:p-6">
        <Sketch id={project.sketch} />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="t-label flex items-center gap-2 rounded-full bg-sun px-3 py-1.5 text-ink">
            <CheckIcon className="h-3.5 w-3.5" /> Built
          </span>
          <span className="t-label text-dim">{project.kind}</span>
        </div>
        <h3 className="mt-6 text-balance text-[clamp(1.875rem,3.2vw,2.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          {project.title}
        </h3>
        <p className="mt-4 max-w-[48ch] text-pretty text-dim">{project.description}</p>
        <ul aria-label="Features" className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 font-semibold">
              <Swatch /> {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <TechList items={project.tech} className="border-t border-rule pt-5" />
        </div>
      </div>
    </article>
  );
}

function ProposedCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border-2 border-dashed border-ink/35 p-3 transition-colors duration-300 hover:border-ink/70 sm:grid sm:grid-cols-[2fr_3fr] sm:gap-3 lg:flex">
      <div className="aspect-[16/10] rounded-[18px] bg-paper-2 p-4 sm:aspect-auto sm:min-h-52 lg:aspect-[16/10] lg:min-h-0">
        <Sketch id={project.sketch} />
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:pt-4 lg:pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="t-label rounded-full border-[1.5px] border-dashed border-ink/60 px-3 py-1.5">Proposed</span>
          <span className="t-label text-dim">{project.kind}</span>
        </div>
        <h3 className="mt-5 text-balance text-[1.625rem] font-extrabold leading-[1.05] tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="mt-3 text-pretty text-dim">{project.description}</p>
        <p className="t-label mt-6 text-dim">Planned</p>
        <ul aria-label="Planned features" className="mt-3 space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 font-semibold">
              <Swatch dashed /> {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <TechList items={project.tech} className="border-t border-rule pt-5" />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const built = projects.filter((p) => p.status === "built");
  const proposed = projects.filter((p) => p.status === "proposed");

  return (
    <section id="projects" aria-labelledby="projects-title" className="on-paper px-5 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto max-w-[1400px] border-t border-rule pt-16 md:pt-24">
        <SectionHeading id="projects-title" title="Projects">
          <p>
            {built.length} built so far, {proposed.length} more on the drawing board.
          </p>
        </SectionHeading>

        <h3 className="t-label mt-12 flex items-center gap-2.5 md:mt-16">
          <Swatch /> Built <span className="text-dim">/ {String(built.length).padStart(2, "0")}</span>
        </h3>
        <ul className="mt-5 grid gap-5 md:gap-6 lg:grid-cols-2">
          {built.map((project, i) => (
            <Reveal as="li" key={project.id} delay={i * 120}>
              <BuiltCard project={project} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-2 md:mt-24 md:flex-row md:items-baseline md:justify-between">
          <h3 className="t-label flex items-center gap-2.5">
            <Swatch dashed /> On the drawing board{" "}
            <span className="text-dim">/ {String(proposed.length).padStart(2, "0")}</span>
          </h3>
          <p className="text-dim">Project proposals I have planned out. Not built yet.</p>
        </div>
        <ul className="mt-5 grid gap-5 md:gap-6 lg:grid-cols-3">
          {proposed.map((project, i) => (
            <Reveal as="li" key={project.id} delay={i * 100}>
              <ProposedCard project={project} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 md:mt-16">
          <a
            href={profile.github.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-paper-2 px-6 py-6 transition-colors duration-300 hover:bg-sun md:px-8"
          >
            <span className="text-[clamp(1.25rem,2.4vw,1.875rem)] font-bold tracking-[-0.02em]">
              See what I'm working on over on GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <span className="t-label flex items-center gap-2">
              {profile.github.display}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
