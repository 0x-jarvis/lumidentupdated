
# Interactive Tooth Chart — Image-Based Hotspot Overlay

## What's Changing

The current `ToothChart` uses generic rectangular buttons arranged in two rows. The new version will use the uploaded mouth illustration as the visual base, with precisely positioned invisible clickable hotspots placed directly over each tooth in the image. Hovering a tooth highlights it with a soft red glow pulse; clicking reveals the info panel below.

---

## Technical Approach

### 1. Copy the image into the project
The uploaded `Untitled_design_5.png` will be copied to `src/assets/mouth-chart.png` and imported as an ES6 module — never referenced by URL.

### 2. SVG overlay coordinate system
The component will render:
```text
┌──────────────────────────────────┐
│  <div> — relative positioned     │
│  ┌────────────────────────────┐  │
│  │  <img> mouth illustration  │  │
│  └────────────────────────────┘  │
│  <svg> — absolute, full overlay  │
│    <ellipse> × 20 hotspots       │
│  </svg>                          │
└──────────────────────────────────┘
```
An `<svg>` with `viewBox="0 0 100 100"` is layered absolutely on top of the image. Each tooth gets an `<ellipse>` (or `<circle>`) whose `cx`, `cy`, `rx`, `ry` are expressed as percentages of the image width/height, carefully mapped to the visual position of each tooth in the illustration.

### 3. Tooth hotspot positions (percentage-based, mapped from the image)

**Upper jaw (left side of image = patient's right):**

| Tooth | Position in image |
|---|---|
| Upper Right Second Molar | ~18%, 26% |
| Upper Right First Molar | ~22%, 18% |
| Upper Right Canine | ~30%, 13% |
| Upper Right Lateral Incisor | ~39%, 10% |
| Upper Right Central Incisor | ~47%, 9% |
| Upper Left Central Incisor | ~53%, 9% |
| Upper Left Lateral Incisor | ~61%, 10% |
| Upper Left Canine | ~70%, 13% |
| Upper Left First Molar | ~78%, 18% |
| Upper Left Second Molar | ~82%, 26% |

**Lower jaw:**

| Tooth | Position in image |
|---|---|
| Lower Right Second Molar | ~18%, 74% |
| Lower Right First Molar | ~22%, 82% |
| Lower Right Canine | ~30%, 87% |
| Lower Right Lateral Incisor | ~39%, 90% |
| Lower Right Central Incisor | ~47%, 91% |
| Lower Left Central Incisor | ~53%, 91% |
| Lower Left Lateral Incisor | ~61%, 90% |
| Lower Left Canine | ~70%, 87% |
| Lower Left First Molar | ~78%, 82% |
| Lower Left Second Molar | ~82%, 74% |

### 4. Hover & selection states
- **Default**: `fill="transparent"` / `stroke="transparent"` — hotspot is invisible
- **Hover**: animated `fill` with `rgba(228, 27, 35, 0.20)` + `stroke="#e41b23"` at `strokeWidth=0.5` + framer-motion scale pulse
- **Selected/Active**: `fill="rgba(228, 27, 35, 0.35)"` + brighter stroke + a soft drop-shadow filter

Each hotspot also renders a tiny animated dot indicator (a small pulsing ring) that appears on hover to guide users that it's clickable.

### 5. Tooltip on hover
A floating tooltip bubble appears near the hovered tooth (positioned via the hotspot's `cx`/`cy` coordinates converted to `%` CSS) showing just the tooth name — clicking then reveals the full info panel below.

### 6. Info panel (unchanged data, improved UX)
The existing tooth data (`upperTeeth` / `lowerTeeth` arrays) is preserved exactly. The animated panel below the image slides in with `framer-motion` showing name, type badge, eruption timing, and care tip.

### 7. Mobile fallback
On small screens, the image scales down and hotspot percentages remain accurate since they're SVG-based. A small legend below ("Hover or tap any tooth") guides mobile users.

---

## Files Changed

- `src/assets/mouth-chart.png` — new (copy of uploaded image)
- `src/components/ToothChart.tsx` — full rewrite: image + SVG hotspot overlay replacing the button grid
