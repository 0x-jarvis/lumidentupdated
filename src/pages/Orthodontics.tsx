import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Eye,
  GraduationCap,
  Settings,
  Shield,
  Sparkles,
  Users,
  Waypoints,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import AnimatedSection from "@/components/AnimatedSection";
import TreatmentCompare from "@/components/TreatmentCompare";
import { Card, CardContent } from "@/components/ui/card";
import { departmentBooking } from "@/lib/lumident";
import { cnPageContainer } from "@/lib/pageLayout";

const patients = [
  {
    title: "Children",
    icon: Baby,
    desc: "Early orthodontic evaluation can help guide jaw growth, preserve space, and reduce the chance of more complex treatment later.",
    features: ["Growth monitoring", "Space maintainers", "Crossbite and habit review", "Expansion when indicated"],
  },
  {
    title: "Teens",
    icon: GraduationCap,
    desc: "This is often the ideal window for active treatment, with options that balance aesthetics, school life, and predictable progress.",
    features: ["Clear aligners", "Ceramic or metal braces", "Sports-friendly planning", "Retention guidance"],
  },
  {
    title: "Adults",
    icon: Users,
    desc: "Adults can still achieve healthy, aligned smiles with modern braces and aligners planned around professional and social routines.",
    features: ["Discreet options", "Bite and function review", "Interdisciplinary planning", "Realistic timelines"],
  },
];

const journey = [
  { step: "01", title: "Consultation and records", desc: "We assess alignment, bite, facial balance, and digital records before discussing options." },
  { step: "02", title: "Treatment selection", desc: "Braces, aligners, or growth-guidance appliances are chosen based on case needs, not marketing labels." },
  { step: "03", title: "Active treatment", desc: "Regular review visits keep teeth moving safely while comfort, hygiene, and timing are monitored." },
  { step: "04", title: "Retention", desc: "Retainers and follow-up matter because the final phase protects the result you worked for." },
];

const options = [
  {
    title: "Clear aligners",
    desc: "Removable, nearly invisible trays that suit many mild to moderate cases and work best when worn consistently.",
  },
  {
    title: "Metal and ceramic braces",
    desc: "Reliable options for a wide range of cases, including more complex movements that need precise control.",
  },
  {
    title: "Self-ligating and lingual braces",
    desc: "Useful for patients who want specific comfort or visibility tradeoffs, depending on the diagnosis and goals.",
  },
  {
    title: "Expanders and orthopedic appliances",
    desc: "Growth-guidance appliances such as palatal expanders or Herbst-style approaches can be valuable in younger, developing patients.",
  },
];

const Orthodontics = () => {
  return (
    <Layout>
      <section className="relative hero-gradient flex items-center">
        <div className={cnPageContainer("py-16 sm:py-18 md:py-20 xl:py-24")}>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
            <div className="max-w-2xl">
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/8 text-primary border border-primary/15">
                Orthodontics
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="font-serif text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
                Practical alignment planning <span className="gradient-text">at every age.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Modern orthodontic care that explains braces, aligners, and growth-guidance appliances with clarity.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-7 flex flex-wrap gap-3">
                <WhatsAppCTA
                  label={departmentBooking.orthodontics.consultationLabel}
                  href={departmentBooking.orthodontics.whatsappUrl}
                  iconSrc={departmentBooking.orthodontics.imageSrc}
                  iconAlt={departmentBooking.orthodontics.title}
                />
                <WhatsAppCTA label={departmentBooking.orthodontics.questionLabel} href={departmentBooking.orthodontics.whatsappUrl} variant="outline" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-5 flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Children, teens, and adults</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Clear and fixed options</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Retention planned from day one</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:block">
              <div className="relative">
                <div className="aspect-[1.02/1] rounded-3xl bg-gradient-to-br from-muted to-accent overflow-hidden flex items-center justify-center xl:aspect-square">
                  <div className="text-center space-y-4 max-w-xs px-8">
                    <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/45 bg-background/75 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm animate-float">
                      <img src={departmentBooking.orthodontics.imageSrc} alt={departmentBooking.orthodontics.title} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">Braces, aligners, and appliances explained with clarity.</p>
                  </div>
                </div>
                <div className="absolute -left-4 top-1/3 glass-card p-4 glow-sm animate-float-slow">
                  <div className="flex items-center gap-2"><Settings size={18} className="text-primary" /><span className="text-xs font-semibold text-foreground">Digital planning</span></div>
                </div>
                <div className="absolute -right-4 bottom-1/4 glass-card p-4 glow-sm animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="flex items-center gap-2"><Eye size={18} className="text-primary" /><span className="text-xs font-semibold text-foreground">Discreet options available</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-surface-base py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <SectionHeading badge="Compare" title="Compare the treatment paths that fit your case" subtitle="A clearer way to compare the options most patients consider." />
          <TreatmentCompare />
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <SectionHeading badge="By Life Stage" title="Orthodontics changes with age and growth" subtitle="Timing matters because growth and eruption change the right option." />
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {patients.map((patient, i) => (
              <AnimatedSection key={patient.title} delay={i * 0.1}>
                <Card className="hover-lift border-border/40 bg-card h-full overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
                  <CardContent className="p-8">
                    <div className="icon-badge-lg mb-5"><patient.icon className="text-primary" size={28} /></div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{patient.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{patient.desc}</p>
                    <div className="space-y-2">
                      {patient.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 size={14} className="text-primary shrink-0" />
                          {feature}
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
          <SectionHeading badge="Treatment Journey" title="A clear path from consultation to retention" subtitle="A practical view of what happens during treatment." />
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {journey.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="glass-card hover-lift p-8 text-center h-full relative">
                  <span className="text-4xl font-serif font-bold text-primary/15">{step.step}</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  {i < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/20" size={20} />}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <SectionHeading badge="Treatment Options" title="Selected appliances and treatment choices" subtitle="Enough detail to help patients decide without overloading the page." />
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:gap-6">
            {options.map((option, i) => (
              <AnimatedSection key={option.title} delay={i * 0.08}>
                <div className="glass-card p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {i % 2 === 0 ? <Sparkles size={18} className="text-primary" /> : <Shield size={18} className="text-primary" />}
                    <h3 className="font-serif text-xl font-semibold text-foreground">{option.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{option.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-base py-16 sm:py-18 md:py-22 xl:py-24">
        <div className={cnPageContainer()}>
          <AnimatedSection>
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center sm:p-10 md:p-14 xl:p-18">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
              <div className="relative">
                <Waypoints size={48} className="mx-auto mb-4 text-primary-foreground/80" />
                <h2 className="font-serif text-3xl md:text-5xl font-semibold text-primary-foreground mb-4">Start your orthodontic consultation</h2>
                <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
                  Book directly with the orthodontic department to review alignment, options, and timeline.
                </p>
                <WhatsAppCTA
                  label={departmentBooking.orthodontics.consultationLabel}
                  href={departmentBooking.orthodontics.whatsappUrl}
                  size="lg"
                  iconSrc={departmentBooking.orthodontics.imageSrc}
                  iconAlt={departmentBooking.orthodontics.title}
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

export default Orthodontics;
