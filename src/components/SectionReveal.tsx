import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Scroll-linked reveal for full-width sections: subtle opacity, lift, and scale as the block enters view.
 * Respects prefers-reduced-motion.
 */
const SectionReveal = ({ children, className, id }: SectionRevealProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0.88, y: 24, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.68, ease: easeOutExpo }}
    >
      {children}
    </motion.section>
  );
};

export default SectionReveal;
