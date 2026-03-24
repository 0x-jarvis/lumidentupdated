import { motion } from "framer-motion";
import {
  CheckCircle2,
  Crown,
  Eye,
  Gem,
  Hammer,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { departmentBooking } from "@/lib/lumident";
import { cnPageContainer } from "@/lib/pageLayout";

const coreServices = [
  { title: "Teeth whitening", icon: Sun, desc: "Professional whitening planned around sensitivity, current shade, and the type of result you want." },
  { title: "Veneers and bonding", icon: Gem, desc: "Shape, color, and surface refinement for patients who want a more polished smile without guesswork." },
  { title: "Crowns and bridges", icon: Crown, desc: "Restorative treatment that rebuilds strength, function, and aesthetics in a coordinated way." },
  { title: "Composite fillings", icon: Paintbrush, desc: "Tooth-colored restorations for cavities and small repairs with a natural-looking finish." },
  { title: "Root canal treatment", icon: Hammer, desc: "Tooth-saving care when infection reaches the nerve, with a focus on preserving long-term function." },
  { title: "Preventive checkups", icon: ShieldCheck, desc: "Routine exams, hygiene, and risk review to keep larger restorative problems from building quietly." },
];

const pillars = [
  {
    title: "Preventive",
    icon: ShieldCheck,
    desc: "Regular exams, hygiene, and early detection that protect teeth before more invasive treatment becomes necessary.",
    details: ["Comprehensive checkups", "Digital diagnostics", "Periodontal review", "Preventive maintenance"],
    gradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    title: "Restorative",
    icon: Wrench,
    desc: "Treatment that restores comfort, bite function, and structural integrity with durable, clinically appropriate materials.",
    details: ["Crowns and bridges", "Tooth-colored fillings", "Root canal follow-through", "Repair of wear and damage"],
    gradient: "from-blue-500/10 to-indigo-500/5",
  },
  {
    title: "Cosmetic",
    icon: Sparkles,
    desc: "Refined improvements designed to look natural and stay aligned with the health of the teeth underneath.",
    details: ["Professional whitening", "Veneers and bonding", "Shape refinement", "Smile planning"],
    gradient: "from-amber-500/10 to-orange-500/5",
  },
];

const selectedTreatments = [
  {
    title: "Whitening",
    desc: "Best for patients whose teeth are healthy but dulled or stained. Shade goals, sensitivity, and existing restorations should be reviewed before starting.",
  },
  {
    title: "Veneers and bonding",
    desc: "Useful when patients want more than brightness alone, such as shape correction, edge repair, or a more balanced smile line.",
  },
  {
    title: "Crowns and bridges",
    desc: "Appropriate when teeth need reinforcement after damage, decay, or missing-tooth replacement rather than purely cosmetic change.",
  },
  {
    title: "Root canal plus restoration",
    desc: "Often the right sequence when the goal is to save a painful or infected tooth, then rebuild it properly for long-term use.",
  },
];

const GPCosmetics = () => {
  return (
    <Layout>
      <section className="relative hero-gradient flex items-center">
        <div className={cnPageContainer("py-16 sm:py-18 md:py-20 xl:py-24")}>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
            <div className="max-w-2xl">
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/8 text-primary border border-primary/15">
                Adults & Cosmetics
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="font-serif text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
                Adult dental care with a <span className="gradient-text">refined, realistic finish.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                General, restorative, and cosmetic dentistry planned around health first and refined toward natural-looking results.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-7 flex flex-wrap gap-3">
                <WhatsAppCTA
                  label={departmentBooking.adultsCosmetics.consultationLabel}
                  href={departmentBooking.adultsCosmetics.whatsappUrl}
                  iconSrc={departmentBooking.adultsCosmetics.imageSrc}
                  iconAlt={departmentBooking.adultsCosmetics.title}
                />
                <WhatsAppCTA label={departmentBooking.adultsCosmetics.questionLabel} href={departmentBooking.adultsCosmetics.whatsappUrl} variant="outline" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-5 flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Preventive, restorative, and cosmetic</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Natural-looking planning</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Function stays central</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:block">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-muted to-accent overflow-hidden flex items-center justify-center xl:aspect-[4/4.6]">
                  <div className="text-center space-y-4 max-w-xs px-8">
                    <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/45 bg-background/75 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm animate-float">
                      <img src={departmentBooking.adultsCosmetics.imageSrc} alt={departmentBooking.adultsCosmetics.title} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Adult dentistry that explains options clearly before treatment begins.</p>
                  </div>
                </div>
                <div className="absolute -left-4 top-1/4 glass-card p-4 glow-sm animate-float-slow">
                  <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /><span className="text-xs font-semibold text-foreground">Restorative clarity</span></div>
                </div>
                <div className="absolute -right-4 bottom-1/3 glass-card p-4 glow-sm animate-float" style={{ animationDelay: "1.2s" }}>
                  <div className="flex items-center gap-2"><Eye size={18} className="text-primary" /><span className="text-xs font-semibold text-foreground">Tasteful cosmetic planning</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-surface-base py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <SectionHeading badge="Core Services" title="Coverage that goes beyond a cosmetic pitch" subtitle="A tighter view of the adult services patients ask about most." />
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {coreServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.08}>
                <div className="glass-card hover-lift p-8 h-full group">
                  <div className="icon-badge mb-5"><service.icon className="text-primary" size={22} /></div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <SectionHeading badge="Three Pillars" title="Prevention, restoration, and aesthetics should work together" subtitle="Each pillar keeps the clinical logic clear." />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <Card className="hover-lift border-border/40 bg-card h-full overflow-hidden relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
                  <CardContent className="relative p-8">
                    <div className="icon-badge-lg mb-5"><pillar.icon className="text-primary" size={28} /></div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pillar.desc}</p>
                    <div className="space-y-2">
                      {pillar.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 size={14} className="text-primary shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-base py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <SectionHeading badge="Selected Treatments" title="A few treatment paths worth understanding before you book" subtitle="A concise guide to the treatment paths adults compare most often." />
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:gap-6">
            {selectedTreatments.map((treatment, i) => (
              <AnimatedSection key={treatment.title} delay={i * 0.08}>
                <div className="glass-card p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {i < 2 ? <Sparkles size={18} className="text-primary" /> : <Wrench size={18} className="text-primary" />}
                    <h3 className="font-serif text-xl font-semibold text-foreground">{treatment.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{treatment.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <AnimatedSection>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center sm:p-10 md:p-14 xl:p-18">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="relative">
                <Sparkles size={48} className="mx-auto mb-4 text-primary-foreground/80" />
                <h2 className="font-serif text-3xl md:text-5xl font-semibold text-primary-foreground mb-4">Plan your adult or cosmetic visit with clarity</h2>
                <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
                  Book directly with the Adults & Cosmetics department to review preventive needs, restorative priorities, and cosmetic goals.
                </p>
                <WhatsAppCTA
                  label={departmentBooking.adultsCosmetics.consultationLabel}
                  href={departmentBooking.adultsCosmetics.whatsappUrl}
                  size="lg"
                  iconSrc={departmentBooking.adultsCosmetics.imageSrc}
                  iconAlt={departmentBooking.adultsCosmetics.title}
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default GPCosmetics;
