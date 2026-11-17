import type { CSSProperties, ReactNode } from "react";
import { Swatch } from "./ui";

/**
 * The stack so far, drawn as three isometric slabs.
 * Solid = working with it today. Dashed = still learning.
 */

const CX = 190;
const A = 170; // half width of a slab on screen
const B = 85; // half height of its top face
const T = 28; // thickness
const HALF = 95; // half side of the top face in its own plane

const PAPER = "#eef0e4";
const INK = "#0b2219";
const SUN = "#ffd43b";
const SUN_LEFT = "#e2b521";
const SUN_RIGHT = "#bd940f";
const DEEP = "#092a20";

const dash = { stroke: PAPER, strokeWidth: 2, strokeDasharray: "7 6", strokeLinejoin: "round" } as const;
const title: CSSProperties = { fontWeight: 800, letterSpacing: "-0.035em" };
const note: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontWeight: 500,
  letterSpacing: "0.08em",
};

/** Maps a flat square onto the slab's top face. */
const plane = (cy: number) => `matrix(0.8944 0.4472 -0.8944 0.4472 ${CX} ${cy})`;

const leftFace = (cy: number) =>
  `${CX - A},${cy} ${CX},${cy + B} ${CX},${cy + B + T} ${CX - A},${cy + T}`;
const rightFace = (cy: number, from = 0, to = 1) => {
  // from/to run along the edge from the front corner (0) to the right corner (1)
  const x0 = CX + A * from;
  const y0 = cy + B - B * from;
  const x1 = CX + A * to;
  const y1 = cy + B - B * to;
  return `${x0},${y0} ${x1},${y1} ${x1},${y1 + T} ${x0},${y0 + T}`;
};

function Slab({ order, children }: { order: number; children: ReactNode }) {
  return (
    <g className="slab" style={{ "--i": order } as CSSProperties}>
      {children}
    </g>
  );
}

export function StackDiagram() {
  const database = 400;
  const backend = 250;
  const frontend = 100;

  return (
    <figure className="mx-auto w-full max-w-[520px]">
      <svg viewBox="0 0 420 540" className="block w-full overflow-visible" role="img" aria-labelledby="stack-title stack-desc">
        <title id="stack-title">My stack so far</title>
        <desc id="stack-desc">
          Three layers. Frontend: HTML, CSS, JavaScript and React, in use. Backend: Node.js and Express.js, learning.
          Database: MySQL in use, MongoDB learning.
        </desc>
        <defs>
          <pattern id="hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="9" stroke={PAPER} strokeOpacity="0.2" strokeWidth="2" />
          </pattern>
        </defs>

        <ellipse cx={CX} cy="500" rx="150" ry="26" fill={DEEP} opacity="0.7" />

        {/* Full-stack dimension line */}
        <g stroke={PAPER} strokeOpacity="0.5" strokeWidth="1.25" fill="none">
          <path d="M396 18v208M396 318v194M389 18h14M389 512h14" />
        </g>
        <text
          transform="rotate(90 392 272)"
          x="392"
          y="272"
          textAnchor="middle"
          fontSize="11"
          fill={PAPER}
          fillOpacity="0.8"
          style={note}
        >
          FULL STACK
        </text>

        {/* Database: MySQL in use, MongoDB learning */}
        <Slab order={0}>
          <polygon points={leftFace(database)} fill={SUN_LEFT} />
          <polygon points={rightFace(database, 0, 0.5)} fill={SUN_RIGHT} />
          <polygon points={rightFace(database, 0.5, 1)} fill={DEEP} fillOpacity="0.55" {...dash} />
          <g transform={plane(database)}>
            <rect x={-HALF} y={-HALF} width={HALF * 2} height={HALF} fill={DEEP} fillOpacity="0.55" />
            <rect x={-HALF} y={-HALF} width={HALF * 2} height={HALF} fill="url(#hatch)" {...dash} />
            <rect x={-HALF} y="0" width={HALF * 2} height={HALF} fill={SUN} />
            <text y="-28" textAnchor="middle" fontSize="11" fill={PAPER} style={note}>
              MONGODB · LEARNING
            </text>
            <text y="46" textAnchor="middle" fontSize="31" fill={INK} style={title}>
              Database
            </text>
            <text y="68" textAnchor="middle" fontSize="11" fill={INK} fillOpacity="0.8" style={note}>
              MYSQL
            </text>
          </g>
        </Slab>

        {/* Backend: learning */}
        <Slab order={1}>
          <polygon points={leftFace(backend)} fill={DEEP} fillOpacity="0.55" {...dash} />
          <polygon points={rightFace(backend)} fill={DEEP} fillOpacity="0.55" {...dash} />
          <g transform={plane(backend)}>
            <rect x={-HALF} y={-HALF} width={HALF * 2} height={HALF * 2} fill={DEEP} fillOpacity="0.55" />
            <rect x={-HALF} y={-HALF} width={HALF * 2} height={HALF * 2} fill="url(#hatch)" {...dash} />
            <text y="2" textAnchor="middle" fontSize="35" fill={PAPER} style={title}>
              Backend
            </text>
            <text y="26" textAnchor="middle" fontSize="11" fill={PAPER} fillOpacity="0.85" style={note}>
              NODE · EXPRESS · LEARNING
            </text>
          </g>
        </Slab>

        {/* Frontend: in use */}
        <Slab order={2}>
          <polygon points={leftFace(frontend)} fill={SUN_LEFT} />
          <polygon points={rightFace(frontend)} fill={SUN_RIGHT} />
          <g transform={plane(frontend)}>
            <rect x={-HALF} y={-HALF} width={HALF * 2} height={HALF * 2} fill={SUN} />
            <text y="2" textAnchor="middle" fontSize="35" fill={INK} style={title}>
              Frontend
            </text>
            <text y="26" textAnchor="middle" fontSize="11" fill={INK} fillOpacity="0.8" style={note}>
              HTML · CSS · JS · REACT
            </text>
          </g>
        </Slab>
      </svg>

      <figcaption className="t-label mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-dim">
        <span className="flex items-center gap-2">
          <Swatch /> Working with
        </span>
        <span className="flex items-center gap-2">
          <Swatch dashed /> Learning
        </span>
      </figcaption>
    </figure>
  );
}
