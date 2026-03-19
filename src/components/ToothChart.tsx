import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mouthChart from "@/assets/mouth-chart.png";

interface ToothInfo {
  id: number;
  name: string;
  type: string;
  eruption: string;
  tip: string;
  cx: number; // % of image width
  cy: number; // % of image height
  rx: number;
  ry: number;
}

/**
 * Coordinates are expressed as % of the PNG's pixel dimensions.
 * Image is ~1000×1040px. Mouth oval is centered; the white teeth
 * are mapped by visual inspection of the illustration.
 *
 * Viewer orientation: top = upper jaw, left = patient's right.
 */
const teeth: ToothInfo[] = [
  // ── Upper jaw ──────────────────────────────────────────────
  { id: 1,  name: "Upper Right Second Molar",    type: "Molar",   eruption: "24–30 months", tip: "Last baby teeth to arrive. Begin regular dental visits.",           cx: 27, cy: 31, rx: 5,   ry: 4.5 },
  { id: 2,  name: "Upper Right First Molar",     type: "Molar",   eruption: "12–16 months", tip: "Flat surfaces for chewing. Watch for cavities in grooves.",         cx: 32, cy: 23, rx: 4.5, ry: 4   },
  { id: 3,  name: "Upper Right Canine",          type: "Canine",  eruption: "16–20 months", tip: "These sharp teeth help tear food. Keep gums clean.",                cx: 35, cy: 20, rx: 3.5, ry: 3.5 },
  { id: 4,  name: "Upper Right Lateral Incisor", type: "Incisor", eruption: "8–12 months",  tip: "Start using a tiny smear of fluoride toothpaste.",                  cx: 41, cy: 14, rx: 3.5, ry: 3   },
  { id: 5,  name: "Upper Right Central Incisor", type: "Incisor", eruption: "6–8 months",   tip: "First to appear! Clean with a soft cloth after feeding.",           cx: 46, cy: 13, rx: 3.5, ry: 3   },
  { id: 6,  name: "Upper Left Central Incisor",  type: "Incisor", eruption: "6–8 months",   tip: "First to appear! Clean with a soft cloth after feeding.",           cx: 54, cy: 13, rx: 3.5, ry: 3   },
  { id: 7,  name: "Upper Left Lateral Incisor",  type: "Incisor", eruption: "8–12 months",  tip: "Start using a tiny smear of fluoride toothpaste.",                  cx: 59, cy: 14, rx: 3.5, ry: 3   },
  { id: 8,  name: "Upper Left Canine",           type: "Canine",  eruption: "16–20 months", tip: "These sharp teeth help tear food. Keep gums clean.",                cx: 65, cy: 20, rx: 3.5, ry: 3.5 },
  { id: 9,  name: "Upper Left First Molar",      type: "Molar",   eruption: "12–16 months", tip: "Flat surfaces for chewing. Watch for cavities in grooves.",         cx: 69, cy: 23, rx: 4.5, ry: 4   },
  { id: 10, name: "Upper Left Second Molar",     type: "Molar",   eruption: "24–30 months", tip: "Last baby teeth to arrive. Begin regular dental visits.",           cx: 73, cy: 31, rx: 5,   ry: 4.5 },

  // ── Lower jaw ──────────────────────────────────────────────
  { id: 11, name: "Lower Right Second Molar",    type: "Molar",   eruption: "20–30 months", tip: "Complete set! Schedule a checkup to celebrate.",                    cx: 27, cy: 73, rx: 5,   ry: 4.5 },
  { id: 12, name: "Lower Right First Molar",     type: "Molar",   eruption: "12–16 months", tip: "Start brushing with a grain-of-rice amount of toothpaste.",        cx: 32, cy: 79, rx: 4.5, ry: 4   },
  { id: 13, name: "Lower Right Canine",          type: "Canine",  eruption: "16–20 months", tip: "Important for guiding the jaw during chewing.",                     cx: 36, cy: 83, rx: 3.5, ry: 3.5 },
  { id: 14, name: "Lower Right Lateral Incisor", type: "Incisor", eruption: "7–10 months",  tip: "Teething discomfort is normal. Use a chilled teething ring.",       cx: 42, cy: 87, rx: 3.5, ry: 3   },
  { id: 15, name: "Lower Right Central Incisor", type: "Incisor", eruption: "5–7 months",   tip: "Usually the very first tooth! Expect some drooling.",               cx: 47, cy: 89, rx: 3.5, ry: 3   },
  { id: 16, name: "Lower Left Central Incisor",  type: "Incisor", eruption: "5–7 months",   tip: "Usually the very first tooth! Expect some drooling.",               cx: 53, cy: 89, rx: 3.5, ry: 3   },
  { id: 17, name: "Lower Left Lateral Incisor",  type: "Incisor", eruption: "7–10 months",  tip: "Teething discomfort is normal. Use a chilled teething ring.",       cx: 58, cy: 87, rx: 3.5, ry: 3   },
  { id: 18, name: "Lower Left Canine",           type: "Canine",  eruption: "16–20 months", tip: "Important for guiding the jaw during chewing.",                     cx: 64, cy: 83, rx: 3.5, ry: 3.5 },
  { id: 19, name: "Lower Left First Molar",      type: "Molar",   eruption: "12–16 months", tip: "Start brushing with a grain-of-rice amount of toothpaste.",        cx: 68, cy: 79, rx: 4.5, ry: 4   },
  { id: 20, name: "Lower Left Second Molar",     type: "Molar",   eruption: "20–30 months", tip: "Complete set! Schedule a checkup to celebrate.",                    cx: 73, cy: 73, rx: 5,   ry: 4.5 },
];

const typeColors: Record<string, string> = {
  Incisor: "hsl(var(--primary))",
  Canine:  "hsl(var(--primary) / 0.75)",
  Molar:   "hsl(var(--primary) / 0.55)",
};

const ToothChart = () => {
  const [hovered,  setHovered]  = useState<ToothInfo | null>(null);
  const [selected, setSelected] = useState<ToothInfo | null>(null);

  return (
    <div className="glass-card mx-auto w-full max-w-3xl space-y-5 p-4 md:p-6 xl:p-8">

      {/* ── Image + SVG overlay ─────────────────────────── */}
      <div className="relative mx-auto w-full max-w-[42rem]" style={{ aspectRatio: "1 / 1" }}>
        <img
          src={mouthChart}
          alt="Mouth illustration showing primary teeth"
          className="w-full h-full object-fill rounded-xl"
          draggable={false}
        />

        {/*
          The SVG viewBox exactly matches the image's coordinate space (100×100).
          preserveAspectRatio="none" makes it stretch to fill the same box as the
          <img>, so cx/cy percentages map 1-to-1 to pixel positions in the image.
        */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          style={{ cursor: "pointer" }}
        >
          <defs>
            <filter id="tooth-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {teeth.map((tooth) => {
            const isHovered  = hovered?.id  === tooth.id;
            const isSelected = selected?.id === tooth.id;
            const active     = isHovered || isSelected;

            return (
              <g key={tooth.id}>
                {/* Larger invisible hit-area */}
                <ellipse
                  cx={tooth.cx} cy={tooth.cy}
                  rx={tooth.rx + 2} ry={tooth.ry + 2}
                  fill="transparent"
                  onMouseEnter={() => setHovered(tooth)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setSelected(selected?.id === tooth.id ? null : tooth)}
                />

                {/* Visible highlight */}
                <motion.ellipse
                  cx={tooth.cx} cy={tooth.cy}
                  rx={tooth.rx} ry={tooth.ry}
                  fill={
                    isSelected ? "rgba(228,27,35,0.38)"
                    : isHovered ? "rgba(228,27,35,0.22)"
                    : "transparent"
                  }
                  stroke={active ? "#e41b23" : "transparent"}
                  strokeWidth={isSelected ? 0.7 : 0.45}
                  filter={active ? "url(#tooth-glow)" : undefined}
                  animate={{ scale: isHovered && !isSelected ? [1, 1.07, 1] : 1 }}
                  transition={{ duration: 0.7, repeat: isHovered && !isSelected ? Infinity : 0 }}
                  style={{
                    transformOrigin: `${tooth.cx}% ${tooth.cy}%`,
                    pointerEvents: "none",
                  }}
                />

                {/* Pulse ring on hover */}
                <AnimatePresence>
                  {isHovered && !isSelected && (
                    <motion.ellipse
                      key="pulse"
                      cx={tooth.cx} cy={tooth.cy}
                      rx={tooth.rx} ry={tooth.ry}
                      fill="none"
                      stroke="#e41b23"
                      strokeWidth={0.3}
                      initial={{ opacity: 0.7, scale: 1 }}
                      animate={{ opacity: 0,   scale: 1.7 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      style={{
                        transformOrigin: `${tooth.cx}% ${tooth.cy}%`,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </svg>

        {/* Floating tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.id}
              initial={{ opacity: 0, y: -5, scale: 0.92 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: -4, scale: 0.92 }}
              transition={{ duration: 0.15 }}
              className="absolute z-20 pointer-events-none"
              style={{
                left: `${hovered.cx}%`,
                top: hovered.cy < 50
                  ? `${hovered.cy + hovered.ry + 3}%`
                  : `${hovered.cy - hovered.ry - 11}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-1.5 shadow-lg whitespace-nowrap">
                <p className="text-xs font-semibold text-foreground">{hovered.name}</p>
                <p className="text-[10px] text-muted-foreground">Tap to explore</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Legend ──────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground sm:gap-5">
        {["Incisor", "Canine", "Molar"].map((t) => (
          <span key={t} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: typeColors[t] }} />
            {t}
          </span>
        ))}
        <span className="opacity-40">|</span>
        <span className="italic">Hover or tap any tooth</span>
      </div>

      {/* ── Info panel ──────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {selected ? (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-5 rounded-2xl bg-primary/5 border border-primary/15 relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-primary/8 blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4 relative">
              <div
                className="mt-1 w-3 h-3 rounded-full flex-shrink-0 ring-4 ring-primary/10"
                style={{ background: typeColors[selected.type] }}
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="font-serif text-lg font-semibold text-foreground">{selected.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{selected.type}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Erupts: <span className="text-foreground font-medium">{selected.eruption}</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.tip}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground hover:text-foreground transition-colors text-xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-muted-foreground py-2"
          >
            Click any tooth to learn about it
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToothChart;
