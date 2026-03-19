import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Shield,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { departmentBooking } from "@/lib/lumident";

const foundationItems = [
  {
    label: "First visits",
    desc: "A calm first visit focused on growth, risk, and early care.",
  },
  {
    label: "Preventive care",
    desc: "Checkups, hygiene guidance, fluoride, and sealants planned around risk and routine.",
  },
  {
    label: "Comfort-first visits",
    desc: "Pacing and communication that reduce fear and help children cooperate without pressure.",
  },
];

const treatmentCare = {
  title: "Treatment & Care",
  eyebrow: "When treatment is needed",
  desc: "When baby teeth need treatment, care stays practical and preservation-focused.",
  points: [
    "Child-focused fillings, crowns, and pulp therapy when a tooth should be maintained until natural shedding.",
    "Clear guidance on what needs treatment now and what can be monitored safely.",
  ],
};

const growthMonitoring = {
  title: "Growth & Monitoring",
  eyebrow: "Before problems become bigger",
  desc: "Early guidance helps catch habits, spacing changes, and bite concerns before they become more complex.",
  points: [
    "Thumb sucking, spacing changes, space maintenance, and early bite review.",
    "A clearer sense of when simple observation is enough and when intervention matters.",
  ],
};

const urgentCare = {
  title: "Urgent care",
  desc: "If your child develops pain, swelling, trauma, or a broken tooth, contact the department so the next step is directed quickly and appropriately.",
  action: "Call when something changes suddenly, not after it worsens.",
};

const milestones = [
  { age: "6 months", title: "First teeth erupt", desc: "Start wiping or brushing the first teeth and avoid prolonged sugar exposure in bottles." },
  { age: "1 year", title: "First dental visit", desc: "A first visit by age one helps assess risk, monitor eruption, and guide parents early." },
  { age: "3 years", title: "Full primary dentition", desc: "All 20 baby teeth are usually present, making prevention and cavity control especially important." },
  { age: "6 years", title: "Mixed dentition begins", desc: "The first permanent molars arrive and early orthodontic screening can become useful." },
  { age: "12 years", title: "Permanent teeth take over", desc: "Most adult teeth are in place, and bite development becomes easier to evaluate clearly." },
];

const firstVisitPoints = [
  "Bring your child around their first birthday or when the first tooth appears.",
  "Expect an age-appropriate exam, eruption review, and home care guidance.",
  "Use the visit to discuss habits, feeding, fluoride, and cavity risk early.",
];

const guidanceCards = [
  {
    title: "Toothache first aid",
    desc: "Rinse with warm salt water, brush or floss gently around the area, and avoid placing aspirin directly on the gums.",
  },
  {
    title: "Snacks that help",
    desc: "Choose water, dairy, fruit, and balanced meals more often than sticky sweets, juice, and frequent sugary snacks.",
  },
  {
    title: "Sports protection",
    desc: "Mouthguards reduce injury risk for active children and are worth planning before contact or high-impact sports.",
  },
];

const Pediatric = () => {
  return (
    <Layout>
      <section className="relative hero-gradient flex items-center">
        <div className="container mx-auto px-6 py-16 sm:py-18 md:py-20 xl:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-18">
            <div className="max-w-xl">
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/8 text-primary border border-primary/15">
                Pediatric Dentistry
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="font-serif text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl xl:max-w-[11ch]">
                Gentle care for <span className="gradient-text">growing smiles.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Warm, specialist-led care from the first tooth onward, with guidance that helps parents feel clear and prepared.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-7 flex flex-wrap gap-3">
                <WhatsAppCTA
                  label="Contact Pediatric Department"
                  href={departmentBooking.pediatric.whatsappUrl}
                  iconSrc={departmentBooking.pediatric.imageSrc}
                  iconAlt={departmentBooking.pediatric.title}
                />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-5 flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Ages 0-14</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Preventive care and follow-up support</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Comfort-first approach</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted to-accent min-h-[340px] sm:min-h-[400px] md:min-h-[460px] xl:min-h-[520px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_75%_70%,rgba(228,27,35,0.10),transparent_30%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="max-w-sm text-center">
                    <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/45 bg-background/75 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:h-40 sm:w-40">
                      <img src={departmentBooking.pediatric.imageSrc} alt={departmentBooking.pediatric.title} className="h-full w-full object-contain" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                      Calm visits that build trust early
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Guidance, prevention, and continuity of care in a calm setting that keeps the focus on your child.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-surface-base py-16 sm:py-18 md:py-22 xl:py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Core Services"
            title="Child-focused care, structured around what matters most early"
            subtitle="A calmer first visit, clear prevention, treatment when needed, and close monitoring as children grow."
          />
          <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:gap-8">
            <AnimatedSection>
              <div className="glass-card h-full overflow-hidden p-7 md:p-8 xl:p-10">
                <div className="flex items-center gap-3">
                  <div className="icon-badge">
                    <ShieldCheck className="text-primary" size={22} />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                    Foundation & Prevention
                  </p>
                </div>
                <h3 className="mt-6 max-w-[14ch] font-serif text-[2rem] font-semibold leading-tight text-foreground md:text-[2.35rem]">
                  Pediatric care begins with trust, routine, and prevention.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  The first goal is not simply treatment. It is helping children feel safe early, while giving parents clear guidance on risk, home care, and what to watch as the mouth develops.
                </p>
                <div className="mt-8 rounded-[1.5rem] border border-border/30 bg-background/40 p-5 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    The early priorities
                  </p>
                  <div className="mt-5 space-y-4">
                  {foundationItems.map((item) => (
                    <div key={item.label} className="grid gap-1 border-b border-border/20 pb-4 last:border-b-0 last:pb-0 md:grid-cols-[140px_1fr] md:gap-4">
                      <div className="flex items-center gap-2">
                        <HeartPulse size={15} className="shrink-0 text-primary" />
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/82">{item.desc}</p>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="space-y-5">
              <AnimatedSection delay={0.06}>
                <div className="glass-card p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                        {treatmentCare.title}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.45rem] font-semibold text-foreground">
                        Treatment when preservation matters
                      </h3>
                    </div>
                    <div className="icon-badge shrink-0">
                      <Stethoscope className="text-primary" size={20} />
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {treatmentCare.eyebrow}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{treatmentCare.desc}</p>
                  <div className="mt-5 space-y-3">
                    {treatmentCare.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                        <p className="text-sm leading-relaxed text-foreground/88">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <div className="glass-card p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                        {growthMonitoring.title}
                      </p>
                      <h3 className="mt-2 font-serif text-[1.45rem] font-semibold text-foreground">
                        Monitoring that stays ahead of bigger problems
                      </h3>
                    </div>
                    <div className="icon-badge shrink-0">
                      <Shield className="text-primary" size={20} />
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {growthMonitoring.eyebrow}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{growthMonitoring.desc}</p>
                  <div className="mt-5 space-y-3">
                    {growthMonitoring.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" />
                        <p className="text-sm leading-relaxed text-foreground/88">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.18}>
                <div className="overflow-hidden rounded-[1.75rem] border border-primary/22 bg-gradient-to-r from-primary/[0.09] via-primary/[0.05] to-transparent p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/14">
                      <AlertTriangle size={19} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                        {urgentCare.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/88">
                        {urgentCare.desc}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-foreground">
                        {urgentCare.action}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className="container mx-auto px-6">
          <SectionHeading badge="First Visit" title="Start early, stay ahead" subtitle="A first visit around age one helps assess risk, guide hygiene, and make future visits easier." />
          <div className="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <AnimatedSection>
              <div className="glass-card h-full p-7 md:p-8 xl:p-10">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">What parents can expect</h3>
                <div className="space-y-4">
                  {firstVisitPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card className="border-border/40 bg-card h-full">
                <CardContent className="p-7 md:p-8 xl:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock3 size={18} className="text-primary" />
                    <p className="text-sm font-semibold text-foreground">Helpful to bring up</p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>Feeding habits, brushing routine, prior tooth pain, injuries, or any habits such as thumb sucking.</p>
                    <p>Questions about fluoride, teething discomfort, snacks, and whether your child is ready for orthodontic screening.</p>
                    <p>The goal is prevention, comfort, and confidence from the start.</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-surface-base py-16 sm:py-18 md:py-22 xl:py-24">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Growth Timeline" title="Key milestones in oral development" subtitle="Knowing what is normal helps families spot concerns earlier." />
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />
              {milestones.map((milestone, i) => (
                <AnimatedSection key={milestone.age} delay={i * 0.1} direction="left">
                  <div className="relative pl-16 pb-8 last:pb-0">
                    <div className="absolute left-3 top-1 w-[18px] h-[18px] rounded-full border-2 border-primary bg-background z-10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="glass-card p-6 hover-lift">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{milestone.age}</span>
                        <h3 className="font-serif text-lg font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className="container mx-auto px-6">
          <SectionHeading badge="Guidance" title="Helpful guidance for parents" subtitle="A few practical reminders between visits." />
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="glass-card h-full p-7 md:p-8 xl:p-10">
                <div className="space-y-4">
                  {guidanceCards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-border/30 bg-background/60 p-5">
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Pediatric;
