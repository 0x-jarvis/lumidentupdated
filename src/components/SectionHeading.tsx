import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, badge, className, align = "center" }: SectionHeadingProps) => (
  <AnimatedSection className={cn("mb-10 md:mb-12 xl:mb-14", align === "center" && "text-center", className)}>
    {badge && (
      <span className="inline-block mb-3 rounded-full border border-primary/15 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
        {badge}
      </span>
    )}
    <h2 className={cn(
      "font-serif text-[2.2rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.45rem]",
      align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl",
    )}>
      {title}
    </h2>
    {subtitle && (
      <p className={cn(
        "mt-4 text-base font-medium leading-relaxed text-muted-foreground sm:text-[1.05rem] lg:text-[1.12rem]",
        align === "center" ? "mx-auto max-w-2xl xl:max-w-3xl" : "max-w-2xl",
      )}>
        {subtitle}
      </p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
