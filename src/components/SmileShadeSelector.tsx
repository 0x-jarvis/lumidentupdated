import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const shades = [
  { id: "A1", label: "A1 - Lightest", color: "#F5F0E0", category: "Bright White" },
  { id: "A2", label: "A2 - Light", color: "#EDE5C8", category: "Natural White" },
  { id: "A3", label: "A3 - Medium", color: "#DDD0A8", category: "Warm Natural" },
  { id: "A3.5", label: "A3.5 - Medium+", color: "#D4C494", category: "Deeper Warm" },
  { id: "B1", label: "B1 - Cool Light", color: "#F0ECE0", category: "Cool White" },
  { id: "B2", label: "B2 - Cool Medium", color: "#E2D8C0", category: "Soft Cool" },
  { id: "C1", label: "C1 - Warm", color: "#DCD0B0", category: "Classic Warm" },
  { id: "D2", label: "D2 - Deep", color: "#C8B890", category: "Rich Natural" },
];

const treatments: Record<string, { name: string; desc: string; sessions: string }> = {
  "Bright White": { name: "In-office whitening", desc: "A useful starting point when the teeth are healthy and the main goal is a brighter overall shade.", sessions: "Often 1 visit" },
  "Natural White": { name: "Professional take-home whitening", desc: "A more gradual path for patients who want controlled brightening and simple maintenance.", sessions: "Usually 1-2 weeks of guided use" },
  "Cool White": { name: "Sensitivity-aware whitening plan", desc: "A gentler route when brightness matters but comfort and enamel tolerance need more attention.", sessions: "Usually 2-4 shorter sessions" },
  "Soft Cool": { name: "Whitening with selective bonding review", desc: "Useful when color improves but edges, small chips, or asymmetry still need refinement.", sessions: "Usually 2 visits" },
  "Warm Natural": { name: "Veneers consultation", desc: "Worth discussing when shape, color, and surface changes matter more than shade alone.", sessions: "Typically 2 or more visits" },
  "Deeper Warm": { name: "Bonding or restorative review", desc: "A practical option when the smile may benefit from conservative reshaping rather than an aggressive cosmetic plan.", sessions: "Often 1-2 visits" },
  "Classic Warm": { name: "Combined restorative and cosmetic planning", desc: "Appropriate when appearance and function both need attention before choosing the final cosmetic step.", sessions: "Varies by case" },
  "Rich Natural": { name: "Comprehensive smile assessment", desc: "Best for more complex cases where tooth structure, restorations, and shade all need to be evaluated together.", sessions: "Planned after consultation" },
};

const SmileShadeSelector = () => {
  const [currentShade, setCurrentShade] = useState(shades[3]);
  const [targetShade, setTargetShade] = useState(shades[0]);
  const [step, setStep] = useState<"current" | "target" | "result">("current");

  const treatment = treatments[targetShade.category];

  return (
    <div className="glass-card p-6 md:p-10 max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {step === "current" && (
          <motion.div key="current" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Step 1 of 2</p>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Select your current shade</h3>
            <p className="text-sm text-muted-foreground mb-6">This is a simple consultation guide, not a diagnosis. Choose the shade that feels closest today.</p>
            <div className="grid grid-cols-4 gap-3">
              {shades.map((s) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentShade(s)}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    currentShade.id === s.id ? "border-primary shadow-md shadow-primary/20" : "border-border/40 hover:border-primary/30"
                  }`}
                >
                  <div className="w-full aspect-square rounded-lg mb-2" style={{ backgroundColor: s.color }} />
                  <p className="text-xs font-medium text-foreground">{s.id}</p>
                  <p className="text-[10px] text-muted-foreground">{s.category}</p>
                </motion.button>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => setStep("target")}
              className="mt-6 w-full p-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              Next <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        )}

        {step === "target" && (
          <motion.div key="target" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Step 2 of 2</p>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Choose your target shade</h3>
            <p className="text-sm text-muted-foreground mb-6">Pick the level of brightness or refinement you would like to discuss in consultation.</p>
            <div className="grid grid-cols-4 gap-3">
              {shades.map((s) => (
                <motion.button
                  key={s.id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTargetShade(s)}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    targetShade.id === s.id ? "border-primary shadow-md shadow-primary/20" : "border-border/40 hover:border-primary/30"
                  }`}
                >
                  <div className="w-full aspect-square rounded-lg mb-2" style={{ backgroundColor: s.color }} />
                  <p className="text-xs font-medium text-foreground">{s.id}</p>
                  <p className="text-[10px] text-muted-foreground">{s.category}</p>
                </motion.button>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setStep("current")} className="flex-1 p-3 rounded-xl border border-border/40 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Back
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setStep("result")}
                className="flex-1 p-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                See Result <Sparkles size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === "result" && (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <div className="text-center mb-6">
              <Sparkles className="mx-auto text-primary mb-3" size={28} />
              <h3 className="font-serif text-xl font-semibold text-foreground">Suggested consultation path</h3>
            </div>

            {/* Before/After preview */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-2 border-2 border-border/40" style={{ backgroundColor: currentShade.color }} />
                <p className="text-xs text-muted-foreground">Current: {currentShade.id}</p>
              </div>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="text-primary" size={24} />
              </motion.div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-20 h-20 rounded-2xl mx-auto mb-2 border-2 border-primary shadow-lg shadow-primary/20"
                  style={{ backgroundColor: targetShade.color }}
                />
                <p className="text-xs text-primary font-medium">Target: {targetShade.id}</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-1">Suggested discussion</p>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{treatment.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{treatment.desc}</p>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Typical timeline: </span>{treatment.sessions}
              </p>
            </div>

            <button
              onClick={() => { setStep("current"); }}
              className="mt-4 w-full p-3 rounded-xl border border-border/40 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Start Over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmileShadeSelector;
