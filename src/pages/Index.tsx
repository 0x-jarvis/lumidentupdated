import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Baby,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Microscope,
  Phone,
  ScanLine,
  Sparkles,
  Stethoscope,
  Waypoints,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import DepartmentFinder from "@/components/DepartmentFinder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { clinicInfo, departmentBooking } from "@/lib/lumident";

const heroImages = [
  "https://i.ibb.co/dwfYK2LH/DSC-0615-edited.jpg",
  "https://i.ibb.co/gLPzZSXN/DSC-0705-edited.jpg",
  "https://i.ibb.co/B2N9br4F/20210706-084209-edited.jpg",
  "https://i.ibb.co/GQ5sYV9W/20210708-102351-edited.jpg",
  "https://i.ibb.co/BV4f11Mq/Whats-App-Image-2025-10-21-at-15-03-31.jpg",
  "https://i.ibb.co/Z6rsYxTj/Whats-App-Image-2025-10-21-at-12-49-28.jpg",
] as const;

const heroToothPath =
  "M280 134C238 127 196 128 157 139C121 149 93 166 77 191C64 213 63 240 67 269C71 298 77 331 82 367C87 403 91 441 96 480C101 517 109 546 123 565C138 585 158 596 180 593C201 590 220 578 235 559C246 545 256 535 280 527C304 535 314 545 325 559C340 578 359 590 380 593C402 596 422 585 437 565C451 546 459 517 464 480C469 441 473 403 478 367C483 331 489 298 493 269C497 240 496 213 483 191C467 166 439 149 403 139C364 128 322 127 280 134Z";

const departmentHighlights = [
  {
    ...departmentBooking.pediatric,
    icon: Baby,
    color: "from-rose-500/12 via-white to-pink-500/6",
    specialist: "Dr. Riad Bacho",
    role: "Head of Pediatric Dentistry",
    portraitAlt: "Portrait placeholder for Dr. Riad Bacho",
    academicLine: "Associate Professor of Pediatric Dentistry, Lebanese University",
    bio: "Dr. Riad Bacho trained in dentistry at Saint Joseph University before continuing postgraduate study in oral biology and pediatric dentistry in Paris. He later earned his Ph.D. from Universite Paris VI and has remained one of Lebanon's long-standing names in pediatric dentistry, combining academic leadership with a practice focused on children.",
    credentials: [
      "D.D.S., Saint Joseph University",
      "Certificates in Oral Biology and Pediatric Dentistry, Paris",
      "Ph.D., Universite Paris VI",
      "Associate Professor, Lebanese University",
    ],
    memberships: ["Pioneer in pediatric dentistry in Lebanon"],
    focus: [
      "First visits and preventive care",
      "Restorative treatment for children",
      "Growth and developmental guidance",
    ],
    leadSummary: "Gentle preventive and restorative care built to help children feel safe early and stay confident long term.",
  },
  {
    ...departmentBooking.orthodontics,
    icon: GraduationCap,
    color: "from-blue-500/12 via-white to-indigo-500/6",
    specialist: "Dr. Hani Hasbini",
    role: "Head of Orthodontics",
    portraitAlt: "Portrait placeholder for Dr. Hani Hasbini",
    academicLine: "Former Chair of Orthodontics, Lebanese University",
    bio: "Dr. Hani Hasbini earned his dental degree at Saint Joseph University, then completed specialist orthodontic training in Paris VII and a university diploma in lingual orthodontics in Paris V. Since opening his orthodontic practice in 1990, he has combined clinical work with teaching, lecturing, and long-term academic involvement in orthodontics.",
    credentials: [
      "D.D.S., Saint Joseph University",
      "C.E.C.S.M.O., Universite Paris VII",
      "D.U.O.L. in Lingual Orthodontics, Universite Paris V",
    ],
    memberships: [
      "Lebanese, Arab, French, European, and World orthodontic societies",
    ],
    focus: [
      "Children and adult orthodontics",
      "Braces, aligners, and lingual options",
      "Bite correction and functional occlusion",
    ],
    leadSummary: "Practical treatment planning for children, teens, and adults with clear guidance on appliances, timing, and retention.",
  },
  {
    ...departmentBooking.adultsCosmetics,
    icon: Sparkles,
    color: "from-amber-500/12 via-white to-orange-500/6",
    specialist: "Dr. Bassel Doughan",
    role: "Lead Restorative & Cosmetic Dentist",
    portraitAlt: "Portrait placeholder for Dr. Bassel Doughan",
    academicLine: "Assistant Professor and Chair of Public Health Dentistry, Lebanese University",
    bio: "Dr. Bassel Doughan graduated from Saint Joseph University, completed residency training in Paris VII, and later earned both a Master of Public Health from AUB and a doctorate from the Lebanese University. His clinical work focuses on cosmetic and restorative dentistry shaped by continuing education, veneer expertise, and an emphasis on treatment that remains both durable and refined.",
    credentials: [
      "D.D.S., Saint Joseph University",
      "Residency, Universite Paris VII",
      "M.P.H., American University of Beirut",
      "Doctorate, Lebanese University",
      "Fellow, International College of Dentists",
    ],
    memberships: ["Lumineers-certified and experienced CEREC user"],
    focus: [
      "Restorative treatment planning",
      "Veneers and cosmetic refinement",
      "Crowns, bridges, and complex adult care",
    ],
    leadSummary: "Functional, natural-looking treatment plans that balance oral health, durability, and aesthetic refinement.",
  },
];

const differentiators = [
  {
    title: "Specialist-led departments",
    icon: BadgeCheck,
    desc: "Each department is led by a dedicated specialist, so care starts with the right expertise from the first visit.",
  },
  {
    title: "Clear treatment planning",
    icon: Stethoscope,
    desc: "Consultations focus on diagnosis, options, timing, and the next step without unnecessary complexity.",
  },
  {
    title: "Modern diagnostics",
    icon: Microscope,
    desc: "Digital imaging and contemporary workflows support precise planning with less guesswork.",
  },
];

const stats = [
  { value: 3, suffix: "", label: "Specialist Departments" },
  { value: 40, suffix: "+", label: "Years of Clinical Experience" },
  { value: 25000, suffix: "+", label: "Patient Visits" },
];

const visitDetails = [
  {
    title: "Visit the clinic",
    body: clinicInfo.location,
    icon: MapPin,
    href: clinicInfo.mapUrl,
    cta: "Open in Maps",
  },
  {
    title: "Clinic hours",
    body: `${clinicInfo.hours.weekdays} · ${clinicInfo.hours.weekends}`,
    icon: Clock3,
  },
  {
    title: "Call the front desk",
    body: clinicInfo.phoneDisplay,
    icon: Phone,
    href: clinicInfo.phoneHref,
    cta: "Call Lumident",
  },
];

const Index = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [finderOpen, setFinderOpen] = useState(false);
  const [directOpen, setDirectOpen] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const primaryImage = heroImages[activeImage];
  const imageY = 28;
  const imageHeight = 656;
  const imageTransformOrigin = "50% 46%";
  const imageAspect = "xMidYMid slice";

  return (
    <Layout>
      <section className="relative hero-gradient flex items-center">
        <div className="container mx-auto px-6 pt-0 pb-5 sm:pb-7 md:pt-1 md:pb-8 lg:pt-2 lg:pb-10 xl:pt-4 xl:pb-12 2xl:pt-6 2xl:pb-14">
          <div className="grid items-center gap-6 lg:gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-16 2xl:gap-20">
            <div className="max-w-xl xl:max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-[2.8rem] font-semibold leading-[1.03] tracking-tight text-foreground sm:text-[3.35rem] md:text-[4.15rem] xl:max-w-[12ch] xl:text-[clamp(3.6rem,4.35vw,5.35rem)]"
              >
                Trusted specialist care for children and adults, with{" "}
                <span className="gradient-text gradient-text-shimmer">the calm every visit deserves.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-[1.15rem]"
              >
                Lumident brings pediatric, orthodontic, and adult dental care together in Beirut, with clear guidance from the first visit onward.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full"
            >
              <div className="relative mx-auto w-full max-w-[620px] px-0 sm:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px] 2xl:max-w-[900px]">
                <div className="absolute inset-x-[4%] top-14 h-[56%] rounded-[34%] bg-primary/6 blur-3xl sm:top-16 xl:top-20" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <svg viewBox="0 0 560 700" className="w-full drop-shadow-[0_22px_52px_rgba(15,23,42,0.14)] xl:drop-shadow-[0_30px_68px_rgba(15,23,42,0.16)]">
                    <defs>
                      <path id="lumident-hero-tooth-shape" d={heroToothPath} />
                      <clipPath id="lumident-hero-tooth">
                        <use href="#lumident-hero-tooth-shape" />
                      </clipPath>
                    </defs>

                    <g clipPath="url(#lumident-hero-tooth)">
                      <rect width="560" height="700" fill="hsl(var(--muted))" />
                      <AnimatePresence mode="wait">
                        <motion.image
                          key={primaryImage}
                          href={primaryImage}
                          x="-34"
                          y={imageY}
                          width="628"
                          height={imageHeight}
                          preserveAspectRatio={imageAspect}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.985 }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                          style={{ transformOrigin: imageTransformOrigin }}
                        />
                      </AnimatePresence>
                    </g>

                    <use
                      href="#lumident-hero-tooth-shape"
                      fill="none"
                      stroke="rgba(255,255,255,0.34)"
                      strokeWidth="2.25"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-surface-soft py-6 sm:py-8 md:py-10 xl:py-14">
        <div className="container mx-auto px-6">
          <div className="mb-4 text-center sm:mb-5">
            <span className="inline-block rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
              Why Lumident
            </span>
          </div>
          <div className="rounded-[2rem] border border-border/40 bg-background/85 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <div className="grid grid-cols-1 border-b border-border/25 sm:grid-cols-3">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                  <div className={`py-8 text-center sm:py-9 md:py-10 xl:py-12 ${i < stats.length - 1 ? "border-b border-border/25 sm:border-b-0 sm:border-r sm:border-border/25" : ""}`}>
                  <p className="text-[2.1rem] font-serif font-bold text-foreground sm:text-[2.35rem] md:text-[2.7rem]">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mx-auto mt-2 max-w-[14ch] text-[12px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[13px]">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
            </div>
            <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12">
              <SectionHeading
                title="A premium clinic experience with clinical clarity"
                subtitle="Specialist-led decisions, clear guidance, and modern diagnostics shape every visit."
                className="mb-6 md:mb-8"
              />
              <div className="grid gap-6 md:grid-cols-3 xl:gap-8">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                    <div className="glass-card hover-lift h-full p-7 md:p-8 xl:p-9">
                  <div className="icon-badge-lg mb-6 animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="mb-3 font-serif text-[1.4rem] font-semibold text-foreground">{item.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface-base py-14 sm:py-16 md:py-18 xl:py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Departments & Specialists"
            title="Meet the clinical leads behind each department"
            subtitle="Three specialist departments, each guided by a clinician whose academic background and day-to-day practice shape the standard of care."
          />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 xl:gap-8">
            {departmentHighlights.map((department, i) => (
              <AnimatedSection key={department.key} delay={i * 0.1} className="h-full">
                <Card className="flex h-full flex-col overflow-hidden border-border/40 bg-card/95 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
                  <CardContent className="flex h-full min-h-0 flex-col p-5 sm:p-6 md:p-7 xl:p-8">
                    <div className={`relative shrink-0 overflow-hidden rounded-[2rem] border border-border/30 bg-gradient-to-br ${department.color} p-6 sm:p-7`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)]" />
                      <div className="relative flex aspect-[4/4.8] items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/35 bg-background/80 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:px-7">
                        <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent sm:inset-x-7" />
                        <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent sm:inset-x-7" />
                        <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-foreground/70 via-foreground/22 to-transparent" />
                        <div className="h-[56%] w-[68%] rounded-[1.75rem] border border-dashed border-border/35 bg-background/45" />
                        <div className="absolute inset-x-6 bottom-6 z-10 sm:inset-x-7">
                          <h3 className="font-serif text-[1.25rem] font-semibold leading-snug text-white sm:text-[1.35rem] md:text-[1.4rem]">
                            {department.specialist}
                          </h3>
                          <p className="mt-1.5 text-xs font-medium text-white/88 sm:text-sm">{department.role}</p>
                        </div>
                      </div>
                      <span className="sr-only">{department.portraitAlt}</span>
                    </div>

                    <div className="mt-5 min-h-[3.5rem] shrink-0">
                      <p className="text-sm leading-relaxed text-muted-foreground">{department.academicLine}</p>
                    </div>

                    <p className="mt-4 shrink-0 text-sm leading-relaxed text-muted-foreground">{department.bio}</p>

                    {/* Fills remaining card height so Credentials / Recognition / Clinical focus start on the same row across columns */}
                    <div className="min-h-4 flex-1" aria-hidden="true" />

                    <div className="mt-4 grid shrink-0 grid-cols-1 gap-3.5">
                      <div className="flex min-h-[13.5rem] flex-col rounded-[1.4rem] border border-border/35 bg-muted/40 p-3.5 xl:p-4">
                        <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Credentials
                        </p>
                        <div className="mt-2.5 flex min-h-0 flex-1 flex-col justify-start space-y-1.5">
                          {department.credentials.map((item) => (
                            <p key={item} className="text-sm leading-[1.55] text-foreground/90">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="flex min-h-[6.25rem] flex-col rounded-[1.4rem] border border-border/35 bg-muted/40 p-3.5 xl:p-4">
                        <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Recognition
                        </p>
                        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-foreground/90">
                          {department.memberships.join(" · ")}
                        </p>
                      </div>

                      <div className="flex min-h-[9.5rem] flex-col rounded-[1.4rem] border border-border/35 bg-muted/40 p-3.5 xl:p-4">
                        <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                          Clinical focus
                        </p>
                        <div className="mt-2.5 flex min-h-0 flex-1 flex-col justify-start space-y-2">
                          {department.focus.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm text-foreground">
                              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary" />
                              <span className="leading-[1.55]">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto shrink-0 pt-7">
                      <Button asChild variant="ghost" className="h-auto rounded-full px-0 text-sm font-medium text-foreground hover:bg-transparent hover:text-primary">
                        <Link to={department.page}>
                          Explore Department
                          <ArrowRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-center md:mb-10">
            <span className="inline-block rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
              Guided Start
            </span>
          </div>
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center xl:max-w-4xl">
              <div className="glass-card p-7 sm:p-8 md:p-10 xl:p-12">
                <h3 className="mt-0 font-serif text-[2.2rem] font-semibold text-foreground md:text-[2.85rem]">
                  Start with the right department
                </h3>
                <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.08rem]">
                  Use the guided path for a practical recommendation, or reveal direct department selection if you already know what you need.
                </p>
                <div className="mt-7 flex flex-col items-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 shadow-lg"
                    onClick={() => {
                      setFinderOpen(true);
                      setDirectOpen(false);
                    }}
                  >
                    Find the right department
                  </Button>
                  <button
                    type="button"
                    onClick={() => {
                      setDirectOpen(true);
                      setFinderOpen(false);
                    }}
                    className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    I already know what I need
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            {finderOpen ? (
              <motion.div
                key="finder"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="mt-10 md:mt-12"
              >
                <div className="mx-auto max-w-5xl">
                  <div className="mb-6 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary sm:text-xs">Get guided</p>
                    <h3 className="mt-2 font-serif text-[2rem] font-semibold text-foreground md:text-[2.45rem]">
                      Find the right department if you are unsure
                    </h3>
                    <p className="mt-2 mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
                      Answer a few quick questions for a practical recommendation, then explore or book from the result.
                    </p>
                  </div>
                  <DepartmentFinder />
                </div>
              </motion.div>
            ) : null}

            {directOpen ? (
              <motion.div
                key="direct"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="mt-10 md:mt-12"
              >
                <div className="mx-auto max-w-6xl">
                  <div className="mb-6 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary sm:text-xs">Choose directly</p>
                    <h3 className="mt-2 font-serif text-[2rem] font-semibold text-foreground md:text-[2.45rem]">
                      Explore the department you already know
                    </h3>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                    {departmentHighlights.map((department, i) => (
                      <motion.div
                        key={department.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        className="h-full"
                      >
                          <Card className="hover-lift relative h-full overflow-hidden border-border/40 bg-card">
                          <div className={`absolute inset-0 bg-gradient-to-br ${department.color} opacity-0 hover:opacity-100 transition-opacity duration-500`} />
                            <CardContent className="relative flex h-full flex-col p-6 md:p-7 xl:p-8">
                            <div className="flex items-start gap-4">
                              <div className={`icon-badge shrink-0 bg-gradient-to-br ${department.color} p-2.5`}>
                                <img src={department.imageSrc} alt={department.title} className="h-full w-full object-contain" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="font-serif text-[1.2rem] font-semibold text-foreground">{department.title}</h4>
                                  <span className="rounded-full bg-primary/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                                    {department.specialist}
                                  </span>
                                </div>
                                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{department.description}</p>
                              </div>
                            </div>
                            <div className="mt-auto pt-6">
                              <Button asChild variant="outline" className="rounded-full w-full sm:w-auto">
                                <Link to={department.page}>
                                  Explore
                                  <ArrowRight size={15} />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>

      <section className="section-surface-base py-16 sm:py-18 md:py-22 xl:py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Visit Lumident"
            title="Easy to reach, easy to understand"
            subtitle="Useful details upfront, from clinic location to first-visit expectations."
          />
          <AnimatedSection>
            <div className="mx-auto grid max-w-7xl gap-5 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="glass-card bg-card/72 p-7 md:p-8 xl:p-10">
                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">Visit essentials</p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">The practical details patients usually look for first</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {visitDetails.map((detail) => (
                    <div key={detail.title} className="rounded-2xl border border-border/25 bg-background/48 p-5">
                      <detail.icon size={18} className="mb-3 text-primary" />
                      <p className="mb-2 text-sm font-semibold text-foreground">{detail.title}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{detail.body}</p>
                      {detail.href && detail.cta ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary"
                        >
                          {detail.cta}
                          <ArrowRight size={14} />
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card bg-card/68 p-7 md:p-8 xl:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">First visit</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">A clear start, without unnecessary steps</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Most visits begin with a focused consultation, records when needed, and clear direction on the next step.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Review the reason for your visit and the right department.",
                    "Take records or imaging only when they support diagnosis.",
                    "Leave with a clear next step, timing, and treatment direction.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/20 bg-background/52 p-4">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                      <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-surface-soft py-16 sm:py-18 md:py-22 xl:py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 text-center md:mb-10">
                <span className="inline-block rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                  Contact the right department
                </span>
                <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] font-medium leading-relaxed text-muted-foreground sm:text-[1.14rem] md:text-[1.22rem]">
                  Select the department most relevant to your visit.
                </p>
              </div>
              <div className="grid w-full gap-4 md:grid-cols-3 md:gap-5">
                <WhatsAppCTA
                  label="Contact Pediatric Dentistry"
                  href={departmentBooking.pediatric.whatsappUrl}
                  iconSrc={departmentBooking.pediatric.imageSrc}
                  iconAlt={departmentBooking.pediatric.title}
                  stacked
                  size="lg"
                  className="min-h-[9.25rem] rounded-[1.6rem] border border-primary/10 bg-primary/85 px-6 text-[1.03rem] font-bold text-primary-foreground shadow-md hover:bg-primary/75 hover:shadow-lg"
                />
                <WhatsAppCTA
                  label="Contact Orthodontics"
                  href={departmentBooking.orthodontics.whatsappUrl}
                  iconSrc={departmentBooking.orthodontics.imageSrc}
                  iconAlt={departmentBooking.orthodontics.title}
                  stacked
                  size="lg"
                  className="min-h-[9.25rem] rounded-[1.6rem] border border-primary/10 bg-primary/85 px-6 text-[1.03rem] font-bold text-primary-foreground shadow-md hover:bg-primary/75 hover:shadow-lg"
                />
                <WhatsAppCTA
                  label="Contact Adults & Cosmetics"
                  href={departmentBooking.adultsCosmetics.whatsappUrl}
                  iconSrc={departmentBooking.adultsCosmetics.imageSrc}
                  iconAlt={departmentBooking.adultsCosmetics.title}
                  stacked
                  size="lg"
                  className="min-h-[9.25rem] rounded-[1.6rem] border border-primary/10 bg-primary/85 px-6 text-[1.03rem] font-bold text-primary-foreground shadow-md hover:bg-primary/75 hover:shadow-lg"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
