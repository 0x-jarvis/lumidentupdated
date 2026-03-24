import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cnPageContainer } from "@/lib/pageLayout";
import { clinicInfo } from "@/lib/lumident";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/pediatric", label: "Pediatric" },
  { to: "/orthodontics", label: "Orthodontics" },
  { to: "/gp-cosmetics", label: "GP & Cosmetics" },
];

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Top gradient border */}
    <div className="divider-gradient" />

    <div className="bg-foreground/[0.03] pt-16 pb-8">
      <div className={cnPageContainer()}>
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-5">
                <img
                  src="/lumident-logo.svg"
                  alt="Lumident"
                  className="h-14 w-auto sm:h-16"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Care that feels precise, personal, and calm. A modern dental clinic built around trust.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Pages</h4>
              <div className="space-y-2">
                {footerLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Phone size={14} className="mt-0.5 text-primary shrink-0" />
                  <a href={clinicInfo.phoneHref} className="hover:text-primary transition-colors">
                    {clinicInfo.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MessageCircle size={14} className="mt-0.5 text-primary shrink-0" />
                  <span>Department-specific WhatsApp booking</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="mt-0.5 text-primary shrink-0" />
                  <a href={clinicInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {clinicInfo.location}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Hours</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-primary shrink-0" />
                  <span>{clinicInfo.hours.weekdays}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-muted-foreground/30 shrink-0" />
                  <span className="text-muted-foreground/50">{clinicInfo.hours.weekends}</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="divider-gradient mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Lumident. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 italic font-serif">
            "Care that feels precise, personal, and calm."
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
