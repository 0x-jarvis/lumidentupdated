import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Eye, Waypoints, Sparkles, Zap, Shield } from "lucide-react";

interface Treatment {
  id: string;
  name: string;
  icon: React.ElementType;
  visibility: "Invisible" | "Discreet" | "Visible";
  comfort: number;
  speed: number;
  aesthetics: number;
  removable: boolean;
  idealFor: string;
  duration: string;
  visits: string;
  note: string;
}

const treatments: Treatment[] = [
  { id: "aligners", name: "Clear Aligners", icon: Eye, visibility: "Invisible", comfort: 5, speed: 4, aesthetics: 5, removable: true, idealFor: "Mild to moderate alignment needs in compliant teens and adults", duration: "6-18 months", visits: "Every 6-8 weeks", note: "Most effective when daily wear is consistent and the case does not require heavy fixed-mechanics control." },
  { id: "ceramic", name: "Ceramic Braces", icon: Sparkles, visibility: "Discreet", comfort: 3, speed: 4, aesthetics: 4, removable: false, idealFor: "Moderate to complex cases where lower visibility is preferred", duration: "12-24 months", visits: "Every 4-6 weeks", note: "Aesthetic fixed treatment with solid control, but still dependent on careful hygiene and routine monitoring." },
  { id: "metal", name: "Metal Braces", icon: Waypoints, visibility: "Visible", comfort: 3, speed: 5, aesthetics: 2, removable: false, idealFor: "Simple to complex orthodontic correction", duration: "12-30 months", visits: "Every 4-6 weeks", note: "Often the most efficient fixed option when precision, versatility, and control are the main priorities." },
  { id: "self-lig", name: "Self-Ligating Braces", icon: Zap, visibility: "Discreet", comfort: 4, speed: 5, aesthetics: 3, removable: false, idealFor: "Selected cases where efficient fixed mechanics are appropriate", duration: "10-24 months", visits: "Every 6-8 weeks", note: "May be useful in specific treatment mechanics, but case diagnosis remains more important than bracket system branding." },
  { id: "lingual", name: "Lingual Braces", icon: Shield, visibility: "Invisible", comfort: 2, speed: 4, aesthetics: 5, removable: false, idealFor: "Patients prioritizing hidden fixed treatment with suitable case anatomy", duration: "12-24 months", visits: "Every 4-6 weeks", note: "Placed behind the teeth for discretion, with an early adaptation period and more demanding technique requirements." },
];

const RatingDots = ({ value, max = 5 }: { value: number; max?: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: max }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.05 }}
        className={`w-2.5 h-2.5 rounded-full ${i < value ? "bg-primary" : "bg-muted"}`}
      />
    ))}
  </div>
);

const TreatmentCompare = () => {
  const [selected, setSelected] = useState<string[]>(["aligners", "metal"]);

  const toggleTreatment = (id: string) => {
    if (selected.includes(id)) {
      if (selected.length > 1) setSelected(selected.filter((s) => s !== id));
    } else {
      if (selected.length >= 3) {
        setSelected([...selected.slice(1), id]);
      } else {
        setSelected([...selected, id]);
      }
    }
  };

  const selectedTreatments = treatments.filter((t) => selected.includes(t.id));

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {treatments.map((t) => (
          <motion.button
            key={t.id}
            whileHover={{ y: -1 }}
            onClick={() => toggleTreatment(t.id)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 ${
              selected.includes(t.id)
                ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/15"
                : "border-border/60 bg-background/70 text-muted-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            }`}
          >
            <t.icon size={14} />
            {t.name}
          </motion.button>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">Compare up to 3 treatment systems</p>

      <div className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {selectedTreatments.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-5 sm:p-6"
            >
              <div className="text-center mb-5">
                <div className="icon-badge mx-auto mb-3">
                  <t.icon className="text-primary" size={22} />
                </div>
                <h4 className="font-serif text-lg font-semibold text-foreground">{t.name}</h4>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Visibility</p>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    t.visibility === "Invisible" ? "bg-emerald-500/10 text-emerald-600" :
                    t.visibility === "Discreet" ? "bg-blue-500/10 text-blue-600" :
                    "bg-amber-500/10 text-amber-600"
                  }`}>
                    {t.visibility}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Comfort</p>
                  <RatingDots value={t.comfort} />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Speed</p>
                  <RatingDots value={t.speed} />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Visibility preference</p>
                  <RatingDots value={t.aesthetics} />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Removable</p>
                  {t.removable ? <Check size={16} className="text-emerald-500" /> : <X size={16} className="text-muted-foreground/40" />}
                </div>

                <div className="pt-3 border-t border-border/30 space-y-2">
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-foreground font-medium">{t.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Visits</p>
                    <p className="text-foreground font-medium">{t.visits}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Typical indication</p>
                    <p className="text-foreground font-medium">{t.idealFor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Clinical note</p>
                    <p className="text-foreground font-medium">{t.note}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TreatmentCompare;
