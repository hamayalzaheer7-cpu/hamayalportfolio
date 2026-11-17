import type { ReactNode } from "react";
import type { SketchId } from "../content";

/**
 * Schematic drawings of each project's main screens.
 * Built projects are drawn solid on the mat; proposed ones are dashed
 * pencil sketches on paper. They are diagrams, not screenshots.
 */

const PAPER = "#eef0e4";
const SUN = "#ffd43b";
const INK = "#0b2219";
const GREEN = "#0d3b2d";

function Canvas({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 400 250" className="block h-full w-full" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

const solid = { fill: "none", stroke: PAPER, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const pencil = {
  fill: "none",
  stroke: GREEN,
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Shop() {
  const cards = [28, 150, 272];
  return (
    <Canvas>
      <g {...solid}>
        <rect x="28" y="24" width="18" height="18" rx="5" fill={SUN} stroke="none" />
        <path d="M60 33h34M106 33h26M144 33h26" strokeOpacity="0.45" />
        <path d="M330 27h7l6 20h19l5-14h-27" />
        <circle cx="346" cy="54" r="1.500" />
        <circle cx="359" cy="54" r="1.500" />
        <circle cx="374" cy="24" r="10" fill={SUN} stroke="none" />
        <text x="374" y="28.500" fontSize="12" textAnchor="middle" fill={INK} stroke="none" style={{ fontWeight: 800 }}>
          2
        </text>
        {cards.map((x, i) => (
          <g key={x}>
            <rect x={x} y="72" width="100" height="154" rx="12" />
            <rect
              x={x + 9}
              y="81"
              width="82"
              height="70"
              rx="7"
              fill={i === 0 ? SUN : PAPER}
              fillOpacity={i === 0 ? 1 : 0.14}
              stroke="none"
            />
            <path d={`M${x + 10} 167h56`} />
            <path d={`M${x + 10} 180h34`} strokeOpacity="0.45" />
            <rect
              x={x + 9}
              y="195"
              width="82"
              height="22"
              rx="11"
              fill={i === 0 ? PAPER : "none"}
              strokeOpacity={i === 0 ? 1 : 0.6}
            />
            <path d={`M${x + 45} 206h10M${x + 50} 201v10`} stroke={i === 0 ? INK : PAPER} strokeOpacity={i === 0 ? 1 : 0.6} />
          </g>
        ))}
      </g>
    </Canvas>
  );
}

function Finance() {
  const rows = [134, 170, 206];
  const bars = [
    { x: 228, h: 58 },
    { x: 266, h: 108, on: true },
    { x: 304, h: 78 },
    { x: 342, h: 128 },
  ];
  return (
    <Canvas>
      <g {...solid}>
        <rect x="28" y="24" width="172" height="82" rx="12" fill={SUN} stroke="none" />
        <path d="M46 48h44" stroke={INK} strokeOpacity="0.5" strokeWidth="3" />
        <path d="M48 78h100" stroke={INK} strokeWidth="11" />

        {rows.map((y, i) => (
          <g key={y}>
            <circle cx="40" cy={y} r="9" fill={i === 0 ? PAPER : "none"} />
            <path d={`M60 ${y - 4}h72`} />
            <path d={`M60 ${y + 6}h40`} strokeOpacity="0.45" />
            <path d={`M166 ${y}h34`} strokeOpacity="0.85" />
            {i < 2 && <path d={`M28 ${y + 18}h172`} strokeOpacity="0.18" strokeWidth="1" />}
          </g>
        ))}

        <rect x="228" y="24" width="68" height="30" rx="15" />
        <path d="M246 44V34m-4 4 4-4 4 4M260 39h22" />
        <rect x="302" y="24" width="68" height="30" rx="15" fill={PAPER} fillOpacity="0.14" />
        <path d="M320 34v10m-4-4 4 4 4-4M334 39h22" />

        <path d="M222 224h154" strokeOpacity="0.5" />
        {bars.map((b) => (
          <rect
            key={b.x}
            x={b.x}
            y={224 - b.h}
            width="28"
            height={b.h}
            rx="5"
            fill={b.on ? SUN : PAPER}
            fillOpacity={b.on ? 1 : 0.14}
            stroke={b.on ? "none" : PAPER}
          />
        ))}
      </g>
    </Canvas>
  );
}

function Estate() {
  const cards = [28, 206];
  return (
    <Canvas>
      <g {...pencil}>
        <g className="ants" strokeDasharray="5 5">
          <rect x="28" y="24" width="250" height="36" rx="18" />
          <rect x="288" y="24" width="84" height="36" rx="18" />
          {cards.map((x) => (
            <g key={x}>
              <rect x={x} y="80" width="166" height="146" rx="12" />
              <path d={`M${x + 51} ${136}l32-28 32 28`} />
              <rect x={x + 59} y="136" width="48" height="36" />
              <path d={`M${x + 16} 192h78M${x + 16} 206h46`} />
              <rect x={x + 112} y="190" width="40" height="20" rx="10" />
            </g>
          ))}
        </g>
        <circle cx="48" cy="41" r="6" />
        <path d="m52.500 45.500 5 5" />
        <path d="M68 42h88" strokeOpacity="0.45" />
        <path d="M304 36h52M304 48h52" strokeOpacity="0.6" />
        <circle cx="320" cy="36" r="3.500" fill={PAPER} />
        <circle cx="342" cy="48" r="3.500" fill={PAPER} />
        <path d="M356 86c0 11-13 24-13 24s-13-13-13-24a13 13 0 0 1 26 0z" fill={SUN} />
        <circle cx="343" cy="86" r="4" fill={PAPER} />
      </g>
    </Canvas>
  );
}

function Lms() {
  const rows = [
    { y: 24, w: 112 },
    { y: 96, w: 62 },
    { y: 168, w: 22 },
  ];
  return (
    <Canvas>
      <g {...pencil}>
        <g className="ants" strokeDasharray="5 5">
          {rows.map((r) => (
            <g key={r.y}>
              <rect x="28" y={r.y} width="232" height="58" rx="12" />
              <rect x="90" y={r.y + 35} width="154" height="8" rx="4" />
            </g>
          ))}
          <circle cx="324" cy="84" r="44" />
          <circle cx="324" cy="176" r="12" />
          <path d="M298 226c0-17 11-28 26-28s26 11 26 28" />
        </g>
        {rows.map((r, i) => (
          <g key={r.y}>
            <rect x="38" y={r.y + 10} width="38" height="38" rx="7" fill={i === 0 ? SUN : "none"} />
            <path d={`M90 ${r.y + 21}h${i === 1 ? 70 : 92}`} />
            <rect x="90" y={r.y + 35} width={r.w} height="8" rx="4" fill={GREEN} fillOpacity="0.3" stroke="none" />
          </g>
        ))}
        <circle
          cx="324"
          cy="84"
          r="44"
          strokeWidth="6"
          strokeDasharray="166 277"
          transform="rotate(-90 324 84)"
          strokeLinecap="butt"
        />
        <path d="m310 84 10 10 18-20" />
      </g>
    </Canvas>
  );
}

function Booking() {
  const slots = [24, 68, 112, 156];
  const days: ReactNode[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 7; c++) {
      const cx = 52 + c * 29;
      const cy = 88 + r * 34;
      const picked = r === 1 && c === 3;
      days.push(
        picked ? (
          <circle key={`${r}-${c}`} cx={cx} cy={cy} r="12" fill={SUN} />
        ) : (
          <circle key={`${r}-${c}`} cx={cx} cy={cy} r="2.500" fill={GREEN} fillOpacity="0.55" stroke="none" />
        ),
      );
    }
  }
  return (
    <Canvas>
      <g {...pencil}>
        <g className="ants" strokeDasharray="5 5">
          <rect x="28" y="24" width="222" height="202" rx="12" />
          <path d="M28 62h222" />
          {slots.map((y, i) => i !== 1 && <rect key={y} x="268" y={y} width="104" height="34" rx="17" />)}
          <rect x="268" y="200" width="104" height="26" rx="13" />
        </g>
        <path d="M44 43h62" />
        <path d="m216 38-5 5 5 5M228 38l5 5-5 5" />
        {days}
        <rect x="268" y="68" width="104" height="34" rx="17" fill={SUN} />
        {slots.map((y) => (
          <g key={y}>
            <circle cx="287" cy={y + 17} r="5" fill={PAPER} />
            <path d={`M301 ${y + 17}h52`} strokeOpacity="0.7" />
          </g>
        ))}
        <path d="M302 213h36" strokeOpacity="0.7" />
      </g>
    </Canvas>
  );
}

const sketches: Record<SketchId, () => ReactNode> = {
  shop: Shop,
  finance: Finance,
  estate: Estate,
  lms: Lms,
  booking: Booking,
};

export function Sketch({ id }: { id: SketchId }) {
  const Art = sketches[id];
  return <Art />;
}
