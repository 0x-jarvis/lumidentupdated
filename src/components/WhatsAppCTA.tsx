import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppCTAProps {
  label: string;
  href?: string;
  phone?: string;
  message?: string;
  iconSrc?: string;
  iconAlt?: string;
  stacked?: boolean;
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const WhatsAppCTA = ({
  label,
  href,
  phone = "1234567890",
  message = "Hello, I'd like to book an appointment.",
  iconSrc,
  iconAlt,
  stacked = false,
  className,
  variant = "default",
  size = "default",
}: WhatsAppCTAProps) => {
  const url = href ?? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        "gap-2 rounded-full transition-all duration-300",
        stacked && "h-auto flex-col gap-3 py-5 text-center",
        variant === "default" && "shadow-md hover:shadow-xl hover:shadow-primary/20",
        variant === "outline" && "hover:bg-primary/5",
        className
      )}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={iconAlt ?? label}
            className={cn(
              "shrink-0 object-contain",
              stacked ? "h-10 w-10" : "h-[18px] w-[18px]"
            )}
          />
        ) : (
          <MessageCircle size={stacked ? 28 : 18} />
        )}
        <span>{label}</span>
      </a>
    </Button>
  );
};

export default WhatsAppCTA;
