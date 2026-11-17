import { journey, professionalSkills, skillGroups } from "../content";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading, Swatch } from "./ui";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="on-mat mat-grid px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading id="skills-title" title="Skills">
          <p className="t-label flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            <span className="flex items-center gap-2">
              <Swatch /> Working with
            </span>
            <span className="flex items-center gap-2">
              <Swatch dashed /> Learning
            </span>
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-x-10 gap-y-14 md:mt-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h3 className="t-label text-dim">Technical</h3>
            <dl className="mt-4 border-t border-rule">
              {skillGroups.map((group, i) => (
                <Reveal
                  key={group.name}
                  delay={i * 60}
                  className="grid gap-x-6 gap-y-3 border-b border-rule py-5 sm:grid-cols-[9rem_1fr] sm:items-center md:py-6"
                >
                  <dt className="text-xl font-bold tracking-[-0.02em]">{group.name}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill.name}
                          className={cn(
                            "flex h-10 items-center gap-2 rounded-full px-4 font-semibold",
                            skill.learning
                              ? "border-[1.5px] border-dashed border-paper/70 text-paper"
                              : "bg-paper text-ink",
                          )}
                        >
                          {skill.name}
                          {skill.learning && <span className="t-label text-sun">Learning</span>}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal className="lg:col-span-4" delay={150}>
            <h3 className="t-label text-dim">Professional</h3>
            <ul className="mt-4 border-t border-rule">
              {professionalSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-4 border-b border-rule py-4 text-xl font-bold tracking-[-0.02em] md:py-[1.0625rem]"
                >
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-sun" />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="on-paper px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading id="experience-title" title="Experience & education" />

        <ol className="mt-12 border-t border-rule md:mt-16">
          {journey.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 100}
              className="grid gap-x-10 gap-y-5 border-b border-rule py-8 md:py-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="t-label inline-flex rounded-full border border-rule px-3 py-1.5">{item.type}</p>
                <p className="t-label mt-4 text-dim">{item.when}</p>
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-balance text-[clamp(1.625rem,3vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg font-semibold text-dim">{item.place}</p>
                {item.points.length > 0 && (
                  <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-pretty">
                        <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-mat" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
